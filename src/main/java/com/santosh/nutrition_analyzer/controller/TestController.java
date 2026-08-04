package com.santosh.nutrition_analyzer.controller;

import com.santosh.nutrition_analyzer.dto.food.FoodRequest;
import com.santosh.nutrition_analyzer.dto.food.NutritionResponse;
import com.santosh.nutrition_analyzer.service.AiService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/test")
@RequiredArgsConstructor
public class TestController {

    private final AiService aiService;

    @PostMapping
    public NutritionResponse test(@RequestBody FoodRequest request) {

        return aiService.analyzeMeal(request.getMeal());

    }
}

