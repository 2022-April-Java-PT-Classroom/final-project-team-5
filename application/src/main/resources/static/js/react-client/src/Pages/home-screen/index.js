import Event from '../../Components/event';
import Login from '../../Components/login';
import News from '../../Components/news-article';
import Post from '../../Components/post';
import style from './style.module.scss';

const HomeScreen=()=>{
    return(
        <main>
          <div className={style.mainScreen}>
            <div className={style.events}>
                <h2>Events</h2>
                <Event/>
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