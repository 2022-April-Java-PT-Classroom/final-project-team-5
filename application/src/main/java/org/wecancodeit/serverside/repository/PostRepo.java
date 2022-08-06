package org.wecancodeit.serverside.repository;

import org.springframework.data.repository.CrudRepository;
import org.wecancodeit.serverside.model.Post;

import java.util.Optional;

public interface PostRepo extends CrudRepository<Post,Long> {
}

