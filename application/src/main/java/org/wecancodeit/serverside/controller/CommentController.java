package org.wecancodeit.serverside.controller;

import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.web.bind.annotation.*;
import org.wecancodeit.serverside.models.UserName;
import org.wecancodeit.serverside.repositories.UserNameRepository;

import javax.annotation.Resource;
import java.util.Collection;
import java.util.Optional;

@RestController
@CrossOrigin
public class CommentController {

    @Resource
    private CommentRepo commentRepo;

    @GetMaping("/api/comment")
    public Collection<CommentCollection> getUserNames(){
        return (Collection<CommentCollection>) userNameRepo.findAll();
    }

    @PostMapping("/api/users/add-user")
    public Collection<UserName> addUsers(@RequestBody String body) throws JSONException {
        JSONObject newUser = new JSONObject(body);
        String userName = newUser.getString("name");

        return (Collection<UserName>) userNameRepo.findAll();
    }

    @PutMapping("/api/usesr/{id}/select-user")
    public Collection<UserName> selectUser(@PathVariable Long id, @RequestBody String body) throws JSONException {
        JSONObject newUser = new JSONObject(body);
        String userName = newUser.getString("name");
        Optional<UserName> userNameToSelectOpt = userNameRepository.findById(id);
        if(userNameToSelectOpt.isPresent()) {
            userNameToSelectOpt.get();
            userNameRepo.save(userNameToSelectOpt.get());

        }

        return (Collection<UserName>) userNameRepo.findAll();
    }

    @DeleteMapping("/api/users/{id}/delete-user")
    public Collection<UserName> deleteUsers(@PathVariable Long id) throws JSONException {
        Optional<UserName> userNamesToRemoveOpt = userNameRepo.findById(id);
        userNamesToRemoveOpt.ifPresent(userName -> userNameRepo.delete(userName));
        return (Collection<UserName>) userNameRepo.findAll();
    }
}
