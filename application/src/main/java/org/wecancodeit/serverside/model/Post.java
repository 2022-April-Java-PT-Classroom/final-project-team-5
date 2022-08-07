package org.wecancodeit.serverside.model;


import javax.persistence.*;
import java.util.Collection;

@Entity
public class Post {

    @Id@GeneratedValue
    public Long id;
    @Lob
    public String bodyOfPost;

    @ManyToOne
    public User userPost;

    @ManyToMany
    public Collection<Comment> comments;

    @ManyToOne
    public Topic topic;
    public Post(){}

    public Long getId() {
        return id;
    }

    public String getBodyOfPost() {
        return bodyOfPost;
    }

    public Topic getTopic(){
        return topic;
    }

    public Post(String post) {
        this.bodyOfPost = post;
    }

    public User getUserPost() {
        return userPost;
    }

    public Collection<Comment> getComments() {
        return comments;
    }


}

