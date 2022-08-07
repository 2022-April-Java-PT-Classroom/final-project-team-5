import { NavLink } from 'react-router-dom';
import style from './style.module.scss';

const Header = () => {

    return (
        <div>
        <div className={style.title}>
                <h1>Welcome To Agape Social Site</h1>
                </div>
        <div className={style.header}>
            
            <ul className={style.navList}>
                <NavLink to={'/'}>Home </NavLink>
                <NavLink to={'/about-screen'}>About Us </NavLink>
                <NavLink to={'/faq'}>FAQ</NavLink>
                
            </ul>
            </div>
            </div>
    )
}

export default Header;