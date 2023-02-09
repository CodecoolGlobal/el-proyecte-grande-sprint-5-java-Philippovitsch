package com.codecool.umbrella.controller;

import com.codecool.umbrella.util.UrlReader;
import com.google.gson.JsonElement;
import com.google.gson.JsonParser;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class GetWeatherDataController {

    private final String WEATHER_API = "https://api.open-meteo.com/v1/forecast";

    @GetMapping("/api/weather/current/{coordinates}")
    public String getWeatherData(@PathVariable String coordinates) {
        String latitude = coordinates.split(",")[0];
        String longitude = coordinates.split(",")[1];
        String params = String.format(
                "?latitude=%s&longitude=%s&current_weather=true"
                , latitude
                , longitude
        );

        String data = UrlReader.getDataFromUrl(WEATHER_API, params);
        String convertedData = convertData(data);
        return convertedData;
    }

    private String convertData(String data) {
        if (data == null || data.equals("")) return "[]";
        JsonElement results = JsonParser.parseString(data).getAsJsonObject().get("current_weather");
        return results.toString();
    }

}