package com.codecool.umbrella.api.endpoint;

import com.codecool.umbrella.logic.CardService;
import com.codecool.umbrella.model.WeatherCard;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(originPatterns = {"*"}, maxAge = 3600, allowCredentials = "true")
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

    @DeleteMapping("/delete/{latitude},{longitude}")
    public void removeWeatherCard(@PathVariable("latitude") double latitude, @PathVariable("longitude") double longitude) {
        System.out.println(latitude + " " +  longitude);
        cardService.removeWeatherCard(latitude, longitude);
    }

}
