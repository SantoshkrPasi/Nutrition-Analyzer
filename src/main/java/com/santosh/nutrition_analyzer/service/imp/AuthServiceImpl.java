package com.santosh.nutrition_analyzer.service.imp;

import com.santosh.nutrition_analyzer.dto.auth.LoginRequest;
import com.santosh.nutrition_analyzer.dto.auth.LoginResponse;
import com.santosh.nutrition_analyzer.dto.auth.RegisterRequest;
import com.santosh.nutrition_analyzer.dto.auth.RegisterResponse;
import com.santosh.nutrition_analyzer.entity.User;
import com.santosh.nutrition_analyzer.exception.EmailAlreadyExistsException;
import com.santosh.nutrition_analyzer.repository.UserRepository;
import com.santosh.nutrition_analyzer.security.JwtService;
import com.santosh.nutrition_analyzer.service.AuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthServiceImpl implements AuthService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;

    @Override
    public RegisterResponse register(RegisterRequest request) {
        if (userRepository.existsByEmail(request.getEmail())) {
            throw new EmailAlreadyExistsException("Email already exists");
        }
        User user = new User();
        user.setEmail(request.getEmail());
        user.setName(request.getName());
        user.setPassword(passwordEncoder.encode(request.getPassword()));
        User savedUser = userRepository.save(user);
        return new RegisterResponse(savedUser.getId(), savedUser.getEmail(), savedUser.getName());
    }

    @Override
    public LoginResponse login(LoginRequest request) {
        User user = userRepository.findByEmail(request.getEmail())
                                  .orElseThrow(() -> new RuntimeException("Invalid email or password"));
        if (!passwordEncoder.matches(request.getPassword(), user.getPassword())) {
            throw new RuntimeException("Invalid email or password");
        }
        String token = jwtService.generateToken(user);
        return new LoginResponse(token);
    }
}
