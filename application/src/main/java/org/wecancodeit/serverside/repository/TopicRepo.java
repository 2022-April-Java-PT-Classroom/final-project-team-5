package org.wecancodeit.serverside.repository;

import org.springframework.data.repository.CrudRepository;
import org.wecancodeit.serverside.model.Topics;

public interface TopicRepo extends CrudRepository <Topics, String> {
}
