package com.codecool.umbrella.logic;

import com.codecool.umbrella.api.client.OpenAIClient;
import com.codecool.umbrella.api.dto.LocationFunFactMessageDTO;
import com.codecool.umbrella.api.dto.LocationFunFactResponseDTO;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.stereotype.Service;

@Service
public class OpenAIService {

    private final OpenAIClient openAIClient;
    private final ObjectMapper objectMapper;

    public OpenAIService(OpenAIClient openAIClient, ObjectMapper objectMapper) {
        this.openAIClient = openAIClient;
        this.objectMapper = objectMapper;
    }

    public LocationFunFactMessageDTO getLocationFunFact(String location, String country) throws JsonProcessingException {
        String json = openAIClient.getBy(location, country);
        LocationFunFactResponseDTO response = objectMapper.readValue(json, LocationFunFactResponseDTO.class);
        return response.getMessages().get(0);
    }

    public LocationFunFactMessageDTO getTestLocationFunFact(String location, String country) {
        String message = String.format(
                "Test fact for %s, %s: Lorem ipsum dolor sit amet. Aut galisum exercitationem id excepturi veniam vel amet quasi At inventore officia."
                , location
                , country
        );
        return LocationFunFactMessageDTO.builder().message(message).build();
    }

}
