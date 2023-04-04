package com.codecool.umbrella.api.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@JsonIgnoreProperties(ignoreUnknown = true)
public class WeatherForecastDTO {

    private float latitude;
    private float longitude;
    @JsonProperty("hourly")
    private HourlyForecastDTO hourlyForecast;

}
