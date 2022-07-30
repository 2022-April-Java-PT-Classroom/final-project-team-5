package org.wecancodeit.serverside.model;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Post {
    @Id@GeneratedValue

    public Long id;
    public String post;

    public Long getId() {
        return id;
    }

    public String getPost() {
        return post;
    }
}
