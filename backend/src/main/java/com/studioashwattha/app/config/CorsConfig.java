package com.studioashwattha.app.config;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.converter.HttpMessageConverter;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import java.util.List;

@Configuration
@EnableWebMvc
public class CorsConfig implements WebMvcConfigurer {
  @Override
  public void addCorsMappings(CorsRegistry corsRegistry){
    corsRegistry.addMapping("/**").allowedOrigins("*").allowedMethods("GET","POST","DELETE","PUT");
  }

  /**
   * This method is added to return date as "yyyy-MM-dd" format, removing this method
   * will cause API to return date in String array format
   */
  @Override
  public void extendMessageConverters(List<HttpMessageConverter<?>> converters) {
    converters.removeIf(converter -> {
      String converterName = converter.getClass().getSimpleName();
      return converterName.equals("MappingJackson2HttpMessageConverter");
    });
    MappingJackson2HttpMessageConverter converter = new MappingJackson2HttpMessageConverter();
    ObjectMapper objectMapper = new ObjectMapper();
    objectMapper.registerModule(new JavaTimeModule());
    objectMapper.configure(SerializationFeature.WRITE_DATES_AS_TIMESTAMPS, false);
    converter.setObjectMapper(objectMapper);
    converters.add(converter);
    WebMvcConfigurer.super.extendMessageConverters(converters);
  }
}
