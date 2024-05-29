package com.studioashwattha.app.service;

import com.studioashwattha.app.entity.Project;
import com.studioashwattha.app.model.ProjectModel;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

public interface ProjectsService {

    public List<Project> findProjects(String category);
    public Project findProjectById(Long id);
//    public List<ProjectImages> findProjectImages(Long projectId);
    public Project saveProject(ProjectModel project, List<MultipartFile> images) throws IOException;
    void deleteProjectById(Long id);
}
