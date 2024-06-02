package com.studioashwattha.app.model;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ProjectImagesModel {

    private Long id;
    private String imagePath;
    private String imageName;
    private Boolean isDeleted;

}
