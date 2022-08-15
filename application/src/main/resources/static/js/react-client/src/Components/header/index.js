import React from 'react';
import style from './style.module.scss';

const Header=()=>{
    return(
            <header className={style.header}>
                <nav className={style.nav}>
                       <a href="/"><h2 className={style.Name}>Agap&#233;</h2></a>
                       <div className={style.links}>
                        <a href="/events"><h2 className={style.each}>Events</h2></a>
                        <a href="/protest"><h2 className={style.each}>Resources</h2></a>
                        <a href="/forum"><h2 className={style.each}>Forum</h2></a>
                        <a href="/faq-screen"><h2 className={style.each}>FAQ</h2></a>
                        <a href="/contact-us"><h2 className={style.each}>Contact-Us</h2></a>
                        <a href="/about-screen"><h2 className={style.each}>About Us</h2></a>
                       </div>
                </nav>
            </header>
        
    )
}
export default Header;