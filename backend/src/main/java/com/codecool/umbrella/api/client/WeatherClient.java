package com.codecool.umbrella.api.client;

import com.codecool.umbrella.logic.WebClientService;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;

@Controller
public class WeatherClient {
    private final String currentWeatherApi;
    private final String forecastWeatherApi;
    private final String forecastDayApi;
    private final WebClientService webClientService;

    public WeatherClient(
            @Value("${api.weather}") String currentWeatherApi,
            @Value("${api.weatherForecastSpecificDay}") String forecastDayApi,
            @Value("${api.weatherForecast}") String forecastWeatherApi,
            WebClientService webClientService
    ) {
        this.currentWeatherApi = currentWeatherApi;
        this.forecastWeatherApi = forecastWeatherApi;
        this.forecastDayApi = forecastDayApi;
        this.webClientService = webClientService;
    }

    public String getBy(String coordinates) {
        String latitude = coordinates.split(",")[0];
        String longitude = coordinates.split(",")[1];
        String params = String.format(
                "?latitude=%s&longitude=%s&current_weather=true"
                , latitude
                , longitude
        );
        return webClientService.getOne(currentWeatherApi, params);
    }

    public String getForecastBy(String coordinates) {
        String latitude = coordinates.split(",")[0];
        String longitude = coordinates.split(",")[1];
        String params = String.format(
                "&latitude=%s&longitude=%s"
                , latitude
                , longitude
        );
        return webClientService.getOne(forecastWeatherApi, params);
    }

    public String getForecastBy(String date, String coordinates) {
        String latitude = coordinates.split(",")[0];
        String longitude = coordinates.split(",")[1];
        String params = String.format(
                "&latitude=%s&longitude=%s&start_date=%s&end_date=%s"
                , latitude
                , longitude
                , date
                , date
        );
        return webClientService.getOne(forecastDayApi, params);
    }
}
