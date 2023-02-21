package com.codecool.umbrella.logic;

import com.codecool.umbrella.api.client.WeatherClient;
import com.codecool.umbrella.api.dto.CurrentWeatherDTO;
import com.codecool.umbrella.api.dto.WeatherDTO;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.stereotype.Service;

@Service
public class WeatherService {
    private final WeatherClient weatherClient;
    private final ObjectMapper objectMapper;

    public WeatherService(WeatherClient weatherClient, ObjectMapper objectMapper) {
        this.weatherClient = weatherClient;
        this.objectMapper = objectMapper;
    }

    public CurrentWeatherDTO getByCoordinates(String coordinates) throws JsonProcessingException {
        String json = weatherClient.getBy(coordinates);
        WeatherDTO weatherDTO = objectMapper.readValue(json, WeatherDTO.class);
        return weatherDTO.getCurrentWeather();
    }
}
