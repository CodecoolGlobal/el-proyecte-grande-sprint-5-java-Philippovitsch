package com.codecool.umbrella.api.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.*;

import java.util.List;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@JsonIgnoreProperties(ignoreUnknown = true)
public class DailyForecastDTO {

    private List<String> time;
    private List<String> weathercode;
    private List<String> temperature_2m_max;
    private List<String> temperature_2m_min;
    private List<String> windspeed_10m_max;

}
