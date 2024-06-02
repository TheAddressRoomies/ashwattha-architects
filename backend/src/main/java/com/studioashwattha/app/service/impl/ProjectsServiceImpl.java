package com.studioashwattha.app.service.impl;

import com.studioashwattha.app.entity.Project;
import com.studioashwattha.app.entity.ProjectImages;
import com.studioashwattha.app.exception.ProjectNotFoundException;
import com.studioashwattha.app.model.ProjectImagesModel;
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
import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.Optional;

@Service
public class ProjectsServiceImpl implements ProjectsService {

    private static final Logger logger = LoggerFactory.getLogger(ProjectsServiceImpl.class);


    @Autowired
    private ProjectRepository projectRepository;

    @Autowired
    private ProjectImagesRepository projectImageRepository;

    public List<Project> findProjects(String category) {
        logger.info("Fetching projects by category");
        List<Project> projects = null;
        if(category != null) {
             projects = projectRepository.findAllByCategory(category);

        }else {
            projects = projectRepository.findAll();
        }

        projects = projects.stream().sorted(Comparator.comparingInt(Project::getRating).reversed()).toList();

        return projects;
    }

    public Project findProjectById(Long id) {
        logger.info("Fetching project with ID: {}", id);
        Optional<Project> project = projectRepository.findById(id);
        if(project.isEmpty()) {
            throw new ProjectNotFoundException("Project with ID "+id+" not found");
        }
        return project.get();
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
                .rating(Integer.parseInt(projectModel.getRating()))
                .videoUrl(projectModel.getVideoUrl())
                .build();

        Project savedProject =projectRepository.save(project);

        List<ProjectImages> projectImagesList = new ArrayList<>();
        for (MultipartFile image : images) {
            String imagePath = saveImage(image);
            ProjectImages projectImage = new ProjectImages();
            projectImage.setImagePath(imagePath);
            projectImage.setImageName(image.getOriginalFilename());
            projectImagesList.add(projectImage);
            projectImage.setProject(savedProject);
            projectImageRepository.save(projectImage);
        }
        projectImagesList.forEach(projectImages -> projectImages.setProject(null));
        savedProject.setImages(projectImagesList);

        return savedProject;
    }

    private String saveImage(MultipartFile image) throws IOException {
        Path source = Paths.get(System.getProperty("user.dir"));
        File f = new File(source.toUri());
        Path newFolder = Paths.get(f.getParent() + "/frontend/images/");
        Files.createDirectories(newFolder);

        String imagePath = newFolder+"/"+ image.getOriginalFilename();
        File file = new File(imagePath);
        image.transferTo(file);
        logger.info("Saved image to: {}", imagePath);
        return imagePath;
    }

    public void deleteProjectById(Long id){
        //this function will throw exception if project is not present in DB
        Project project = findProjectById(id);
        //INFO: delete all images from file system for that project
        List<ProjectImages> imgList = project.getImages();

        imgList.forEach(i-> {
            deleteImageFromPath(i.getImagePath());
        });
        projectRepository.deleteAll();
        projectRepository.deleteById(id);
    }

    @Override
    public Project updateProject(ProjectModel projectModel, List<MultipartFile> images) throws IOException {

        //TODO:
        // find project by id
        // update the values of project from input projectModel
        // post new images for project
        // Iterate over images array from input and delete isDeleted images from db and file system


        Project project = findProjectById(projectModel.getId());

        List<ProjectImages> projectImagesList = new ArrayList<>();
        if(images != null) {
            for (MultipartFile image : images) {
                if(image.getOriginalFilename().isBlank()){
                    continue;
                }
                String imagePath = saveImage(image);
                ProjectImages projectImage = new ProjectImages();
                projectImage.setImagePath(imagePath);
                projectImage.setImageName(image.getOriginalFilename());
                projectImagesList.add(projectImage);
                projectImage.setProject(project);
                projectImageRepository.save(projectImage);
            }
        }


        for(ProjectImagesModel projectImagesModel: projectModel.getImages()){
            if(projectImagesModel.getIsDeleted()!= null && projectImagesModel.getIsDeleted()){
                deleteImageFromPath(projectImagesModel.getImagePath());
                if(projectImageRepository.findById(projectImagesModel.getId()).isPresent()) {
                    projectImageRepository.deleteById(projectImagesModel.getId());
                }
            }
        }

        project.setCompletionDate(projectModel.getCompletionDate());
        project.setArea(projectModel.getArea());
        project.setCategory(projectModel.getCategory());
        project.setDescription(projectModel.getDescription());
        project.setRating(Integer.parseInt(projectModel.getRating()));
        project.setTeam(projectModel.getTeam());
        project.setType(projectModel.getType());
        project.setTitle(projectModel.getTitle());
        project.setLocation(projectModel.getLocation());
        project.setVideoUrl(projectModel.getVideoUrl());

        projectRepository.save(project);

        if(!projectImagesList.isEmpty()) {
            projectImagesList.forEach(projectImages -> projectImages.setProject(null));
            project.setImages(projectImagesList);
        }

        return project;
    }

    private void deleteImageFromPath(String imagePath){
        Path imagesPath = Paths.get(imagePath);
        try {
            Files.delete(imagesPath);
            logger.info("File "
                    + imagesPath.toAbsolutePath().toString()
                    + " successfully removed");
        } catch (IOException e) {
            logger.error("Unable to delete "
                    + imagesPath.toAbsolutePath().toString()
                    + " due to...");
            e.printStackTrace();
        }
    }
}
