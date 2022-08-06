import HomeScreen from '../../Pages/home-screen';
import Login from '../login';
import style from './style.module.scss';

const Header=()=>{
    return(
        <div>
            <header className={style.header}>
                <nav className={style.nav}>
                    <h2 className={style.Name}>Agape</h2>
                    <div className={style.navList}>
                        <a href="/" className={style.navListItem}>Home</a>
                        <a href="/event" className={style.navListItem}>Events</a> 
                        <a href="/topics" className={style.navListItem}>Topics</a>
                        <a href="/account/:user" className={style.navListItem}>Profile</a>
                        <div>
                            <form className={style.searchbar}>
                                <input type={'search'} id={'query'} name={'q'} placeholder={'search...'}></input>
                                <button type='submit'>search</button>
                            </form>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    )
}
export default Header;