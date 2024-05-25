package com.studioashwattha.app.model;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
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
    private String videoUrl;

}
