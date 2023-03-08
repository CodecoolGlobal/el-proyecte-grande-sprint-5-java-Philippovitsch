package com.codecool.umbrella.api.client;

import com.codecool.umbrella.logic.WebClientService;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;

@Controller
public class LocationClient {

    private final String reverseGeocodingApi;
    private final WebClientService webClientService;

    public LocationClient(@Value("${api.reverseGeocoding}") String reverseGeocodingApi, WebClientService webClientService) {
        this.reverseGeocodingApi = reverseGeocodingApi;
        this.webClientService = webClientService;
    }

    public String getBy(String latitude, String longitude) {
        String params = String.format("&lat=%s&lon=%s", latitude, longitude);
        return webClientService.getOne(reverseGeocodingApi, params);
    }

}
