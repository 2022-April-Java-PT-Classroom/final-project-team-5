package org.wecancodeit.serverside.repository;

import org.springframework.data.repository.CrudRepository;
import org.wecancodeit.serverside.model.Topic;

import java.util.Optional;


public interface TopicRepo extends CrudRepository <Topic, String> {
    Optional<Topic> findTopic(String topicName);
}
