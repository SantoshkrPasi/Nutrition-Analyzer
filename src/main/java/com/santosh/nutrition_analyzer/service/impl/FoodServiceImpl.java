package com.santosh.nutrition_analyzer.service.impl;

import com.santosh.nutrition_analyzer.dto.food.DashboardResponse;
import com.santosh.nutrition_analyzer.dto.food.FoodRequest;
import com.santosh.nutrition_analyzer.dto.food.MealHistoryResponse;
import com.santosh.nutrition_analyzer.dto.food.NutritionResponse;
import com.santosh.nutrition_analyzer.entity.MealHistory;
import com.santosh.nutrition_analyzer.entity.User;
import com.santosh.nutrition_analyzer.exception.MealNotFoundException;
import com.santosh.nutrition_analyzer.exception.UserNotFoundException;
import com.santosh.nutrition_analyzer.repository.MealHistoryRepository;
import com.santosh.nutrition_analyzer.repository.UserRepository;
import com.santosh.nutrition_analyzer.service.AiService;
import com.santosh.nutrition_analyzer.service.FoodService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
@RequiredArgsConstructor
public class FoodServiceImpl implements FoodService {

    private final AiService aiService;
    private final MealHistoryRepository mealHistoryRepository;
    private final UserRepository userRepository;

    @Override
    public NutritionResponse analyzeMeal(FoodRequest request) {

        User user = getCurrentUser();
        NutritionResponse nutrition = aiService.analyzeMeal(request.getMeal());

        MealHistory meal = new MealHistory();

        meal.setMeal(request.getMeal());
        meal.setCalories(nutrition.getCalories());
        meal.setProtein(nutrition.getProtein());
        meal.setCarbs(nutrition.getCarbs());
        meal.setFat(nutrition.getFat());
        meal.setFiber(nutrition.getFiber());
        meal.setHealthScore(nutrition.getHealthScore());

        meal.setSuggestions(String.join(", ", nutrition.getSuggestions()));

        meal.setUser(user);

        mealHistoryRepository.save(meal);

        return nutrition;
    }

    @Override
    public List<MealHistoryResponse> getMealHistory() {
        User user = getCurrentUser();
        return mealHistoryRepository.findByUserId(user.getId()).stream().map(this::convertToResponse).toList();
    }

    @Override
    public void deleteMeal(Long mealId) {

        User user = getCurrentUser();

        MealHistory meal = mealHistoryRepository.findByIdAndUserId(mealId, user.getId())
                                                .orElseThrow(() -> new MealNotFoundException(
                                                        "Meal not found with id: " + mealId));

        mealHistoryRepository.delete(meal);
    }

    @Override
    public DashboardResponse getDashboard() {

        User user = getCurrentUser();

        List<MealHistory> meals =
                mealHistoryRepository.findByUserId(user.getId());

        LocalDate today = LocalDate.now();

        List<MealHistory> todayMeals = meals.stream()
                                            .filter(meal -> meal.getAnalyzedAt().toLocalDate().equals(today))
                                            .toList();

        int mealsToday = todayMeals.size();

        Double averageHealthScore =
                todayMeals.stream()
                          .mapToInt(MealHistory::getHealthScore)
                          .average()
                          .orElse(0);

        int totalCalories =
                todayMeals.stream()
                          .mapToInt(MealHistory::getCalories)
                          .sum();

        double totalProtein =
                todayMeals.stream()
                          .mapToDouble(MealHistory::getProtein)
                          .sum();

        double totalCarbs =
                todayMeals.stream()
                          .mapToDouble(MealHistory::getCarbs)
                          .sum();

        double totalFat =
                todayMeals.stream()
                          .mapToDouble(MealHistory::getFat)
                          .sum();

        double totalFiber =
                todayMeals.stream()
                          .mapToDouble(MealHistory::getFiber)
                          .sum();

        return new DashboardResponse(
                mealsToday,
                totalCalories,
                totalProtein,
                totalCarbs,
                totalFat,
                totalFiber,
                averageHealthScore
        );
    }

    // 👇 Add the mapper method here
    private MealHistoryResponse convertToResponse(MealHistory meal) {

        MealHistoryResponse response = new MealHistoryResponse();

        response.setId(meal.getId());
        response.setMeal(meal.getMeal());
        response.setCalories(meal.getCalories());
        response.setProtein(meal.getProtein());
        response.setCarbs(meal.getCarbs());
        response.setFat(meal.getFat());
        response.setFiber(meal.getFiber());
        response.setHealthScore(meal.getHealthScore());
        response.setSuggestions(meal.getSuggestions());
        response.setAnalyzedAt(meal.getAnalyzedAt());

        return response;
    }

    private User getCurrentUser() {

        String email = SecurityContextHolder.getContext().getAuthentication().getName();

        return userRepository.findByEmail(email)
                             .orElseThrow(() -> new UserNotFoundException("User not found with email: " + email));
    }

}