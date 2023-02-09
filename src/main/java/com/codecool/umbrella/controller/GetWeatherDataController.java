package com.codecool.umbrella.controller;

import com.google.gson.JsonArray;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.URL;
import java.net.URLConnection;
import java.nio.charset.StandardCharsets;
import java.util.stream.Collectors;

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

        String data = getData(WEATHER_API, params);
        String convertedData = convertData(data);
        return convertedData;
    }

    private String getData(String url, String params) {
        try {
            URLConnection connection = new URL(url + params).openConnection();
            BufferedReader reader = new BufferedReader(new InputStreamReader(connection.getInputStream(), StandardCharsets.UTF_8));
            String lines = reader.lines().collect(Collectors.joining("\n"));
            reader.close();
            return lines;
        } catch (IOException error) {
            throw new RuntimeException(error);
        }
    }

    private String convertData(String data) {
        JsonElement results = JsonParser.parseString(data).getAsJsonObject().get("current_weather");
        return results.toString();
    }

}