package org.wecancodeit.serverside.controller;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.wecancodeit.serverside.model.Topic;
import org.wecancodeit.serverside.repository.TopicRepo;

import javax.annotation.Resource;
import java.util.Collection;
import java.util.Optional;

public class TopicController {

    @Resource
    private TopicRepo topicRepository;

    @GetMapping("/topics")
    public Collection<Topic> getTopics(){return (Collection<Topic>) topicRepository.findAll();}

    @GetMapping("/topic")
    public Optional<Topic> getTopics(@PathVariable String topicName){return topicRepository.findTopic(topicName);}
}
