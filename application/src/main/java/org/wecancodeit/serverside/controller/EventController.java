package org.wecancodeit.serverside.controller;


import org.springframework.data.repository.query.parser.Part;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.wecancodeit.serverside.model.Event;
import org.wecancodeit.serverside.repository.EventRepo;

import javax.annotation.Resource;
import java.util.Collection;


@RestController
public class EventController {

    @Resource
    private EventRepo eventRepo;

    @GetMapping("/api/events")
    public Collection<Event> getEvents(){
        return (Collection<Event>) eventRepo.findAll();
    }

    @GetMapping("/api/events/{eventLocation}")
    public Event getEventLocation(@PathVariable String eventLocation){
        return eventRepo.findByEventLocation(eventLocation).get();
    }
}
