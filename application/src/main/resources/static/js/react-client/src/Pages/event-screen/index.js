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
      <section className={style.eventList}>
      <AddEventElement events={events} />

      </section>
      {loadingEvents ? <h2>Loading...</h2> :
      <div>
      {events.map(event => (
        <div key={event.id}>
    <h2>{event.eventTitle}</h2>
    <h4>{event.eventDate} | {event.eventLocation}</h4> 
  
      
    </div>
    ))}
    </div>
      }
    
      
    </div>
  );
}
export default EventScreen