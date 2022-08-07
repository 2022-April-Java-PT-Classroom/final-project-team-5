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
        e.preventDefault();
       
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
        <div className={style.eventForm}>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="eventTitle"
                    value={addEventState.eventTitle}
                    onChange={handleChange}
                    placeholder='Event Title'
                />
                <input
                    type="text"
                    name="eventDescription"
                    value={addEventState.eventDescription}
                    onChange={handleChange}
                    placeholder='Event Description'
                />
                <button className={style.eventButton} type="submit">Add Event</button>
            </form>
            
            <section className={style.eventUpdate}>
              {/* <p>{events.eventTitle}</p> */}
              </section>
        </div>
    

 
    );
} 
export default AddEventElement