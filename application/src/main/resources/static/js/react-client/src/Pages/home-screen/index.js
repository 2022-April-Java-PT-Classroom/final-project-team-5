import Event from '../../Components/events';
import Login from '../../Components/login';
import News from '../../Components/news-article';
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
            </div>
            <div className={style.post}>
                <Post/>
            </div>
            <div className={style.news}>
                <News/>
            </div>
         </div>
        </main>
    )
}
export default HomeScreen