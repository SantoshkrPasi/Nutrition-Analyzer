package com.santosh.nutrition_analyzer.service.impl;

import com.santosh.nutrition_analyzer.dto.food.NutritionResponse;
import com.santosh.nutrition_analyzer.dto.groq.GroqRequest;
import com.santosh.nutrition_analyzer.dto.groq.Message;
import com.santosh.nutrition_analyzer.service.AiService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import tools.jackson.databind.JsonNode;
import tools.jackson.databind.ObjectMapper;

import java.util.List;

@Service
@RequiredArgsConstructor
public class AiServiceImpl implements AiService {

    private final WebClient webClient;
    private final ObjectMapper objectMapper;

    @Value("${groq.api.key}")
    private String apiKey;

    @Value("${groq.api.url}")
    private String apiUrl;

    @Value("${groq.api.model}")
    private String model;

    private String buildPrompt(String meal) {

        return """
                You are a certified nutritionist.
                
                Analyze the following meal.
                
                Meal:
                %s
                
                Estimate the nutrition values.
                
                Return ONLY valid JSON.
                
                {
                  "food":"",
                  "calories":0,
                  "protein":0,
                  "carbs":0,
                  "fat":0,
                  "fiber":0,
                  "healthScore":0,
                  "suggestions":[]
                }
                
                Rules:
                1. Return ONLY JSON.
                2. Do NOT use markdown.
                3. Do NOT include units like kcal or g.
                4. Return a single estimated value.
                5. Do NOT return ranges.
                
                Example:
                
                {
                  "food":"2 dosa and coffee",
                  "calories":380,
                  "protein":8,
                  "carbs":65,
                  "fat":11,
                  "fiber":5,
                  "healthScore":6,
                  "suggestions":[
                     "Reduce sugar",
                     "Add vegetables"
                  ]
                }
                """.formatted(meal);
    }

    @Override
    public NutritionResponse analyzeMeal(String meal) {

        try {

            String prompt = buildPrompt(meal);

            Message system = new Message("system", "You are a certified nutrition expert.");

            Message user = new Message("user", prompt);

            GroqRequest request = new GroqRequest(model, List.of(system, user));

            String response = webClient.post()
                                       .uri(apiUrl)
                                       .header("Authorization", "Bearer " + apiKey)
                                       .header("Content-Type", "application/json")
                                       .bodyValue(request)
                                       .retrieve()
                                       .bodyToMono(String.class)
                                       .block();

            JsonNode root = objectMapper.readTree(response);

            String aiResponse = root.path("choices").get(0).path("message").path("content").asText();

            return objectMapper.readValue(aiResponse, NutritionResponse.class);

        } catch (Exception e) {

            throw new RuntimeException("AI analysis failed", e);
        }
    }

}