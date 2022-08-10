import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Axios from 'axios';
import axios from 'axios';

import style from './style.module.scss';

const AccountUpdateScreen=()=>{
  const [loadingUser, setLoadingUser] = useState(true);
  const [user, setUser] = useState(null);
  const [userState, setUserState] = useState({
    location: '',
    message: ''
  });

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


  const handleChange = (e) =>{
    const value = e.target.value;
    setUserState({
      ...userState,
      [e.target.name]: value
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const accountInfo = {
      location: userState.location,
    };

    if (accountInfo.location.length <= 1){
      setUserState({
        ...userState,
        location: '',
        message: 'Location must be atleast 2 characters long'
      });
    } else {
      axios.put(`http://localhost:8080/api/users/update-account/${username}`, accountInfo).then((response) => {
        setUser({
          ...user,
          location: userState.location
        });
        setUserState({
          ...userState,
          location: '',
          message: (response.data ? 'Success! Account Updated!' : 'Sorry! Error Updating!')
        });
      });  
    }
  }

    return(
        <div>
          {loadingUser ? <h3>Finding Profile Info...</h3> : 
            <div className={style.userProfile}>
             <div>
               <h3 className={style.username}>{user.username}</h3>
               <h4 className={style.location}>Current Location: {user.location}</h4>
             </div>
             <form className={style.createForm} onSubmit={handleSubmit}>
                <input 
                  type = 'text'
                  name =  'location'
                  value = {userState.location} 
                  onChange = {handleChange}
                  placeholder = 'Enter new location'/>
                <button className={style.submitButton} type='submit'>Update Account</button>   
                <h3>{userState.message}</h3>
             </form>
            </div>
          }  
        </div>
    )
}
export default AccountUpdateScreen;