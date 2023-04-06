package com.codecool.umbrella.api.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@JsonIgnoreProperties(ignoreUnknown = true)
public class CurrentLocationDTO {

    private int place_id;
    private float lat;
    private float lon;
    private String display_name;

}
