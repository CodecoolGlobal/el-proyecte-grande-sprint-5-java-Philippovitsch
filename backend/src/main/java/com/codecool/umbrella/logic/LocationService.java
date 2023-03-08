package com.codecool.umbrella.logic;

import com.codecool.umbrella.api.client.LocationClient;
import com.codecool.umbrella.api.dto.CurrentLocationDTO;
import com.codecool.umbrella.api.dto.TimeDTO;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.stereotype.Service;

@Service
public class LocationService {

    private final int LATITUDE = 0;
    private final int LONGITUDE = 1;

    private final LocationClient locationClient;
    private final ObjectMapper objectMapper;

    public LocationService(LocationClient locationClient, ObjectMapper objectMapper) {
        this.locationClient = locationClient;
        this.objectMapper = objectMapper;
    }

    public CurrentLocationDTO getLocationByCoordinates(String coordinates) throws JsonProcessingException {
        String latitude = coordinates.split(",")[LATITUDE];
        String longitude = coordinates.split(",")[LONGITUDE];
        String json = locationClient.getLocationBy(latitude, longitude);
        return objectMapper.readValue(json, CurrentLocationDTO.class);
    }

    public TimeDTO getLocalTimeByCoordinates(String coordinates) throws JsonProcessingException {
        String latitude = coordinates.split(",")[LATITUDE];
        String longitude = coordinates.split(",")[LONGITUDE];
        String json = locationClient.getTimeBy(latitude, longitude);
        return objectMapper.readValue(json, TimeDTO.class);
    }

}
