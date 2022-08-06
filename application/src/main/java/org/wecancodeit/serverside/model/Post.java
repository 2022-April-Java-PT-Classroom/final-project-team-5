package org.wecancodeit.serverside.model;


import javax.persistence.*;
import java.util.Collection;

@Entity
public class Post {

    @Id@GeneratedValue
    public Long id;

    public String post;

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

    public String getPost() {
        return post;
    }

    public Topic getTopic(){
        return topic;
    }

    public Post(String post) {
        this.post = post;
    }


}

