package com.codecool.umbrella.logic;

import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import org.springframework.web.reactive.function.client.WebClientResponseException;

@Service
public class WebClientService {

    public WebClient.Builder getWebClientBuilder() {
        return WebClient.builder();
    }

    public String getOne(String api, String params) throws WebClientResponseException {
        return getWebClientBuilder().build()
                .get()
                .uri(api + params)
                .retrieve()
                .bodyToMono(String.class)
                .block();
    }
}
