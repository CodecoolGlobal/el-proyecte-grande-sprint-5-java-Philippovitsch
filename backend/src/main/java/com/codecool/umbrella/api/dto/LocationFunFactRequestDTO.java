package com.codecool.umbrella.api.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@JsonIgnoreProperties(ignoreUnknown = true)
public class LocationFunFactRequestDTO {

    private String model;
    private String prompt;
    private int max_tokens;

    public LocationFunFactRequestDTO(String location, String country) {
        this.model = "text-davinci-003";
        this.prompt = String.format(
                "You are used for a weather app. Please give the user a funny fact about %s in %s"
                , location
                , country
        );
        this.max_tokens = 100;
    }

}
