package com.santosh.nutrition_analyzer.controller;

import com.santosh.nutrition_analyzer.dto.ApiResponse;
import com.santosh.nutrition_analyzer.dto.food.DashboardResponse;
import com.santosh.nutrition_analyzer.dto.food.FoodRequest;
import com.santosh.nutrition_analyzer.dto.food.MealHistoryResponse;
import com.santosh.nutrition_analyzer.dto.food.NutritionResponse;
import com.santosh.nutrition_analyzer.service.FoodService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/food")
@RequiredArgsConstructor
public class FoodController {

    private final FoodService foodService;

    @PostMapping("/analyze")
    public ResponseEntity<ApiResponse<NutritionResponse>> analyze(@Valid @RequestBody FoodRequest request) {

        NutritionResponse response = foodService.analyzeMeal(request);

        return ResponseEntity.ok(new ApiResponse<>(true, "Meal analyzed successfully", response));
    }

    @GetMapping("/history")
    public ResponseEntity<ApiResponse<List<MealHistoryResponse>>> history() {
        return ResponseEntity.ok(
                new ApiResponse<>(true, "Meal history fetched successfully", foodService.getMealHistory()));
    }

    @DeleteMapping("/history/{id}")
    public ResponseEntity<ApiResponse<Void>> deleteMeal(@PathVariable Long id) {

        foodService.deleteMeal(id);

        return ResponseEntity.ok(new ApiResponse<>(true, "Meal deleted successfully", null));
    }

    @GetMapping("/dashboard")
    public ResponseEntity<ApiResponse<DashboardResponse>> dashboard() {

        return ResponseEntity.ok(
                new ApiResponse<>(
                        true,
                        "Dashboard fetched successfully",
                        foodService.getDashboard()
                )
        );
    }
}