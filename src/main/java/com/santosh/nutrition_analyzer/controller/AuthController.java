package com.santosh.nutrition_analyzer.controller;

import com.santosh.nutrition_analyzer.dto.ApiResponse;
import com.santosh.nutrition_analyzer.dto.auth.LoginRequest;
import com.santosh.nutrition_analyzer.dto.auth.LoginResponse;
import com.santosh.nutrition_analyzer.dto.auth.RegisterRequest;
import com.santosh.nutrition_analyzer.dto.auth.RegisterResponse;
import com.santosh.nutrition_analyzer.service.AuthService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/auth")
public class AuthController {
    private final AuthService authService;

    @PostMapping("/register")
    public ResponseEntity<ApiResponse<RegisterResponse>> register(@Valid @RequestBody RegisterRequest request) {
        RegisterResponse response = authService.register(request);
        return ResponseEntity.status(HttpStatus.CREATED)
                             .body(new ApiResponse<>(true, "User registered successfully", response));
    }

    @PostMapping("/login")
    public ResponseEntity<ApiResponse<LoginResponse>> login(@Valid @RequestBody LoginRequest request) {
        LoginResponse response = authService.login(request);
        ApiResponse<LoginResponse> apiResponse = new ApiResponse<>(true, "Login successful", response);
        return ResponseEntity.ok(apiResponse);
    }
}
