package com.studioashwattha.app.service;

import com.studioashwattha.app.entity.DashboardCarouselImages;
import com.studioashwattha.app.model.DashboardImagesModel;
import java.io.IOException;
import java.util.List;
import org.springframework.web.multipart.MultipartFile;

public interface DashboardService {
  List<DashboardCarouselImages> saveOrUpdateDashboardCarouselImages(List<MultipartFile> images,List<DashboardImagesModel> payload) throws IOException;
  List<DashboardCarouselImages> getDashboardCarouselImages();
}
