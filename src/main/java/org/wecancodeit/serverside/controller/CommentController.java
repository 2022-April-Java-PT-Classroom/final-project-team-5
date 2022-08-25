package org.wecancodeit.serverside.controller;

import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.wecancodeit.serverside.model.Comment;
import org.wecancodeit.serverside.model.Post;
import org.wecancodeit.serverside.repository.CommentRepo;
import javax.annotation.Resource;
import java.util.Collection;
import java.util.Optional;

@Controller
public class CommentController {

    @Resource
    private CommentRepo commentRepo;

    @GetMapping("/api/comments")
    public Collection<Comment> getComments() {

        return (Collection<Comment>) commentRepo.findAll();
    }

    @GetMapping("/api/comment/{id}")
    public Optional<Comment> getComments(@PathVariable Long id) {
        return commentRepo.findById(id);
    }

    @PostMapping("/api/add-comment")
    public Collection<Comment> addComment(@RequestBody String body) throws JSONException {
        JSONObject newComment = new JSONObject(body);
        String commentContent = newComment.getString("commentContent");
        Optional<Comment> commentToAddOpt = commentRepo.findByCommentContent(commentContent);
        if (commentToAddOpt.isEmpty()) {
            Comment commentToAdd = new Comment(commentContent);
            commentRepo.save(commentToAdd);
        }
        return (Collection<Comment>) commentRepo.findAll();
    }
}
