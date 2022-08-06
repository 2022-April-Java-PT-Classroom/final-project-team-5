import React, {useState} from 'react';
import axios from 'axios';

import style from './style.module.scss';

const AccountCreateScreen=()=>{
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

    const newAccount = {
      username: userState.username,
      password: userState.password
    };

    if (newAccount.password.length <= 5){
      setUserState({
        ...userState,
        password: '',
        message: 'Password must be atleast 6 characters long'
      });
    } else if (newAccount.username !== ''){
      axios.post('http://localhost:8080/api/users/create-account', newAccount).then((response) => {
        console.log(response.status);
        console.log(response.data);
        setUserState({
          ...userState,
          password: '',
          message: (response.data ? 'Success! Account Created!' : 'Sorry! Username already exists!')
        });
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
            type = 'password'
            name = 'password' 
            value = {userState.password} 
            onChange = {handleChange}
            placeholder = 'Enter new password'/>
          <button type = 'submit'>Create Account</button>   
          <h3>{userState.message}</h3>
        </form>
    )
}
export default AccountCreateScreen