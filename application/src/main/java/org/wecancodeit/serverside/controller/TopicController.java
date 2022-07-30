package org.wecancodeit.serverside.controller;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.wecancodeit.serverside.model.Topics;
import org.wecancodeit.serverside.repository.TopicRepo;

import javax.annotation.Resource;
import java.util.Collection;
import java.util.Optional;

public class TopicController {

    @Resource
    private TopicRepo topicRepository;

    @GetMapping("/topics")
    public Collection<Topics> getTopics(){return (Collection<Topics>) topicRepository.findAll();}

    @GetMapping("/topic")
    public Optional<Topics> getTopics(@PathVariable String topicName){return topicRepository.findById(topicName);}
}
