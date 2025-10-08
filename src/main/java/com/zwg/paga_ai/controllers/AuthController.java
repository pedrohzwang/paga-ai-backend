package com.zwg.paga_ai.controllers;

import com.zwg.paga_ai.config.TokenConfig;
import com.zwg.paga_ai.dto.LoginRequest;
import com.zwg.paga_ai.dto.LoginResponse;
import com.zwg.paga_ai.dto.RegisterUserRequest;
import com.zwg.paga_ai.dto.RegisterUserResponse;
import com.zwg.paga_ai.entities.UserEntity;
import com.zwg.paga_ai.repositories.UserRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.UUID;

@RestController
@RequestMapping("/auth")
public class AuthController {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;
    private final TokenConfig tokenConfig;

    public AuthController(UserRepository userRepository, PasswordEncoder passwordEncoder, AuthenticationManager authenticationManager, TokenConfig tokenConfig) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.authenticationManager = authenticationManager;
        this.tokenConfig = tokenConfig;
    }

    @PostMapping("/login")
    public ResponseEntity<LoginResponse> login(@RequestBody LoginRequest request) {
        UsernamePasswordAuthenticationToken usernameAndPass = new UsernamePasswordAuthenticationToken(request.username(), request.password());
        Authentication authentication = authenticationManager.authenticate(usernameAndPass);

        UserEntity user = (UserEntity) authentication.getPrincipal();
        String token = tokenConfig.generateToken(user);

        return ResponseEntity.ok(new LoginResponse(token));
    }

    @PostMapping("/register")
    public ResponseEntity<RegisterUserResponse> register(@RequestBody RegisterUserRequest request) {
        UserEntity user = new UserEntity();
        user.setId(UUID.randomUUID());
        user.setUsername(request.username());
        user.setPassword(passwordEncoder.encode(request.password()));
        user.setEmail(request.email());
        user.setName(request.name());
        user.setLastname(request.lastname());

        this.userRepository.save(user);

        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(new RegisterUserResponse(
                    request.name(),
                    request.lastname(),
                    request.username()
                ));
    }
}
