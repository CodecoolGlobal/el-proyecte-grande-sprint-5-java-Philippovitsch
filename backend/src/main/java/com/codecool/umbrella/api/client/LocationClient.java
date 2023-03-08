package com.codecool.umbrella.api.client;

import com.codecool.umbrella.logic.WebClientService;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;

@Controller
public class LocationClient {

    private final String reverseGeocodingApi;
    private final String timeApi;
    private final WebClientService webClientService;

    public LocationClient(
            @Value("${api.reverseGeocoding}") String reverseGeocodingApi,
            @Value("${api.time}") String timeApi,
            WebClientService webClientService) {
        this.reverseGeocodingApi = reverseGeocodingApi;
        this.timeApi = timeApi;
        this.webClientService = webClientService;
    }

    public String getLocationBy(String latitude, String longitude) {
        String params = String.format("&lat=%s&lon=%s", latitude, longitude);
        return webClientService.getOne(reverseGeocodingApi, params);
    }

    public String getTimeBy(String latitude, String longitude) {
        String params = String.format("?latitude=%s&longitude=%s", latitude, longitude);
        return webClientService.getOne(timeApi, params);
    }

}
