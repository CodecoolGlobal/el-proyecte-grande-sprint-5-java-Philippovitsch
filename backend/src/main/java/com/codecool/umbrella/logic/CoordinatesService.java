package com.codecool.umbrella.logic;

import com.codecool.umbrella.api.client.CoordinatesClient;
import com.codecool.umbrella.api.dto.CoordinatesDTO;
import com.codecool.umbrella.api.dto.LocationsDTO;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.stereotype.Service;

@Service
public class CoordinatesService {
    private final CoordinatesClient coordinatesClient;
    private final ObjectMapper objectMapper;

    public CoordinatesService(CoordinatesClient coordinatesClient, ObjectMapper objectMapper) {
        this.coordinatesClient = coordinatesClient;
        this.objectMapper = objectMapper;
    }

    public CoordinatesDTO getByName(String name) throws JsonProcessingException {
        String json = coordinatesClient.getBy(name);
        System.out.println("json = " + json);
        LocationsDTO locationsDTO = objectMapper.readValue(json, LocationsDTO.class);
        return locationsDTO.getResults().get(0);
    }
}
