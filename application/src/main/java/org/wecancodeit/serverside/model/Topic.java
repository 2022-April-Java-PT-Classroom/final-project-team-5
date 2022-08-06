package org.wecancodeit.serverside.model;

import javax.persistence.*;
import java.util.Collection;

@Entity
public class Topic {

    @Id
    @GeneratedValue
    private Long id;
    private String topicName;

    @OneToMany
    private Collection<Post> posts;
    @ManyToMany
    private Collection<Event> events;

    public Topic(){}

    public Topic(String topicName) {
        this.topicName = topicName;
    }

    public String getTopicName(){
        return topicName;
    }

}