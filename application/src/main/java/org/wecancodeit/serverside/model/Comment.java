package org.wecancodeit.serverside.model;

import javax.persistence.*;
import java.util.Collection;
@Entity
public class Comment {

    @Id
    @GeneratedValue
    private Long id;
    private String commentContent;

    @ManyToMany
    private Collection<Comment> comments;

//    @ManyToOne
//    private Collection<Post> posts;

    @ManyToMany
    private Collection<Event> events;

    @ManyToOne
    private User userComment;

    public Comment() {}

    public Comment (String commentContent, User userComment) {

        this.commentContent = commentContent;
        this.userComment = userComment;
    }

    public User getUserComment(){
        return userComment;
    }



}
