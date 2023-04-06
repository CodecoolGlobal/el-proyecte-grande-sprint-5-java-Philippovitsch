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

    private List<String> time;
    private List<String> temperature_2m;
    private List<String> windspeed_10m;
    private List<String> rain;

}
