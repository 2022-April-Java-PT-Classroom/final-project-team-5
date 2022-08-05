package org.wecancodeit.serverside.controller;


import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.data.repository.query.parser.Part;
import org.springframework.web.bind.annotation.*;
import org.wecancodeit.serverside.model.Event;
import org.wecancodeit.serverside.repository.EventRepo;

import javax.annotation.Resource;
import java.util.Collection;
import java.util.Optional;


@RestController
@CrossOrigin
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

    @PostMapping("/api/events/add-event")
    public Collection <Event> addEvent(@RequestBody String body) throws JSONException {
        JSONObject newEvent = new JSONObject(body);
        String newEventTitle = newEvent.getString("eventTitle");
        Optional<Event> eventToAddOpt = eventRepo.findByEventLocation(newEventTitle);

        if(eventToAddOpt.isEmpty()) {
            Event eventToAdd = new Event();
            eventRepo.save(eventToAdd);
        }
        return (Collection<Event>) eventRepo.findAll();
    }
}
