package org.wecancodeit.serverside.repository;

import org.springframework.data.repository.CrudRepository;
import org.wecancodeit.serverside.model.Event;

public interface EventRepo extends CrudRepository<Event, Long> {

    Event findEventByLocation(String eventLocation);
}
