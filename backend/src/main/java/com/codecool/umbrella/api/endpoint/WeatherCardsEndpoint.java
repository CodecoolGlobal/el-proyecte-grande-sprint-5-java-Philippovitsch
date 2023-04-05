package com.codecool.umbrella.api.endpoint;

import com.codecool.umbrella.logic.CardService;
import com.codecool.umbrella.model.WeatherCard;
import org.hibernate.ObjectNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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
    public ResponseEntity<String> saveWeatherCard(@RequestBody WeatherCard card) {
        try {
            cardService.saveWeatherCard(card);
            return new ResponseEntity<>("Successfully saved Weather Card.", HttpStatus.OK);
        } catch (ObjectNotFoundException exception) {
            return new ResponseEntity<>("Didn't find user.", HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/delete/{latitude},{longitude}")
    public void removeWeatherCard(@PathVariable("latitude") double latitude, @PathVariable("longitude") double longitude) {
        cardService.removeWeatherCard(latitude, longitude);
    }

}
