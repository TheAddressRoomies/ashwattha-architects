package com.studioashwattha.app.controller;

import com.studioashwattha.app.entity.DashboardCarouselImages;
import com.studioashwattha.app.model.DashboardImagesModel;
import com.studioashwattha.app.service.DashboardService;
import com.studioashwattha.app.util.BaseResponse;
import com.studioashwattha.app.util.ResponseCode;
import java.io.IOException;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/dashboard")
public class DashboardController {

  @Autowired
  private DashboardService dashboardService;

  @PutMapping(value = "carousel",consumes = MediaType.MULTIPART_FORM_DATA_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
  public ResponseEntity<BaseResponse> updateDashboardCarousel(@RequestPart("images") List<MultipartFile> images, @RequestPart("payload") List<DashboardImagesModel> payload)
      throws IOException {
    List<DashboardCarouselImages> savedImages= dashboardService.saveOrUpdateDashboardCarouselImages(images,payload);
    return ResponseEntity.ok(BaseResponse.of(ResponseCode.SUCCESS,savedImages,null));
  }

  @GetMapping(value = "carousel")
  public ResponseEntity<BaseResponse> getDashboardCarousel() {
    List<DashboardCarouselImages> dashboardCarouselImages= dashboardService.getDashboardCarouselImages();
    return ResponseEntity.ok(BaseResponse.of(ResponseCode.SUCCESS,dashboardCarouselImages,null));
  }

}
