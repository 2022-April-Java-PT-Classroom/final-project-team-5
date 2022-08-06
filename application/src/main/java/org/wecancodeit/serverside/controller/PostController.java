package org.wecancodeit.serverside.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.wecancodeit.serverside.model.Post;
import org.wecancodeit.serverside.repository.PostRepo;

import javax.annotation.Resource;


@RestController@CrossOrigin
public class PostController {
   @Resource
    private PostRepo postRepo;

    @GetMapping("/post/{id}")
    public Post getPost (@PathVariable Long id){return postRepo.findById(id).get();}




}
