package com.codecool.umbrella.api.client;

import com.codecool.umbrella.logic.WebClientService;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;

@Controller
public class CoordinatesClient {

    private final String geocodingApi;
    private final String reverseGeocodingApi;
    private WebClientService webClientService;

    public CoordinatesClient(
            @Value("${api.geocoding}") String geocodingApi,
            @Value("${api.reverseGeocoding}") String reverseGeocodingApi,
            WebClientService webClientService
    ) {
        this.geocodingApi = geocodingApi;
        this.reverseGeocodingApi = reverseGeocodingApi;
        this.webClientService = webClientService;
    }

    public String getBy(String name) {
        String params = "?name=" + name;
        return webClientService.getOne(geocodingApi, params);
    }

    public String getBy(String latitude, String longitude) {
        String params = String.format("&lat=%s&lon=%s", latitude, longitude);
        return webClientService.getOne(reverseGeocodingApi, params);
    }
}
