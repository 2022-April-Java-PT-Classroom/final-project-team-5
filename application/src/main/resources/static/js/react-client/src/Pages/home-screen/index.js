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
                 <a href="/about-screen" className={style.navListItem}><i class="uil uil-smile"></i><h3>Meet the team</h3></a>
                 <a href="/faq-screen" className={style.navListItem}><i class="uil uil-question-circle"></i><h3>FAQ</h3></a>
                 <a href="" className={style.navListItem}><i class="uil uil-megaphone"></i><h3>Learn how to protest</h3></a>
                 <a href="/email-us" className={style.navListItem}><i class="uil uil-envelope"></i><h3>Email-Us</h3></a>
            </div>
            <div className={style.post}>
            <a href="/lgbtq" className={style.buttons}><h2>LGBTQ Rights</h2></a>
            <a href="/racial" className={style.buttons}><h2>Cultural Rights</h2></a>
            <a href="/women" className={style.buttons}><h2>Women's Rights </h2></a>
              
            </div>
         </div>
        </main>
    )
}
export default HomeScreen