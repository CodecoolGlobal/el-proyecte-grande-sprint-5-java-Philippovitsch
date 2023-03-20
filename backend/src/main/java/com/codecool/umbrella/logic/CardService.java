package com.codecool.umbrella.logic;

import com.codecool.umbrella.model.WeatherCard;
import com.codecool.umbrella.model.repository.WeatherCardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CardService {

    @Autowired
    private WeatherCardRepository cardRepository;

    public List<WeatherCard> getAllWeatherCards() {
        return cardRepository.findAll();
    }

    public void saveWeatherCard(WeatherCard card) {
        cardRepository.save(card);
    }

    public void removeWeatherCard(double latitude, double longitude) {
        WeatherCard card = cardRepository.findWeatherCardByLatitudeAndLongitude(latitude, longitude);
        if (card != null) {
            cardRepository.delete(card);
        }
    }

}
