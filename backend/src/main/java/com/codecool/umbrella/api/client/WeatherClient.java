package com.codecool.umbrella.api.client;

import com.codecool.umbrella.logic.WebClientService;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;

@Controller
public class WeatherClient {
    private final String api;
    private WebClientService webClientService;

    public WeatherClient(@Value("${api.weather}") String api, WebClientService webClientService) {
        this.api = api;
        this.webClientService = webClientService;
    }

    public String getBy(String coordinates) {
        String latitude = coordinates.split(",")[0];
        String longitude = coordinates.split(",")[1];
        String params = String.format(
                "?latitude=%s&longitude=%s&current_weather=true"
                , latitude
                , longitude
        );
        return webClientService.getOne(api, params);
    }
}
