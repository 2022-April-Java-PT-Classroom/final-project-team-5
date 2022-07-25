package org.wecancodeit.serverside.model;

import javax.persistence.*;
import java.util.Collection;
import java.util.Set;

@Entity
public class User {

    @Id @GeneratedValue
    private Long id;
    private String username;
    private String password;
    private int icon;
    @ManyToMany
    private Set<User> usersFriended;
    @ManyToMany
    private Set<User> usersFollowing;
    @ManyToMany
    private Set<User> usersFollowedBy;
    @OneToMany
    private Set<Event> eventsPosted;
    @ManyToMany
    private Set<Event> eventsSelected;
    @OneToMany
    private Set<Post> postsPosted;
    @ManyToMany
    private Set<Post> postsSelected;
    @OneToMany
    private Set<Comment> commentsPosted;
    @ManyToMany
    private Set<Topic> topicsSelected;


    public User(){}

    public User(String username, String password){
        this.username = username;
        this.password = password;
        this.icon = 0;
    }


    public Long getId() { return id; }
    public String getUsername() { return username; }
    public int getIcon() { return icon; }
    public Collection<User> getUsersFriended() { return usersFriended; }
    public Collection<User> getUsersFollowing() { return usersFollowing; }
    public Collection<User> getUsersFollowedBy() { return usersFollowedBy; }
//    public Collection<Event> getEventsPosted() { return eventsPosted; }
//    public Collection<Event> getEventsSelected() { return eventsSelected; }
//    public Collection<Post> getPostsPosted() { return postsPosted; }
//    public Collection<Post> getPostsSelected() { return postsSelected; }
//    public Collection<Comment> getCommentsPosted() { return commentsPosted; }
//    public Collection<Topic> getTopicsSelected() { return topicsSelected; }

    public boolean isPasswordMatch( String enteredPassword ) { return enteredPassword == this.password; }
    public boolean isUserFriend( User user ) { return usersFriended.contains( user ); }
    public boolean isUserFollowing( User user ) { return usersFollowing.contains( user ); }
    public boolean isUserFollowedBy( User user ) { return usersFollowedBy.contains( user ); }
    public boolean isEventSelected ( Event event ) { return eventsSelected.contains(event); }
    public boolean isPostSelected ( Post post ) { return postsSelected.contains(post); }
    public boolean isTopicSelected ( Topic topic ) { return topicsSelected.contains(topic); }


    public void setUsername( String newName ) { this.username = newName; }
    public void setPassword( String newPassword ) { this.password = newPassword; }
    public void setIcon( int newIcon ) { this.icon = newIcon; }

    public boolean toggleUserFriended( User user ) { return toggleItem( user, usersFriended ); }
    public boolean toggleUserFollowing( User user ) { return toggleItem( user, usersFollowing); }
    public boolean toggleUserFollowedBy( User user ) { return toggleItem( user, usersFollowedBy); }

    public boolean postEvent( Event event ) { return eventsPosted.add(event); }
    public boolean toggleEventSelected( Event event ) { return toggleItem( event, eventsSelected ); }

    public boolean postPost( Post post ) { return postsPosted.add(post); }
    public boolean togglePostSelected( Post post ) { return toggleItem( post, postsSelected); }

    public boolean postComment( Comment comment ) { return commentsPosted.add( comment ); }

    public boolean toggleTopicSelected( Topic topic ) { return toggleItem( topic, topicsSelected ); }


    private boolean toggleItem( Object itemToToggle, Collection list ){
        if (list.contains(itemToToggle)){
            list.remove(itemToToggle);
            return false;
        } else {
            list.add(itemToToggle);
            return true;
        }
    }

}
