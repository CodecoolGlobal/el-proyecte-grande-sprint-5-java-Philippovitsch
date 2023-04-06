package com.codecool.umbrella.api.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@JsonIgnoreProperties(ignoreUnknown = true)
public class CurrentWeatherDTO {

    private double temperature;
    private double windspeed;
    private double winddirection;
    private int weathercode;
    private String time;

}
