package com.santosh.nutrition_analyzer.dto.food;

import lombok.Data;

import java.time.LocalDateTime;

@Data
public class MealHistoryResponse {

    private Long id;

    private String meal;

    private Integer calories;

    private Double protein;

    private Double carbs;

    private Double fat;

    private Double fiber;

    private Integer healthScore;

    private String suggestions;

    private LocalDateTime analyzedAt;
}