package com.codecool.umbrella.api.endpoint;

import com.codecool.umbrella.api.dto.CoordinatesDTO;
import com.codecool.umbrella.logic.CoordinatesService;
import com.fasterxml.jackson.core.JsonProcessingException;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(originPatterns = {"*"}, maxAge = 3600, allowCredentials = "true")
@RestController
@RequestMapping("/api/coordinates")
public class CoordinatesEndpoint {
    private final CoordinatesService coordinatesService;

    public CoordinatesEndpoint(CoordinatesService coordinatesService) {
        this.coordinatesService = coordinatesService;
    }

    @GetMapping("{name}")
    public List<CoordinatesDTO> getByName(@PathVariable String name) throws JsonProcessingException {
        return coordinatesService.getByName(name);
    }
}
