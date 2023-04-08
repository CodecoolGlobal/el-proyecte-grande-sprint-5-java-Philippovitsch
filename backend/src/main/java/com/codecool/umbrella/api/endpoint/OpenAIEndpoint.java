package com.codecool.umbrella.api.endpoint;

import com.codecool.umbrella.api.dto.LocationFunFactMessageDTO;
import com.codecool.umbrella.logic.OpenAIService;
import com.fasterxml.jackson.core.JsonProcessingException;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/openai/")
public class OpenAIEndpoint {

    private final OpenAIService openAIService;

    public OpenAIEndpoint(OpenAIService openAIService) {
        this.openAIService = openAIService;
    }

    @GetMapping("/fun-fact/{location}/{country}")
    public LocationFunFactMessageDTO getLocationFunFact(@PathVariable String location, @PathVariable String country) throws JsonProcessingException {
        return openAIService.getLocationFunFact(location, country);
    }

    @GetMapping("/test-fact/{location}/{country}")
    public LocationFunFactMessageDTO getTestLocationFunFact(@PathVariable String location, @PathVariable String country) {
        return openAIService.getTestLocationFunFact(location, country);
    }

}
