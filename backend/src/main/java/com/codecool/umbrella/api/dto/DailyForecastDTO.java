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

    List<String> time;
    List<String> weathercode;
    List<String> temperature_2m_max;
    List<String> temperature_2m_min;
    List<String> windspeed_10m_max;

}
