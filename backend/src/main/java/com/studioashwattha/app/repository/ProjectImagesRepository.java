package com.studioashwattha.app.repository;

import com.studioashwattha.app.entity.ProjectImages;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ProjectImagesRepository extends JpaRepository<ProjectImages, Long> {

    List<ProjectImages> findByProjectId(Long projectId);

}
