import React, { useState } from 'react';

import axios from 'axios';
import style from './style.module.scss';

const AddEventElement = ({ events }) => {
    
    const [addEventState, setAddEventState] = useState({
        eventTitle: "" , 
        eventDescription: "", 
        eventLocation: "", 
        eventDate: "", 
        eventOrganizer:"", 
        eventTime: ""
    });
    
    const handleChange = (e) => {
        const value = e.target.value;
        setAddEventState({
            ...addEventState,
            [e.target.name]: value
        });
    };

    const handleSubmit = (e) => {
        // e.preventDefault();
       
        const userData = {
            eventTitle: addEventState.eventTitle,
            eventDescription: addEventState.eventDescription,
            eventLocation: addEventState.eventLocation,
            eventDate: addEventState.eventDate,
            eventOrganizer: addEventState.eventOrganizer,
            eventTime: addEventState.eventTime
        };

        axios.post('http://localhost:8080/api/events/add-event', userData).then((response) => {
            console.log(response.status);
            console.log('DATA', response.data);
            setAddEventState(response.data);
        });
    };

    return (
            <form className={style.eventForm} onSubmit={handleSubmit}>
              <div className={style.eventInputs}> 
                <input
                    type="text"
                    name="eventTitle"
                    value={addEventState.eventTitle}
                    onChange={handleChange}
                    placeholder="Name of Event"
                />
                <input
                    type="text"
                    name="eventLocation"
                    value={addEventState.eventLocation}
                    onChange={handleChange}
                    placeholder="Location"
                />
                <input
                    type="text"
                    name="eventOrganizer"
                    value={addEventState.eventOrganizer}
                    onChange={handleChange}
                    placeholder="Organizer's Name"
                />
                <input
                    type="time"
                    name="eventTime"
                    value={addEventState.eventTime}
                    onChange={handleChange}
                    placeholder=""
                />
                 <input
                    type="date"
                    name="eventDate"
                    value={addEventState.eventDate}
                    onChange={handleChange}
                    placeholder=""
                />
                  <textarea
                    value={addEventState.eventDescription}
                    name="eventDescription"
                    onChange={handleChange}
                    placeholder='Event Description'
                />
              </div>   
              <button className={style.eventButton} type="submit">Add Event</button>
            </form>
    

 
    );
} 
export default AddEventElement