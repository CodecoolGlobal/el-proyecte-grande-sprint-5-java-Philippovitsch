package com.codecool.umbrella.api.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CoordinatesDTO {
    private String id;
    private String name;
    private String country;
    private String latitude;
    private String longitude;
}
