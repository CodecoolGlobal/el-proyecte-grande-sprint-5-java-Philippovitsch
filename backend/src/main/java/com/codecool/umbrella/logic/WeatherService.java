package com.codecool.umbrella.logic;

import com.codecool.umbrella.api.client.WeatherClient;
import com.codecool.umbrella.api.dto.*;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClientResponseException;

import java.sql.Timestamp;
import java.util.Date;
import java.util.List;

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

    public HourlyForecastDTO getForecastByCoordinates(String coordinates) throws JsonProcessingException {
        String json = weatherClient.getForecastBy(coordinates);
        WeatherForecastDTO weatherForecastDTO = objectMapper.readValue(json, WeatherForecastDTO.class);
        HourlyForecastDTO hourlyForecastDTO = weatherForecastDTO.getHourlyForecast();
        hourlyForecastDTO.setLatitude(weatherForecastDTO.getLatitude());
        hourlyForecastDTO.setLongitude(weatherForecastDTO.getLongitude());
        return hourlyForecastDTO;
    }

    public DailyForecastDTO getForecastForDay(String coordinates, String date ) throws JsonProcessingException {
        SpecificDayForecastDTO specificDayForecastDTO;
        try {
            String json = weatherClient.getForecastBy(date, coordinates);
            specificDayForecastDTO = objectMapper.readValue(json, SpecificDayForecastDTO.class);
        } catch (WebClientResponseException error) {
            DailyForecastDTO dailyForecastDTO = DailyForecastDTO.builder()
                    .time(List.of(new Timestamp(new Date().getTime()).toString()))
                    .weathercode(List.of("-1"))
                    .temperature_2m_max(List.of("n.a."))
                    .temperature_2m_min(List.of("n.a."))
                    .windspeed_10m_max(List.of("n.a."))
                    .build();

            specificDayForecastDTO = new SpecificDayForecastDTO();
            specificDayForecastDTO.setDailyForecastDTO(dailyForecastDTO);
        }
        return specificDayForecastDTO.getDailyForecastDTO();
    }

}
