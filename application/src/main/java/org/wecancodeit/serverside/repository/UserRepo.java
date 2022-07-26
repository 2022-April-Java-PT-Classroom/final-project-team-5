package org.wecancodeit.serverside.repository;

import org.springframework.data.repository.CrudRepository;
import org.wecancodeit.serverside.model.User;

import java.util.Optional;

public interface UserRepo extends CrudRepository <User, Long> {
    Optional<User> findByUsername(String username);
}
