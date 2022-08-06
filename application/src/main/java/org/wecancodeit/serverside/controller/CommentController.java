package org.wecancodeit.serverside.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.wecancodeit.serverside.model.Comment;
import org.wecancodeit.serverside.repository.CommentRepo;
import javax.annotation.Resource;
import java.util.Collection;
import java.util.Optional;

@Controller
public class CommentController {

    @Resource
    private CommentRepo commentRepo;

    @GetMapping("/api/comments")
    public Collection<Comment> getComments(){

        return (Collection<Comment>) commentRepo.findAll();
    }

    @GetMapping("/api/comment/{id}")
    public Optional<Comment> getComments(@PathVariable Long id){
        return commentRepo.findById(id);}
}
