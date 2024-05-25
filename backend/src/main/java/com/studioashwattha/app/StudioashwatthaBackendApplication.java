package com.studioashwattha.app;

import com.studioashwattha.app.entity.AdminUser;
import com.studioashwattha.app.repository.AdminUserRepository;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class StudioashwatthaBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(StudioashwatthaBackendApplication.class, args);
	}


	@Bean
	public AdminUser createConfig(AdminUserRepository adminUserRepository){

		if(adminUserRepository.findAll().isEmpty()) {

			AdminUser adminUser = new AdminUser();
			adminUser.setEmail("xxx");
			adminUser.setUsername("admin");
			//password = admin@123 : $2a$12$9s4fd8SxxFt9uUuaUkhiGes2C/WVvN.U6ldkgVjSsdZNE5L8/95iC
			adminUser.setPassword("$2a$12$9s4fd8SxxFt9uUuaUkhiGes2C/WVvN.U6ldkgVjSsdZNE5L8/95iC");
			return adminUserRepository.save(adminUser);
		}else return null;
	}

}
