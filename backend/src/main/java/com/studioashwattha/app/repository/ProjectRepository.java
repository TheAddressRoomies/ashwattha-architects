package com.studioashwattha.app.repository;

import com.studioashwattha.app.entity.Project;
import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProjectRepository extends JpaRepository<Project, Long> {
  Page<Project> findAllByCategory(String category, Pageable pageable);
}
