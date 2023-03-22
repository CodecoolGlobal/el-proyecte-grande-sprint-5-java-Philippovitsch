package com.codecool.umbrella.api.endpoint;

import com.codecool.umbrella.api.dto.CoordinatesDTO;
import com.codecool.umbrella.logic.CoordinatesService;
import com.fasterxml.jackson.core.JsonProcessingException;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/api/coordinates")
@PreAuthorize("hasRole('ADMIN')")
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
