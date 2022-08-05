import Login from '../login';
import style from './style.module.scss';

const Header=()=>{
    return(
        <div>
            <header className={style.header}>
                <img src="https://i.imgur.com/HQSTt1W.gif" alt="AgapeLogo.gif" className={style.logo} ></img>
                <title>Agape</title>
                <nav className={style.nav}>
                    <ul className={style.navList}>
                        <li className={style.navListItem}>Events</li> 
                        <li className={style.navListItem}>Topics</li>
                        <li className={style.navListItem}>Profile</li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}
export default Header;