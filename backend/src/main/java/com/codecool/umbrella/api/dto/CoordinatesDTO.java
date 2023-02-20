package com.codecool.umbrella.api.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@JsonIgnoreProperties(ignoreUnknown = true)
public class CoordinatesDTO {
    private String id;
    private String name;
    private String country;
    private String latitude;
    private String longitude;
}
