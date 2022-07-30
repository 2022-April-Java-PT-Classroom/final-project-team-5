package org.wecancodeit.serverside.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import java.util.Collection;

@Entity
public class Topics {

    @Id
    @GeneratedValue
    private String topicName;

    @ManyToMany
    private Collection<Post> posts;
    @ManyToMany
    private Collection<Event> events;

    public String getTopicName() {
        return topicName;
    }
    public Topics(){}

    public Topics(String topicName) {
        this.topicName = topicName;
    }
}