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
public class CoordinatesClient {
    private final String api;

    public CoordinatesClient(@Value("${api.geocoding}") String api) {
        this.api = api;
    }

    //TODO: Upgrade this method to use WebClient instead (not URL+openConnection)
    public String getBy(String name) {
        String params = "?name=" + name;
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
