package com.codecool.umbrella.model.repository;

import com.codecool.umbrella.model.WeatherCard;
import org.springframework.data.jpa.repository.JpaRepository;

public interface WeatherCardRepository extends JpaRepository<WeatherCard, Long> {

    WeatherCard findWeatherCardByLatitudeAndLongitude(double Latitude, double Longitude);

}
