package com.studioashwattha.app.exception;

import com.studioashwattha.app.util.BaseResponse;
import com.studioashwattha.app.util.ResponseCode;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ControllerAdvice;

@ControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(ProjectNotFoundException.class)
    public ResponseEntity<BaseResponse> handleProjectNotFoundException(ProjectNotFoundException ex) {
        BaseResponse response = BaseResponse.of(
                ResponseCode.PROJECT_DETAILS_FOUND,
                null,
                ex.getMessage()
        );
        return new ResponseEntity<>(response, HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity<BaseResponse> handleGeneralException(Exception ex) {
        BaseResponse response = BaseResponse.of(
                ResponseCode.INTERNAL_SERVER_ERROR,
                null,
                ex.getMessage()
        );
        return new ResponseEntity<>(response, HttpStatus.INTERNAL_SERVER_ERROR);
    }
}

