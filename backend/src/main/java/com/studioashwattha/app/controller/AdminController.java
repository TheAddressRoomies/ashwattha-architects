package com.studioashwattha.app.controller;

import com.studioashwattha.app.model.AuthRequest;
import com.studioashwattha.app.model.AuthResponse;
import com.studioashwattha.app.repository.AdminUserRepository;
import com.studioashwattha.app.service.impl.JwtUserDetailsService;
import com.studioashwattha.app.util.BaseResponse;
import com.studioashwattha.app.util.JwtUtil;
import com.studioashwattha.app.util.ResponseCode;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/admin")
public class AdminController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtUserDetailsService userDetailsService;

    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private AdminUserRepository adminUserRepository;

    @PostMapping("/login")
    public ResponseEntity<?> createAuthenticationToken(@RequestBody AuthRequest authRequest) throws Exception {
        try {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(authRequest.getUsername(), authRequest.getPassword())
            );
        } catch (Exception e) {
            return ResponseEntity.status(401).body(BaseResponse.of(ResponseCode.UNAUTHORIZED, null, "Invalid username or password"));
        }

        final UserDetails userDetails = userDetailsService.loadUserByUsername(authRequest.getUsername());
        final String jwt = jwtUtil.generateToken(userDetails);

        return ResponseEntity.ok(BaseResponse.of(ResponseCode.LOGIN_SUCCESS, new AuthResponse(jwt), null));

    }

}

