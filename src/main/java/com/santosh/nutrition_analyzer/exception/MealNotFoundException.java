package com.santosh.nutrition_analyzer.exception;

public class MealNotFoundException extends RuntimeException {

    public MealNotFoundException(String message) {
        super(message);
    }
}
