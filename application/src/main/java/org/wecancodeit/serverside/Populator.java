package org.wecancodeit.serverside;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import org.wecancodeit.serverside.model.Event;
import org.wecancodeit.serverside.model.Post;
import org.wecancodeit.serverside.repository.EventRepo;
import org.wecancodeit.serverside.repository.PostRepo;

import javax.annotation.Resource;

@Component
public class Populator implements CommandLineRunner {

    @Resource
    private EventRepo eventRepo;

    @Resource
    private PostRepo postRepo;

    @Override
    public void run(String... args) throws Exception {
//
        Event cause = new Event("The Cause", "Event Test", "Cleveland", "August 23, 2022", "Jane Doe", "8");
        eventRepo.save(cause);

        Post postOne = new Post("This is the first post");
        postRepo.save(postOne);
    }
}