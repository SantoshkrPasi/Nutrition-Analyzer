package com.santosh.nutrition_analyzer.dto.food;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class FoodRequest {

    @NotBlank(message = "Meal cannot be empty")
    private String meal;

}