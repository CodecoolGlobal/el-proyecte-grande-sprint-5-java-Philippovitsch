package com.codecool.umbrella.api.client;

import com.codecool.umbrella.logic.WebClientService;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;

@Controller
public class OpenAIClient {

    private final String openAIApi;
    private final WebClientService webClientService;

    public OpenAIClient(@Value("${api.openAI}") String openAIApi, WebClientService webClientService) {
        this.openAIApi = openAIApi;
        this.webClientService = webClientService;
    }

    public String getBy(String location, String country) {
        return webClientService.getLocationFunFact(openAIApi, location, country);
    }

}
