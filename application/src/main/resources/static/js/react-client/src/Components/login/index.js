import style from './style.module.scss';

const Login=()=>{
    return(
        <form className='loginForm'>
             <h2>This is the Login</h2>
            <input type='text' placeholder='enter username'/>
            <input type='text' placeholder='enter password'/>
            <button type='submit'>Sign In</button>
           
        </form>
    )
}



export default Login;