package com.santosh.nutrition_analyzer.service;

import com.santosh.nutrition_analyzer.dto.auth.LoginRequest;
import com.santosh.nutrition_analyzer.dto.auth.LoginResponse;
import com.santosh.nutrition_analyzer.dto.auth.RegisterRequest;
import com.santosh.nutrition_analyzer.dto.auth.RegisterResponse;

public interface AuthService {
    RegisterResponse register(RegisterRequest request);
    LoginResponse login(LoginRequest request);
}
