package com.santosh.nutrition_analyzer.service;

import com.santosh.nutrition_analyzer.dto.food.NutritionResponse;

public interface AiService {

    NutritionResponse analyzeMeal(String meal);

}