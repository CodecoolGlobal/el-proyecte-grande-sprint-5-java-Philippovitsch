package com.codecool.umbrella.api.client;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.URL;
import java.net.URLConnection;
import java.nio.charset.StandardCharsets;
import java.util.stream.Collectors;

@Controller
public class WeatherClient {
    private final String api;

    public WeatherClient(@Value("${api.weather}") String api) {
        this.api = api;
    }

    //TODO: Upgrade this method to use WebClient instead (not URL+openConnection)
    public String getBy(String coordinates) {
        String latitude = coordinates.split(",")[0];
        String longitude = coordinates.split(",")[1];
        String params = String.format(
                "?latitude=%s&longitude=%s&current_weather=true"
                , latitude
                , longitude
        );
        try {
            URLConnection connection = new URL(api + params).openConnection();
            BufferedReader reader = new BufferedReader(new InputStreamReader(connection.getInputStream(), StandardCharsets.UTF_8));
            String lines = reader.lines().collect(Collectors.joining("\n"));
            reader.close();
            return lines;
        } catch (IOException error) {
            throw new RuntimeException(error);
        }
    }
}
