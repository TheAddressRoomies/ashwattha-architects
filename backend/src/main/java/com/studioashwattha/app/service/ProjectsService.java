package com.studioashwattha.app.service;

import com.studioashwattha.app.entity.Project;
import com.studioashwattha.app.entity.ProjectImages;
import com.studioashwattha.app.model.ProjectModel;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

public interface ProjectsService {

    public List<Project> findAllProjects();
    public Project findProjectById(Long id);
//    public List<ProjectImages> findProjectImages(Long projectId);
    public Project saveProject(ProjectModel project, List<MultipartFile> images) throws IOException;
}
