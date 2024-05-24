package com.studioashwattha.app.util;

import lombok.AllArgsConstructor;
import lombok.Data;
import org.apache.commons.lang3.StringUtils;

@Data
@AllArgsConstructor
public class BaseResponse {

    private int responseCode = 0;
    private String message = StringUtils.EMPTY;
    private Object data;
    private String backendError;

    private BaseResponse(int resCode, String message){
        this.responseCode=resCode;
        this.message=message;
    }

    public static BaseResponse of(ResponseCode response){
        return new BaseResponse(response.resCode, response.getMessage());
    }

    public static BaseResponse of(ResponseCode response, Object data){
        return new BaseResponse(response.resCode, response.getMessage(), data, null);
    }

    public static BaseResponse of(ResponseCode response, Object data, String backendError){
        return new BaseResponse(response.resCode, response.getMessage(), data, backendError);
    }

}
