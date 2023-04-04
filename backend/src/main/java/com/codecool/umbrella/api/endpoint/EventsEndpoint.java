package com.codecool.umbrella.api.endpoint;

import com.codecool.umbrella.logic.EventService;
import com.codecool.umbrella.model.EventCard;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(originPatterns = {"*"}, maxAge = 3600, allowCredentials = "true")
@RestController
@RequestMapping("/api/events")
public class EventsEndpoint {

    @Autowired
    private EventService eventService;

    @GetMapping
    public List<EventCard> getEventCards() {
        return eventService.getAllEventCards();
    }

    @PostMapping
    public void saveEventCard(@RequestBody EventCard event) {
        eventService.saveEventCard(event);
    }

}
