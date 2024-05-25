package com.studioashwattha.app.util;

import lombok.Getter;

public enum ResponseCode {

    SUCCESS(200, "Success"),
    PROJECT_DETAILS_FOUND(1001, "INFO1001: Project details found"),
    INTERNAL_SERVER_ERROR(500, "Internal server error"),
    BAD_REQUEST(400, "Bad request"),
    UNAUTHORIZED(401, "Unauthorized" ),
    LOGIN_SUCCESS(200, "Login Successful" );


    public final int resCode;
    @Getter
    public  final String message;

    ResponseCode(int resCode, String message){
        this.resCode = resCode;
        this.message=message;
    }

    public int getValue(){
        return resCode;
    }

}
