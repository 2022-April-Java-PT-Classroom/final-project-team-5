import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Axios from 'axios';

import style from './style.module.scss';

const AccountScreen=()=>{
  const [loadingUser, setLoadingUser] = useState(true);
  const [user, setUser] = useState(null);

  let {username} = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const result = await Axios('http://localhost:8080/api/users/' + username);
      setUser(result.data);
    }
    if(user){
      setLoadingUser(false);
    }
    const timer = setTimeout(() =>{
      !user && fetchData();
    }, 1000);
    return () => clearTimeout(timer);
  }, [user]);

  return(
    <div className={style.body}>
      {loadingUser ? <h3>Finding Profile Info...</h3> : 
        <div className={style.userProfile}>
          <h3 className={style.username}>{user.username}</h3>
        </div>
      }
    </div>
  )  
}
export default AccountScreen;