package com.codecool.umbrella.api.client;

import com.codecool.umbrella.logic.WebClientService;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;

@Controller
public class CoordinatesClient {

    private final String geocodingApi;
    private WebClientService webClientService;

    public CoordinatesClient(@Value("${api.geocoding}") String geocodingApi, WebClientService webClientService) {
        this.geocodingApi = geocodingApi;
        this.webClientService = webClientService;
    }

    public String getBy(String name) {
        String params = "?name=" + name;
        return webClientService.getOne(geocodingApi, params);
    }

}
