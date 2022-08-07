import AccountScreen from '../../Pages/account-screen';
import Cliff from '../../assets/Images/cliff.png';
import style from './style.module.scss';

const Header=()=>{
    return(
        <div>
            <header className={style.header}>
                <nav className={style.nav}>
                    <div className={style.container}>
                        <h2 className={style.Name}>Agape</h2>
                        <div className={style.searchBar}>
                         <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"/>
                            <i class="uil uil-search"></i>
                            <input type = "search" placeholder="search" className="search" ></input>
                        </div>
                        <a href="/account/:user"><img className={style.profilePhoto}  src={Cliff}></img><h4>@Mr.Thunder</h4></a>
                    </div>
                </nav>
            </header>
        </div>
    )
}
export default Header;