package org.wecancodeit.serverside.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.Collection;
import java.util.Objects;

@Entity
public class Event {

    @Id
    @GeneratedValue
    private Long id;
    private String eventTitle;
    private String eventDescription;
    private String eventLocation;
    private String eventDate;
    private String eventOrganizer;
    private int eventTime;
    @ManyToMany(mappedBy = "eventsPosted")
    @OneToMany(mappedBy = "eventsSelected")
    @JsonIgnore
    private Collection<User> users;



    public Event(){

    }

    public Event(String eventTitle, String eventDescription, String eventLocation, String eventDate, String eventOrganizer, int eventTime){
        this.eventTitle = eventTitle;
        this.eventDescription = eventDescription;
        this.eventLocation = eventLocation;
        this.eventDate = eventDate;
        this.eventOrganizer = eventOrganizer;
        this.eventTime = eventTime;
    }

    public Long getId(){
        return id;
    }

    public String getEventTitle(){
        return eventTitle;
    }

    public String getEventDescription(){
        return eventDescription;
    }

    public String getEventLocation(){
        return eventLocation;
    }

    public String getEventDate(){
        return eventDate;
    }

    public String getEventOrganizer(){
        return eventOrganizer;
    }

    public int getEventTime(){
        return eventTime;
    }

    public Collection<User> getUsers(){
        return users;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Event event = (Event) o;
        return Objects.equals(id, event.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }
}
