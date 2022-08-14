import React from 'react';
import slide from "../../Assets/Images/silence.jpg"
import style from './style.module.scss';

const HomeScreen=()=>{
    return(
        <main>
            <h2>hi</h2>
          {/* <div className={style.slides}>
            <div className={style.slide}>
            <img className={style.slide-image} alt='' src ={slide}></img>
           </div>
                
          </div> */}
            <div className={style.post}>
                 <a href="/lgbtq" className={style.buttons}><h2 className={style.title}>LGBTQ Rights</h2></a>
                 <a href="/racial" className={style.buttons}><h2 className={style.title}>Cultural Rights</h2></a>
                 <a href="/women" className={style.buttons}><h2 className={style.title}>Women's Rights </h2></a>
              
            </div>
    
        </main>
    )
}
export default HomeScreen