package com.studioashwattha.app.service;

import com.studioashwattha.app.entity.Project;
import com.studioashwattha.app.model.ProjectModel;
import org.springframework.data.domain.Page;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

public interface ProjectsService {

    public Page<Project> findProjects(String category, int page, int pageSize);
    public Project findProjectById(Long id);
//    public List<ProjectImages> findProjectImages(Long projectId);
    public Project saveProject(ProjectModel project, List<MultipartFile> images) throws IOException;
    void deleteProjectById(Long id);

    public Project updateProject(ProjectModel projectModel, List<MultipartFile> images) throws IOException;
}
