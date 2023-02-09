package com.codecool.umbrella.util;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.URL;
import java.net.URLConnection;
import java.nio.charset.StandardCharsets;
import java.util.stream.Collectors;

public class UrlReader {

    public static String getDataFromUrl(String url, String params) {
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

}
