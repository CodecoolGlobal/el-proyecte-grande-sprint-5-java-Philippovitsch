package com.codecool.umbrella.api.client;

import com.codecool.umbrella.logic.WebClientService;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;

@Controller
public class CoordinatesClient {
    private final String api;
    private WebClientService webClientService;

    public CoordinatesClient(@Value("${api.geocoding}") String api, WebClientService webClientService) {
        this.api = api;
        this.webClientService = webClientService;
    }

    public String getBy(String name) {
        String params = "?name=" + name;
        return webClientService.getOne(api, params);
    }
}
