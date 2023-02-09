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
public class GetCoordinatesController {

    private final String COORDINATES_API = "https://geocoding-api.open-meteo.com/v1/search";

    @GetMapping("/api/coordinates/{name}")
    public String getCoordinates(@PathVariable String name) {
        String data = getData(COORDINATES_API, "?name=" + name);
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
        JsonElement results = JsonParser.parseString(data).getAsJsonObject().get("results");
        JsonArray convertedResults = new JsonArray();

        if (results == null) return "[]";

        for (JsonElement element : results.getAsJsonArray()) {
            JsonObject jsonObject = new JsonObject();
            jsonObject.addProperty("id", element.getAsJsonObject().get("id").toString().replace("\"", ""));
            jsonObject.addProperty("name", element.getAsJsonObject().get("name").toString().replace("\"", ""));
            jsonObject.addProperty("country", element.getAsJsonObject().get("country").toString().replace("\"", ""));
            jsonObject.addProperty("latitude", element.getAsJsonObject().get("latitude").toString().replace("\"", ""));
            jsonObject.addProperty("longitude", element.getAsJsonObject().get("longitude").toString().replace("\"", ""));
            convertedResults.add(jsonObject);
        }

        return convertedResults.toString();
    }

}
