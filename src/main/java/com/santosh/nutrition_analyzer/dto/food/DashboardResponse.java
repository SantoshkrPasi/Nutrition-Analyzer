package com.santosh.nutrition_analyzer.dto.food;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class DashboardResponse {

    private int mealsToday;

    private Integer totalCalories;

    private Double totalProtein;

    private Double totalCarbs;

    private Double totalFat;

    private Double totalFiber;

    private int averageHealthScore;

}