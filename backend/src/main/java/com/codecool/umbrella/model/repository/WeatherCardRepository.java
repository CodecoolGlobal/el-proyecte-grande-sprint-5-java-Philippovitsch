package com.codecool.umbrella.model.repository;

import com.codecool.umbrella.model.WeatherCard;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface WeatherCardRepository extends JpaRepository<WeatherCard, Long> {

    WeatherCard findWeatherCardByLatitudeAndLongitude(double Latitude, double Longitude);

    boolean existsByLatitudeAndLongitude(double Latitude, double Longitude);

}
