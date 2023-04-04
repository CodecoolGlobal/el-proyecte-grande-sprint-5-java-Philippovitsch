package com.codecool.umbrella.logic;

import com.codecool.umbrella.model.EventCard;
import com.codecool.umbrella.model.repository.EventRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EventService {
    @Autowired
    private EventRepository eventRepository;

    public List<EventCard> getAllEventCards() {
        return eventRepository.findAll();
    }

    public void saveEventCard(EventCard event) {
        eventRepository.save(event);
    }
}
