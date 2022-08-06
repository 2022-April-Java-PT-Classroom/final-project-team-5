package org.wecancodeit.serverside;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import org.wecancodeit.serverside.model.Event;
import org.wecancodeit.serverside.repository.EventRepo;

import javax.annotation.Resource;

@Component
public class Populator implements CommandLineRunner {

    @Resource
    private EventRepo eventRepo;

    @Override
    public void run(String... args) throws Exception {

        Event cause = new Event("The Cause", "Event Test", "Cleveland", "August 23, 2022", "Jane Doe", "8");
        eventRepo.save(cause);
    }
}