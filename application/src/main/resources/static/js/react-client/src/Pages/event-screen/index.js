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
  
    <div className={style.container}>
      <h2 className={style.eventHeader}>Upcoming Events</h2>
      {loadingEvents ? <h2 className={style.eventLoading}>Loading...</h2> :
      <div className={style.events}>
      {events.map(event => (
        <div className={style.eventInfo} key={event.id}>
    <h3 className={style.eventTitle}>{event.eventTitle}</h3>
    <h4>{event.eventDate} | {event.eventLocation}</h4> 
    <p className={style.eventpara}>{event.eventDescription}</p>
    <p className={style.eventpara}>{event.eventTime} | Organizer: {event.eventOrganizer}</p>
    </div>
    ))}

    </div>
      }
        <h2 className={style.eventFormHeader}> Create New Event</h2>
        <div className={style.eventFormContainer}>
      <AddEventElement events={events} />
      </div>
      
    </div>
  );
}
export default EventScreen