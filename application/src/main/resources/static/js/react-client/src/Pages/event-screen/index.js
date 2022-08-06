import { useEffect, useState } from 'react';

import Axios from 'axios';
import style from './style.module.scss';
import { useParams } from 'react-router-dom';

const EventScreen=()=>{

  const [events, setEvents] = useState(null),
        [loadingEvents, setLoadingEvents] = useState(true);

  const[addEventState, setAddEventState] = useState({
      eventTitle: "" , eventDescription: "", eventLocation: "", eventDate: "", eventOrganizer:"", eventTime: ""
  });

  useEffect(() => {
    const fetchEvents = async () => {
      const result = await Axios('http://localhost:8080/api/events');
      setEvents(result.data);
      console.log(result.data)
    }
    
    if(events) {
      setLoadingEvents(false);
    }

    const timer = setTimeout(() => {
      !events && fetchEvents();
    }, 1000);
    return () => clearTimeout(timer);
  }, [events]);  
  
  const handleChange = (event) => {
    const value = event.target.value;
    setAddEventState({
      ...addEventState,
      [event.target.eventTitle] : value
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const userData = {
      eventTitle: addEventState.eventTitle
    }

    // Axios.post('http://localhost:8080/api/events/add-event', userData).
    // then((response) => {
    //   console.log(response.status);
    //   console.log(response.data);
    //   setEvents(response.data);
    // })
  }
  
  return(
    loadingEvents ? <h2>Loading...</h2> :
    <div>
      <p>Hello</p>
    
      {events.map(events => (
        <div key={events.id}>
    <h2>{events.eventLocation}</h2>
    </div>
  ))}  
          <p>{events.eventTitle}</p>
           <form onSubmit={handleSubmit}>
                <input type="text"
                name="name"
                value={addEventState.eventTitle}
                onChange={handleChange}
                placeholder='Enter a new Event Name'
            />
            <button type='submit'>Add Event</button>
            </form>
  </div>
  );
}
export default EventScreen