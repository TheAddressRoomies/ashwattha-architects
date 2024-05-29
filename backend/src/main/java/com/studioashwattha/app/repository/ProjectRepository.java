package com.studioashwattha.app.repository;

import com.studioashwattha.app.entity.Project;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProjectRepository extends JpaRepository<Project, Long> {
  List<Project> findAllByCategory(String category);
}
