package org.wecancodeit.serverside.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import java.util.Collection;
@Entity
public class Comment {

    @Id
    @GeneratedValue
    private String commentName;

    @ManyToMany
    private Collection<Comment> comments;

    @ManyToMany
    private Collection<Post> posts;

    @ManyToMany
    private Collection<Event> events;

    public Comment() {}

    public Comment (String commentName) {

        this.commentName = commentName;
    }



}
