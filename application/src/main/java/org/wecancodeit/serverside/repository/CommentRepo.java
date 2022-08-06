package org.wecancodeit.serverside.repository;
import org.springframework.data.repository.CrudRepository;
import org.wecancodeit.serverside.model.Comment;

import java.util.Optional;

public interface CommentRepo extends CrudRepository <Comment, Long> {

}
