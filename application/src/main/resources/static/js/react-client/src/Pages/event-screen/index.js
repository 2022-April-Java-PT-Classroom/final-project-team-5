import { useEffect, useState } from 'react';

import Add from '../../Components/events';
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
    loadingEvents ? <h2>Loading...</h2> :
    <div>
      <section className={style.eventList}>
      <Add events = {events} />
      </section>
      {/* {events.map(events => (
        <div key={events.id}>
    <h2>{events.eventLocation}</h2> */}
    </div>
 
  );
}
export default EventScreen