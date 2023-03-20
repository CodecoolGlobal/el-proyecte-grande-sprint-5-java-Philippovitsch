package com.codecool.umbrella.api.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@JsonIgnoreProperties(ignoreUnknown = true)
public class HourlyForecastDTO {

    private float latitude;
    private float longitude;

    List<String> time;
    List<String> temperature_2m;
    List<String> windspeed_10m;
    List<String> rain;

}
