package org.wecancodeit.serverside.model;

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

    public Comment {}

    public Comment (String commentName) {

        this.commentName = commentName;
    }



}
