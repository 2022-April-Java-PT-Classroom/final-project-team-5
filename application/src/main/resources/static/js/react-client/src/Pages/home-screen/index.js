import Event from '../../Components/event';
import Login from '../../Components/login';
import NewsScreen from '../../Pages/news-screen';
import Post from '../../Components/post';
import style from './style.module.scss';

const HomeScreen=()=>{
    return(
        <main>
        <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"/>
          <div className={style.mainScreen}>
            <div className={style.sidebar}>
                 <a href="/" className={style.navListItem}><i class="uil uil-home"></i><h3>Home</h3></a>
                 <a href="/event" className={style.navListItem}><i class="uil uil-calender"></i><h3>Events</h3></a> 
                 <a href="/topics" className={style.navListItem}><i class="uil uil-tag"></i><h3>Topics</h3></a>
                 <a href="/account/:user" className={style.navListItem}><i class="uil uil-user"></i><h3>Profile</h3></a>
                 <a href="/about-screen" className={style.navListItem}><i class="uil uil-smile"></i><h3>Meet the team</h3></a>
                 <a href="/faq-screen" className={style.navListItem}><i class="uil uil-question-circle"></i><h3>FAQ</h3></a>
                 <a href="" className={style.navListItem}><i class="uil uil-megaphone"></i><h3>Donate</h3></a>
                 <a href="/email-us" className={style.navListItem}><i class="uil uil-envelope"></i><h3>Email-Us</h3></a>
            </div>
            <div className={style.post}>
                <Post/>
            </div>
            <div className={style.news}>
                <NewsScreen/>
            </div>
         </div>
        </main>
    )
}
export default HomeScreen;