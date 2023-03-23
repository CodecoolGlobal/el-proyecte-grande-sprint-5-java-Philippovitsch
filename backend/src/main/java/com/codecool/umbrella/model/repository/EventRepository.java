package com.codecool.umbrella.model.repository;

import com.codecool.umbrella.model.EventCard;
import com.codecool.umbrella.model.WeatherCard;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EventRepository extends JpaRepository<EventCard, Long>  {
    WeatherCard findEventCardById(Long Id);
}
