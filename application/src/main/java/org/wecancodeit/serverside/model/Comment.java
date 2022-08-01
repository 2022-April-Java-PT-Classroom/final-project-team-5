package org.wecancodeit.serverside.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Comment {

    @Id
    @GeneratedValue
    private String comment;
    @ManytoMany
    private String post;
    @ManytoOne
    private String userName;

    public String getComment() {
        return comment;
    }

    public String getPost() {
        return post;
    }

    public String getUser() {
        return user;
    }

    public Comment(){

    }

    public Comment(String comment, String post, String topic, String userName) {
        this.comment = comment;
        this.post = post;
        this.user = userName;
    }
}
