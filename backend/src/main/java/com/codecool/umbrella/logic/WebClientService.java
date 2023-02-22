package com.codecool.umbrella.logic;

import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

@Service
public class WebClientService {

    public WebClient.Builder getWebClientBuilder() {
        return WebClient.builder();
    }

    public String getOne(String api, String params) {
        return getWebClientBuilder().build()
                .get()
                .uri(api + params)
                .retrieve()
                .bodyToMono(String.class)
                .block();
    }
}
