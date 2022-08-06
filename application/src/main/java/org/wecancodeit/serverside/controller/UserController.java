package org.wecancodeit.serverside.controller;

import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.web.bind.annotation.*;
import org.wecancodeit.serverside.model.User;
import org.wecancodeit.serverside.repository.UserRepo;

import javax.annotation.Resource;
import java.util.Collection;
import java.util.Optional;

@RestController @CrossOrigin
public class UserController {
    @Resource
    private UserRepo userRepo;

    @GetMapping("/api/users/id/{id}")
    public User getUserAccount(@PathVariable Long id){ return userRepo.findById(id).get(); }

    @GetMapping("/api/users/{username}")
    public User getUserByName(@PathVariable String username){ return  userRepo.findByUsername(username).get(); }

    @PostMapping("/api/users/login")
    public boolean userLogin(@RequestBody String body) throws JSONException{
        JSONObject user = new JSONObject(body);
        String username = user.getString("username");
        Optional<User> userOpt = userRepo.findByUsername(username);
        if (userOpt.isEmpty()){ return false; }
        String password = user.getString("password");
        User login = userOpt.get();
        if (login.isPasswordMatch(password)){ return true; }
        else { return false; }
    }

    @PostMapping("/api/users/create-account")
    public boolean addUserAccount(@RequestBody String body) throws JSONException {
        JSONObject newUser = new JSONObject(body);
        String username = newUser.getString("username");

        if (userRepo.findByUsername(username).isPresent()){ return false; }

        String password = newUser.getString("password");
        User userToAdd = new User(username, password);
        userRepo.save(userToAdd);
        return true;
    }
}
