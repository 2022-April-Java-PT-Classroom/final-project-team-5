import { useEffect, useState } from 'react';

import { Axios } from 'axios';
import style from './style.module.scss';

const EventScreen=()=>{

  const [events, setEvents] = useState(null),
        [loadingEvents, setLoadingEvents] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      const result = await Axios('http://localhost:8080/events');
      setEvents(result.data);
    }
    
    if(events) {
      setLoadingEvents(false);
    }

    const timer = setTimeout(() => {
      !events && fetchEvents();
    }, 1000);
    return () => clearTimeout(timer);
  }, [events]);  

  
  return(
    // loadingEvents ? <h2>Loading...</h2> :
    <div>
      <p>Hello</p>
    
      {events.map(events => (
        <div key={events.id}>
    <h2>{events.eventLocation}</h2>
    </div>
  ))}  
    <p>Hello</p>
  </div>
  );
}
export default EventScreen