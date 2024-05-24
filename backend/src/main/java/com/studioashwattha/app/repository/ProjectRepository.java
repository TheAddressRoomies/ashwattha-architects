package com.studioashwattha.app.repository;

import com.studioashwattha.app.entity.Project;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProjectRepository extends JpaRepository<Project, Long> {
}
