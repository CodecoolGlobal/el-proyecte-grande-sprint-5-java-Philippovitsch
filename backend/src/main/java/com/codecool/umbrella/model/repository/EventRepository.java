package com.codecool.umbrella.model.repository;

import com.codecool.umbrella.model.EventCard;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EventRepository extends JpaRepository<EventCard, Long>  {

    List<EventCard> findAllByOrderByTimestampAsc();

    EventCard findEventCardById(Long Id);

}
