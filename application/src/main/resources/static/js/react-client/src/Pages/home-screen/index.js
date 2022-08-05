import Event from '../../Components/event';
import Login from '../../Components/login';
import News from '../../Components/news-article';
import Post from '../../Components/post';
import style from './style.module.scss';

const HomeScreen=()=>{
    return(
       
        <div className={style.HomeScreen}>
            <div className={style.mainContainer}>
                <h2>This is the HomeScreen</h2>
                
                <Post/>
            </div>
            <div className={style.eventContainer}>
                <h2>Events</h2>
                <Event/>
            </div>
            <div className={style.newsContainer}>
                <News/>
            </div>
        </div>
    )
}
export default HomeScreen