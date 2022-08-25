package org.wecancodeit.serverside.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Objects;

@Entity
public class Comment {

    @Id
    @GeneratedValue
    private Long id;
    @Lob
    private String commentContent;

//    @ManyToMany
//    private Collection<Comment> comments;

//    @ManyToOne
//    private Collection<Post> posts;

    @ManyToMany(mappedBy ="comments")
    @JsonIgnore
    private Collection<Post> posts;

    @ManyToMany
    private Collection<Event> events;

    @ManyToOne
    private User userComment;

    public Comment() {}

    public Comment (String commentContent) {
        this.commentContent = commentContent;
//        this.userComment = userComment;
        posts = new ArrayList<>();
    }

    public User getUserComment(){
        return userComment;
    }
    public Collection<Post> getPosts(){
        return posts;
    }

    public String getCommentContent(){
        return commentContent;
    }

    public Long getId(){
        return id;
    }


    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Comment comment = (Comment) o;
        return Objects.equals(id, comment.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }
}
