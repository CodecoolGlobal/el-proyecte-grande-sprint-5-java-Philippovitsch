package com.codecool.umbrella.logic;

import com.codecool.umbrella.api.dto.LocationFunFactRequestDTO;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import org.springframework.web.reactive.function.client.WebClientResponseException;
import reactor.core.publisher.Mono;

@Service
public class WebClientService {

    private final String openAIToken;

    public WebClientService(@Value("${token.openAIToken}")
                            String openAIToken) {
        this.openAIToken = openAIToken;
    }

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

    public String getLocationFunFact(String api, String location, String country) {
        LocationFunFactRequestDTO request = new LocationFunFactRequestDTO(location, country);
        return getWebClientBuilder().build()
                .post()
                .uri(api)
                .header(HttpHeaders.AUTHORIZATION, openAIToken)
                .header(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON_VALUE)
                .body(Mono.just(request), LocationFunFactRequestDTO.class)
                .retrieve()
                .bodyToMono(String.class)
                .block();
    }

}
