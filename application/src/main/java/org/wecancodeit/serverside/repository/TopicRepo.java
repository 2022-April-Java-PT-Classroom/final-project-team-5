package org.wecancodeit.serverside.repository;

import org.springframework.data.repository.CrudRepository;
import org.wecancodeit.serverside.model.Topic;

public interface TopicRepo extends CrudRepository <Topic, Long> {
}
