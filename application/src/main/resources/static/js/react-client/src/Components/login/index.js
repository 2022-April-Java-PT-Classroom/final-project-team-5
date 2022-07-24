import style from './style.module.scss';

const Login=()=>{
    return(
        <form className={style.loginForm}>
             <h2>This is the Login</h2>
            <input className={style.userNameInput} type='text' placeholder='enter username'/>
            <input className={style.passwordInput} type='text' placeholder='enter password'/>
            <button className={style.submitButton} type='submit'>Sign In</button>
           
        </form>
    )
}



export default Login;