package com.codecool.umbrella.api.endpoint;

import com.codecool.umbrella.api.dto.CurrentWeatherDTO;
import com.codecool.umbrella.logic.CardService;
import com.codecool.umbrella.model.WeatherCard;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.core.JsonProcessingException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/api/cards")
public class WeatherCardsEndpoint {

    @Autowired
    private CardService cardService;

    @GetMapping
    public List<WeatherCard> getWeatherCards() {
        return cardService.getAllWeatherCards();
    }

    @PostMapping
    public void saveWeatherCard(@RequestBody WeatherCard card) {
        cardService.saveWeatherCard(card);
    }

}
