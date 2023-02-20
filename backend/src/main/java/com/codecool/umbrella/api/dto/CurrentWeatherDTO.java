package com.codecool.umbrella.api.dto;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
public class CurrentWeatherDTO {
    private double temperature;
    private double windspeed;
    private double winddirection;
    private int weathercode;
    private LocalDateTime time;
}
