package com.codecool.umbrella.logic;

import com.codecool.umbrella.model.EventCard;
import com.codecool.umbrella.model.repository.EventRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EventService {

    private final EventRepository eventRepository;

    public EventService(EventRepository eventRepository) {
        this.eventRepository = eventRepository;
    }

    public List<EventCard> getAllEventCards() {
        return eventRepository.findAllByOrderByTimestampAsc();
    }

    public void saveEventCard(EventCard event) {
        eventRepository.save(event);
    }

}
