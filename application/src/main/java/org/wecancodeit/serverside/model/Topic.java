package org.wecancodeit.serverside.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import java.util.Collection;

@Entity
public class Topic {

    @Id
    @GeneratedValue
    private Long id;
    private String topicName;

//    @ManyToMany
//    private Collection<Post> posts;
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