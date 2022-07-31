package org.wecancodeit.serverside.model;


import javax.persistence.*;
import java.util.Collection;

@Entity
public class Post {

    @Id@GeneratedValue

    public Long id;

    public String post;

    @ManyToOne
    public Collection <User> users;

    @ManyToMany
    public Collection<Comment> comments;

    @OneToMany
    public Collection<Topic> topics;
    public Post(){}

    public Long getId() {
        return id;
    }

    public String getPost() {
        return post;
    }

    public Post(String post) {
        this.post = post;
    }
}

