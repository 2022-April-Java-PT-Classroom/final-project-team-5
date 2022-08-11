import AccountScreen from '../../Pages/account-screen';
import style from './style.module.scss';

const Header=()=>{
    return(
            <header className={style.header}>
                <nav className={style.nav}>
                    <div className={style.container}>
                       <a href="/"><h2 className={style.Name}>Agape</h2></a> 
                        <div className={style.searchBar}>
                         <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"/>
                            <i class="uil uil-search"></i>
                            <input type = "search" placeholder="search" className="search" ></input>
                        </div>
                    </div>
                </nav>
            </header>
        
    )
}
export default Header;