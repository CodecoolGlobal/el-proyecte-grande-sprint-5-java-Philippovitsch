package com.codecool.umbrella.api.endpoint;

import com.codecool.umbrella.api.dto.CurrentLocationDTO;
import com.codecool.umbrella.logic.LocationService;
import com.fasterxml.jackson.core.JsonProcessingException;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/api/location")
public class LocationEndpoint {

    LocationService locationService;

    public LocationEndpoint(LocationService locationService) {
        this.locationService = locationService;
    }

    @GetMapping("{coordinates}")
    public CurrentLocationDTO getLocationByCoordinates(@PathVariable("coordinates") String coordinates) throws JsonProcessingException {
        return locationService.getLocationByCoordinates(coordinates);
    }

}
