import Login from '../../Components/login';
import style from './style.module.scss';

const HomeScreen=()=>{
    return(
       
        <div className={style.HomeScreen}>
            <Login/>
            <h2>This is the HomeScreen</h2>
        </div>
    )
}
export default HomeScreen