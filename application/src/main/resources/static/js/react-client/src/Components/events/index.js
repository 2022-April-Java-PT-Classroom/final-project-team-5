import React, { useState } from 'react'

import axios from 'axios';
import style from './style.module.scss';

const Add = ({ events }) => {
    
    const [addEventsState, setAddEventsState] = useState(events);
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
            [e.target.eventTitle]: value
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
            setAddEventsState(response.data);
        });
    }

    return (
        <div className={style.eventForm}>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    value={addEventState.eventTitle}
                    onChange={handleChange}
                    placeholder='Enter name of Event'
                />
                <button type="submit">Add Event</button>
            </form>
    
        </div>
    );
}