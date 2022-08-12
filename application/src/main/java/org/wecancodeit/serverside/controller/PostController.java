package org.wecancodeit.serverside.controller;

import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.web.bind.annotation.*;
import org.wecancodeit.serverside.model.Post;
import org.wecancodeit.serverside.repository.PostRepo;

import javax.annotation.Resource;
import java.util.Collection;
import java.util.Optional;


@RestController@CrossOrigin
public class PostController {
   @Resource
    private PostRepo postRepo;


   @GetMapping("api/post")
   public Collection<Post> getPost(){
       return (Collection<Post>) postRepo.findAll();
   }

   @GetMapping("api/post/{id}")
    public Post getPost(@PathVariable Long id) throws JSONException{
       Optional<Post> postOne = postRepo.findById(id);
       return postOne.get();
   }

   @PostMapping("api/post/add-post")
    public Collection<Post> addPost(@RequestBody String body) throws JSONException{
       JSONObject newPost = new JSONObject(body);
       String bodyOfPost = newPost.getString("body of post");

       Optional<Post> addPost = postRepo.findByBodyOfPost(bodyOfPost);
       if(addPost.isEmpty()){
           Post postToAdd = new Post(bodyOfPost);
       }
       return (Collection<Post>) postRepo.findAll();
   }

   @DeleteMapping("api/post/{id}/delete-post")
    public Collection<Post> deletePost(@PathVariable Long id) throws JSONException{
       Optional<Post>postToRemove=postRepo.findById(id);

       if(postToRemove.isPresent()){
           postRepo.delete(postToRemove.get());
       }
       return (Collection<Post>) postRepo.findAll();
   }





}
