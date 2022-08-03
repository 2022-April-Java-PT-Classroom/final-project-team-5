import React, {useState} from 'react';
import axios from 'axios';

import style from './style.module.scss';

const AccountCreateScreen=()=>{
  const [userState, setUserState] = useState({
    username: '',
    password: ''
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

    const newAccount = {
      username: userState.username,
      password: userState.password
    };

    if (newAccount.username !== '' && newAccount.password !== ''){
      axios.post('http://localhost:8080/users/create-account', newAccount).then((response) => {
        console.log(response.status);
        console.log(response.data);
      });
    }
  }

    return(
        <form className={style.createForm} onSubmit={handleSubmit}>
          <input 
            type = 'text'
            name =  'username'
            value = {userState.username} 
            onChange = {handleChange}
            placeholder = 'Enter new username'/>
          <input 
            type = 'text'
            name = 'password' 
            value = {userState.password} 
            onChange = {handleChange}
            placeholder = 'Enter new password'/>
          <button type = 'submit'>Create Account</button>   
        </form>
    )
}
export default AccountCreateScreen