package com.santosh.nutrition_analyzer.dto.food;

import lombok.Data;

import java.util.List;

@Data
public class NutritionResponse {

    private String food;

    private Integer calories;

    private Double protein;

    private Double carbs;

    private Double fat;

    private Double fiber;

    private Integer healthScore;

    private List<String> suggestions;
}