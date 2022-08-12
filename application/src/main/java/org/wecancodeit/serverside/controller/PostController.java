package org.wecancodeit.serverside.controller;

import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.web.bind.annotation.*;
import org.wecancodeit.serverside.model.Comment;
import org.wecancodeit.serverside.model.Post;
import org.wecancodeit.serverside.model.User;
import org.wecancodeit.serverside.repository.CommentRepo;
import org.wecancodeit.serverside.repository.PostRepo;

import javax.annotation.Resource;
import java.util.Collection;
import java.util.Optional;


@RestController@CrossOrigin
public class PostController {
   @Resource
    private PostRepo postRepo;
   @Resource
   private CommentRepo commentsRepo;


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
       String newBodyOfPost = newPost.getString("bodyOfPost");


       Optional<Post> addPost = postRepo.findByBodyOfPost(newBodyOfPost);
       if(addPost.isEmpty()){
           Post postToAdd = new Post(newBodyOfPost);

           postRepo.save(postToAdd);
       }
       return (Collection<Post>) postRepo.findAll();
   }

    @PostMapping("/api/post/{id}/add-comment")
    public Optional<Post> addCommentToPost(@RequestBody String body, @PathVariable Long id) throws JSONException {
        JSONObject newComment = new JSONObject(body);
        String commentContent = newComment.getString("commentContent");
        Optional<Comment> commentToAddOpt = commentsRepo.findByCommentContent(commentContent);

        if (commentToAddOpt.isPresent()) {
            Optional<Post> postToAddCommentToOpt = postRepo.findById(id);
            Post postToAddCommentTo = postToAddCommentToOpt.get();
            postToAddCommentTo.addComment(commentToAddOpt.get());
            postRepo.save(postToAddCommentTo);
        } else {
            Comment newCommentToSave =new Comment(commentContent);
            commentsRepo.save(newCommentToSave);
            Optional<Post> postToAddCommentToOpt = postRepo.findById(id);
            Post postToAddCommentTo = postToAddCommentToOpt.get();
            postToAddCommentTo.addComment(newCommentToSave);
            postRepo.save(postToAddCommentTo);
        }
        return postRepo.findById(id);
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
