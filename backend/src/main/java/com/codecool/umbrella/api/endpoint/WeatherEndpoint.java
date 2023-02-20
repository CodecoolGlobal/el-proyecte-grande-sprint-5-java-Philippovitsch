package com.codecool.umbrella.api.endpoint;

import com.codecool.umbrella.api.dto.CurrentWeatherDTO;
import com.codecool.umbrella.logic.WeatherService;
import com.fasterxml.jackson.core.JsonProcessingException;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/api/weather/current")
public class WeatherEndpoint {
    private final WeatherService weatherService;

    public WeatherEndpoint(WeatherService weatherService) {
        this.weatherService = weatherService;
    }

    @GetMapping("{coordinates}")
    public CurrentWeatherDTO getBy(@PathVariable String coordinates) throws JsonProcessingException {
        return weatherService.getByCoordinates(coordinates);

    }
}