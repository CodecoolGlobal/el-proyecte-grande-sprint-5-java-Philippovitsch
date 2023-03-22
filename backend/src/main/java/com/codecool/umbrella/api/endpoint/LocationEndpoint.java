package com.codecool.umbrella.api.endpoint;

import com.codecool.umbrella.api.dto.CurrentLocationDTO;
import com.codecool.umbrella.api.dto.TimeDTO;
import com.codecool.umbrella.logic.LocationService;
import com.fasterxml.jackson.core.JsonProcessingException;
import jakarta.annotation.security.PermitAll;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.sql.Timestamp;

@CrossOrigin(originPatterns = {"*"}, maxAge = 3600, allowCredentials = "true")
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

    @GetMapping("{coordinates}/time")
    public TimeDTO getLocalTimeByCoordinates(@PathVariable("coordinates") String coordinates) throws JsonProcessingException {
        return locationService.getLocalTimeByCoordinates(coordinates);
    }

}
