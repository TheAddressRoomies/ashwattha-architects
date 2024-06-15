package com.studioashwattha.app.service.impl;

import com.studioashwattha.app.entity.DashboardCarouselImages;
import com.studioashwattha.app.model.DashboardImagesModel;
import com.studioashwattha.app.repository.DashboardRepository;
import com.studioashwattha.app.service.DashboardService;
import com.studioashwattha.app.util.ImageUtil;
import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

@Service
public class DashboardServiceImpl extends ImageUtil implements DashboardService {


  @Autowired
  private DashboardRepository dashboardRepository;

  @Override
  public List<DashboardCarouselImages> saveOrUpdateDashboardCarouselImages(List<MultipartFile> images,List<DashboardImagesModel> payload)
      throws IOException {
    List<DashboardCarouselImages> imagesToBeSaved = new ArrayList<>();
    for(int i = 0; i < images.size(); i++) {
      DashboardCarouselImages dashboardCarouselImages = new DashboardCarouselImages();
      deleteImageFromPath(payload.get(i).getImagePath());
      File savedImage = saveImage(images.get(i));
      dashboardCarouselImages.setImagePath(savedImage.getAbsolutePath());
      dashboardCarouselImages.setImageName(savedImage.getName());
      dashboardCarouselImages.setId(payload.get(i).getId());
      dashboardCarouselImages.setImageType(payload.get(i).getImageType());
      imagesToBeSaved.add(dashboardCarouselImages);
    }
    return dashboardRepository.saveAll(imagesToBeSaved);
  }

  @Override
  public List<DashboardCarouselImages> getDashboardCarouselImages() {
    return dashboardRepository.findAll();
  }
}
