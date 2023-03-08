package com.codecool.umbrella.logic;

import com.codecool.umbrella.api.client.LocationClient;
import com.codecool.umbrella.api.dto.CurrentLocationDTO;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.stereotype.Service;

@Service
public class LocationService {

    private final LocationClient locationClient;
    private final ObjectMapper objectMapper;

    public LocationService(LocationClient locationClient, ObjectMapper objectMapper) {
        this.locationClient = locationClient;
        this.objectMapper = objectMapper;
    }

    public CurrentLocationDTO getLocationByCoordinates(String latitude, String longitude) throws JsonProcessingException {
        String json = locationClient.getBy(latitude, longitude);
        return objectMapper.readValue(json, CurrentLocationDTO.class);
    }

}
