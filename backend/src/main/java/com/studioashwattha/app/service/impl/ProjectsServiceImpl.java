package com.studioashwattha.app.service.impl;

import com.studioashwattha.app.entity.Project;
import com.studioashwattha.app.entity.ProjectImages;
import com.studioashwattha.app.exception.ProjectNotFoundException;
import com.studioashwattha.app.model.ProjectModel;
import com.studioashwattha.app.repository.ProjectImagesRepository;
import com.studioashwattha.app.repository.ProjectRepository;
import com.studioashwattha.app.service.ProjectsService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class ProjectsServiceImpl implements ProjectsService {

    private static final Logger logger = LoggerFactory.getLogger(ProjectsServiceImpl.class);


    @Autowired
    private ProjectRepository projectRepository;

    @Autowired
    private ProjectImagesRepository projectImageRepository;

    public List<Project> findAllProjects() {
        logger.info("Fetching all projects");
        return projectRepository.findAll();
    }

    public Project findProjectById(Long id) {
        logger.info("Fetching project with ID: {}", id);
        return projectRepository.findById(id).orElseThrow(()-> new ProjectNotFoundException("Project with ID "+id+" not found"));
    }

//    public List<ProjectImages> findProjectImages(Long projectId) {
//        logger.info("Fetching images for project ID: {}", projectId);
//        return projectImageRepository.findByProjectId(projectId);
//    }

    public Project saveProject(ProjectModel projectModel, List<MultipartFile> images) throws IOException {
        logger.info("Saving project: {}", projectModel.getTitle());
        Project project = Project.builder()
                .area(projectModel.getArea())
                .team(projectModel.getTeam())
                .title(projectModel.getTitle())
                .category(projectModel.getCategory())
                .description(projectModel.getDescription())
                .completionDate(projectModel.getCompletionDate())
                .location(projectModel.getLocation())
                .type(projectModel.getType())
                .videoUrl(projectModel.getVideoUrl())
                .build();

        Project savedProject =projectRepository.save(project);

        List<ProjectImages> projectImagesList = new ArrayList<>();
        for (MultipartFile image : images) {
            String imagePath = saveImage(image);
            ProjectImages projectImage = new ProjectImages();
            projectImage.setImagePath(imagePath);
            projectImagesList.add(projectImage);
            projectImage.setProject(savedProject);
            projectImageRepository.save(projectImage);
        }
        projectImagesList.forEach(projectImages -> projectImages.setProject(null));
        savedProject.setImages(projectImagesList);

        return savedProject;
    }

    private String saveImage(MultipartFile image) throws IOException {
        Path source = Paths.get(System.getProperty("user.dir")+"/src/main/resources");
        Path newFolder = Paths.get(source.toAbsolutePath() + "/static/");
        Files.createDirectories(newFolder);

        String imagePath = newFolder+"/"+ image.getOriginalFilename();
        File file = new File(imagePath);
        image.transferTo(file);
        logger.info("Saved image to: {}", imagePath);
        return imagePath;
    }
}
