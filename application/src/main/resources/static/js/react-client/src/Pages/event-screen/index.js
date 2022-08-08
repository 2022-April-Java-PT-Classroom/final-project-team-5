import { useEffect, useState } from 'react';

import  AddEventElement  from '../../Components/events';
import Axios from 'axios';
import style from './style.module.scss';
import { useParams } from 'react-router-dom';

const EventScreen=()=>{

  const [events, setEvents] = useState(null),
        [loadingEvents, setLoadingEvents] = useState(true);


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
  

  return(
  
    <div>
      <section className={style.eventForm}>
        <h2> Create a Event</h2>
      <AddEventElement events={events} />

      </section>
      <h2>All Events</h2>
      {loadingEvents ? <h2>Loading...</h2> :
      <div className={style.events}>
      {events.map(event => (
        <div key={event.id}>
    <h3>{event.eventTitle}</h3>
    <h4>{event.eventDate} | {event.eventLocation}</h4> 
    <p className={style.eventpara}>{event.eventDescription} <br/>
    {event.eventTime} | Organizer: {event.eventOrganizer}</p>
  
    </div>
    ))}
    </div>
      }
    
      
    </div>
  );
}
export default EventScreen