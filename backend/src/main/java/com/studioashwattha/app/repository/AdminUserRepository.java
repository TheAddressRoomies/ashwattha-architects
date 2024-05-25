package com.studioashwattha.app.repository;

import com.studioashwattha.app.entity.AdminUser;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AdminUserRepository extends JpaRepository<AdminUser, Long> {
    AdminUser findByUsername(String username);
    AdminUser findByEmail(String email);
}
