package org.wecancodeit.serverside;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import org.wecancodeit.serverside.model.Comment;
import org.wecancodeit.serverside.model.Event;
import org.wecancodeit.serverside.model.Post;
import org.wecancodeit.serverside.repository.CommentRepo;
import org.wecancodeit.serverside.repository.EventRepo;
import org.wecancodeit.serverside.repository.PostRepo;

import javax.annotation.Resource;
import javax.crypto.CipherInputStream;

@Component
public class Populator implements CommandLineRunner {

    @Resource
    private EventRepo eventRepo;

    @Resource
    private PostRepo postRepo;

    @Resource
    protected CommentRepo commentRepository;

    @Override
    public void run(String... args) throws Exception {

        Comment OMG = new Comment("OMG");
        commentRepository.save(OMG);

        Event cause = new Event("The Cause", "Event Test", "Cleveland", "August 23, 2022", "Jane Doe", "8");
        eventRepo.save(cause);

        Post postOne = new Post("The Title","This is the first post", OMG);
        postRepo.save(postOne);
    }
}