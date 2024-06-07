package com.studioashwattha.app.util;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.UUID;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.multipart.MultipartFile;

public class ImageUtil {

  private static final Logger logger = LoggerFactory.getLogger(ImageUtil.class);

  public File saveImage(MultipartFile image) throws IOException {
    Path source = Paths.get(System.getProperty("user.dir"));
    Path newFolder = Paths.get(source + "/src/main/resources/static/");
    Files.createDirectories(newFolder);

    String imagePath = newFolder+"/"+ getUniqueIdentifier() + "_" + image.getOriginalFilename();
    File file = new File(imagePath);
    image.transferTo(file);
    logger.info("Saved image to: {}", imagePath);
    return file;
  }

  public void deleteImageFromPath(String imagePath){
    Path imagesPath = Paths.get(imagePath);
    try {
      Files.delete(imagesPath);
      logger.info("File "
          + imagesPath.toAbsolutePath()
          + " successfully removed");
    } catch (IOException e) {
      logger.error("Unable to delete "
          + imagesPath.toAbsolutePath()
          + " due to...");
      e.printStackTrace();
    }
  }

  private String getUniqueIdentifier() {
      return UUID.randomUUID().toString().replace("-", "");
  }
}
