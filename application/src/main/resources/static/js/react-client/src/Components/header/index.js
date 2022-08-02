import Login from '../login';
import style from './style.module.scss';

const Header=()=>{
    return(
        <div>
            <header className={style.header}>
                <img src="https://i.imgur.com/HQSTt1W.gif" alt="AgapeLogo.gif" className={style.logo} ></img>
                <h2>Agape</h2>
                <div className={style.Login}>
                    <Login/>
                </div>
            </header>
        </div>
    )
}
export default Header;