package com.studioashwattha.app.controller;

import com.studioashwattha.app.entity.Project;
import com.studioashwattha.app.entity.ProjectImages;
import com.studioashwattha.app.model.ProjectModel;
import com.studioashwattha.app.service.ProjectsService;
import com.studioashwattha.app.util.BaseResponse;
import com.studioashwattha.app.util.ResponseCode;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.zip.ZipEntry;
import java.util.zip.ZipOutputStream;

@RestController
@RequestMapping("/projects")
public class ProjectController {
    @Autowired
    private ProjectsService projectService;

    @GetMapping
    public ResponseEntity<BaseResponse> findProjects(@RequestParam(value = "category",required = false) String category) {
        List<Project> projects =  projectService.findProjects(category);

        BaseResponse response = BaseResponse.of(
                ResponseCode.SUCCESS,
                projects,
                null
        );
        return ResponseEntity.ok(response);
    }

    @GetMapping("/{id}")
    public ResponseEntity<BaseResponse> findProjectById(@PathVariable Long id) {
        Project project = projectService.findProjectById(id);
        BaseResponse response = BaseResponse.of(
                ResponseCode.SUCCESS,
                project,
                null
        );
        return ResponseEntity.ok(response);
    }

//    @GetMapping("/{id}/images")
//    public ResponseEntity<byte[]> findProjectImages(@PathVariable Long id) {
//        List<ProjectImages> images = projectService.findProjectImages(id);
//
//        ByteArrayOutputStream baos = new ByteArrayOutputStream();
//        try (ZipOutputStream zos = new ZipOutputStream(baos)) {
//            for (ProjectImages image : images) {
//                addImageToZip(zos, image);
//            }
//        } catch (IOException e) {
//            // Handle IOException
//        }
//
//        HttpHeaders headers = new HttpHeaders();
//        headers.setContentType(MediaType.APPLICATION_OCTET_STREAM);
//        headers.setContentDispositionFormData("attachment", "images"+id+".zip");
//        return new ResponseEntity<>(baos.toByteArray(), headers, HttpStatus.OK);
//    }

    private void addImageToZip(ZipOutputStream zos, ProjectImages image) throws IOException {
        Path imagePath = Paths.get( image.getImagePath());
        byte[] imageData = Files.readAllBytes(imagePath);

        ZipEntry zipEntry = new ZipEntry(imagePath.getFileName().toString());
        zos.putNextEntry(zipEntry);
        zos.write(imageData);
        zos.closeEntry();
    }

    @PostMapping(consumes = MediaType.MULTIPART_FORM_DATA_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<BaseResponse> createProject(@RequestPart("project") ProjectModel projectModel,
                                                               @RequestPart("images") List<MultipartFile> images) throws IOException {
        Project savedProject = projectService.saveProject(projectModel, images);
        BaseResponse response = BaseResponse.of(
                ResponseCode.SUCCESS,
                savedProject,
                null
        );
        return ResponseEntity.ok(response);
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity<BaseResponse> deleteProject(@PathVariable long id) {

        projectService.deleteProjectById(id);
        BaseResponse response = BaseResponse.of(
            ResponseCode.SUCCESS
        );
        return ResponseEntity.ok(response);
    }
}

