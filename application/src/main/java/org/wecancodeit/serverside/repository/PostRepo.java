package org.wecancodeit.serverside.repository;
import org.springframework.data.repository.CrudRepository;
import org.wecancodeit.serverside.model.post;
public interface PostRepo extends CrudRepository <Post,Long> {
}
