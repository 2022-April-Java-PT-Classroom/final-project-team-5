import Login from '../login';
import style from './style.module.scss';

const Header=()=>{
    return(
        <div>
            <img src="https://i.imgur.com/HQSTt1W" alt="AgapeLogo.gif"></img>
            <h2>Agape</h2>
            <Login/>
        </div>
    )
}
export default Header;