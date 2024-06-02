package com.studioashwattha.app.model;

import com.studioashwattha.app.entity.ProjectImages;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.time.LocalDate;
import java.util.List;

@Getter
@Setter
@ToString
public class ProjectModel {

    private Long id;
    private String title;
    private String location;
    private String category;
    private String description;
    private String type;
    private String team;
    private LocalDate completionDate;
    private String area;
    private String rating;
    private String videoUrl;
    private List<ProjectImagesModel> images;

}
