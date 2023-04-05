package com.codecool.umbrella.api.endpoint;

import com.codecool.umbrella.security.payload.request.LoginRequest;
import com.codecool.umbrella.security.payload.request.SignUpRequest;
import com.codecool.umbrella.security.services.AuthEndpointService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(originPatterns = {"*"}, maxAge = 3600, allowCredentials = "true")
@RestController
@RequestMapping("/api/auth")
public class AuthenticationEndpoint {

    @Autowired // improve
    private AuthEndpointService endpointService;

    @PostMapping("/sign-in")
    public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginRequest loginRequest) {
        return endpointService.authenticateUser(loginRequest);
    }

    @PostMapping("/sign-up")
    public ResponseEntity<?> registerUser(@Valid @RequestBody SignUpRequest signUpRequest) {
        return endpointService.registerUser(signUpRequest);
    }

    @PostMapping("/sign-out")
    public ResponseEntity<?> logoutUser() {
        return endpointService.logoutUser();
    }
}
