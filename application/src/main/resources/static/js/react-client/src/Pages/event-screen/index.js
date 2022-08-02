import { useEffect, useState } from 'react';

import style from './style.module.scss';

const EventScreen=()=>{

  const [events, setEvents] = useState(null),
        [loadingEvents, setLoadingEvents] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      const result = await Axios('http://localhost:8080/api/events');
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
    <h2>This is the Event Screen</h2>
  )  
}
export default EventScreen