package org.wecancodeit.serverside.model;


import javax.persistence.*;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.Objects;

@Entity
public class Post {

    @Id@GeneratedValue
    public Long id;
    @Lob
    public String bodyOfPost;
    private String title;

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

    public String  getTitle(){
        return title;
    }

    public Post(String title, String bodyOfPost, Comment...comments) {
        this.title = title;
        this.bodyOfPost = bodyOfPost;
        this.comments = new ArrayList<>(Arrays.asList(comments));
    }

    public User getUserPost() {
        return userPost;
    }

    public Collection<Comment> getComments() {
        return comments;
    }

    public void addComment(Comment commentToAdd) {
        comments.add(commentToAdd);
    }

    public void deleteComment(Comment commentToRemove) {
        comments.remove(commentToRemove);
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Post post = (Post) o;
        return Objects.equals(id, post.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }
}

