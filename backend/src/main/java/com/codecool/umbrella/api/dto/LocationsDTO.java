package com.codecool.umbrella.api.dto;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class LocationsDTO {
    private List<CoordinatesDTO> results;
}
