package com.santosh.nutrition_analyzer.service;

import com.santosh.nutrition_analyzer.dto.food.DashboardResponse;
import com.santosh.nutrition_analyzer.dto.food.FoodRequest;
import com.santosh.nutrition_analyzer.dto.food.MealHistoryResponse;
import com.santosh.nutrition_analyzer.dto.food.NutritionResponse;

import java.util.List;

public interface FoodService {

    NutritionResponse analyzeMeal(FoodRequest request);
    List<MealHistoryResponse> getMealHistory();
    void deleteMeal(Long mealId);
    DashboardResponse getDashboard();
}