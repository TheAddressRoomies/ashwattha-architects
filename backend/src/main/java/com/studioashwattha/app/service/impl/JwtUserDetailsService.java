package com.studioashwattha.app.service.impl;

import com.studioashwattha.app.entity.AdminUser;
import com.studioashwattha.app.repository.AdminUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class JwtUserDetailsService implements UserDetailsService {

    @Autowired
    private AdminUserRepository adminUserRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        AdminUser adminUser = adminUserRepository.findByUsername(username);
        if (adminUser == null) {
            throw new UsernameNotFoundException("User not found with username: " + username);
        }
        return new User(adminUser.getUsername(), adminUser.getPassword(), new ArrayList<>());
    }
}

