package com.codecool.umbrella.api.endpoint;

import com.codecool.umbrella.logic.EventService;
import com.codecool.umbrella.model.EventCard;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/events")
public class EventsEndpoint {

    private final EventService eventService;

    public EventsEndpoint(EventService eventService) {
        this.eventService = eventService;
    }

    @GetMapping
    public List<EventCard> getEventCards() {
        return eventService.getAllEventCards();
    }

    @PostMapping
    public void saveEventCard(@RequestBody EventCard event) {
        eventService.saveEventCard(event);
    }

}
