import React, {useState} from 'react';
import axios from 'axios';

import style from './style.module.scss';

const Login=()=>{
    const [userState, setUserState] = useState({
        username: '',
        password: '',
        message: ''
      });

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
            username: userState.username,
            password: userState.password
        };

        if (accountInfo.username !== ''){
            axios.post('http://localhost:8080/api/users/login', accountInfo).then((response) =>{  
                setUserState({
                    ...userState,
                    username: '',
                    password: '',
                    message: (response.data ? 'Success!' : 'Invalid username or password!')
                  });
            });
        }  
    }    

    return(
        <form className={style.loginForm} onSubmit={handleSubmit}>
            <input  
              type = 'text'
              name = 'username'
              value = {userState.username} 
              onChange = {handleChange}
              placeholder = 'Enter username'/>
            <input 
              type = 'password' 
              name = 'password'
              value = {userState.password}
              onChange = {handleChange}
              placeholder = 'Enter password'/>
            <button className={style.submitButton} type='submit'>Sign In</button>
            <h3>{userState.message}</h3>
        </form>
    )
}



export default Login;