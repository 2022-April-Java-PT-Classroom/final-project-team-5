import GhandiPhoto from "../../Assets/Images/GhandiQoute.png";
import React from 'react';
import endRacism from "../../Assets/Images/endRacism.jpg";
import humanity from "../../Assets/Images/humanity.jpg";
import lgbtq from '../../Assets/Images/lgbtq.jpg';
import mlk from "../../Assets/Images/mlkqoute.png";
import myBody3 from "../../Assets/Images/myBody3.jpg";
import pride from "../../Assets/Images/pridelgbtq.png";
import protest from"../../Assets/Images/clay-banks-OvGIFsexb-8-unsplash.jpg";
import rosaParks from "../../Assets/Images/rosaParks.png";
import style from './style.module.scss';

const HomeScreen=()=>{
    return(
        <main>
          <h3 className={style.def}>Agape <span className={style.defClass}>(ag-ah-pay)</span>: love, benevolence, good will, esteem </h3>
<section className={style.slideshow}>
      <div className={style.entireContent}>
        <div className={style.contentCarrousel}>
          <figure className={style.shadow}><img src={protest}/></figure>
          <figure className={style.shadow}><img src={GhandiPhoto}/></figure>
          <figure className={style.shadow}><img src={myBody3}/></figure>
          <figure className={style.shadow}><img src={lgbtq}/></figure>
          <figure className={style.shadow}><img src={mlk}/></figure>
          <figure className={style.shadow}><img src={humanity}/></figure>
          <figure className={style.shadow}><img src={pride}/></figure>
          <figure className={style.shadow}><img src={rosaParks}/></figure>
          <figure className={style.shadow}><img src={endRacism}/></figure>
    </div>
  </div>
    <h3 className={style.mission1}>Our Mission:</h3>    
    <h3 className={style.mission2}>Agape exist to band people together to fight against the injustices we are witnessing everyday in a safe and educated manner.</h3>
</section>
           

            <div className={style.post}>
                 <a href="/lgbtq" className={style.buttons}><h2 className={style.title}>LGBTQ News</h2></a>
                 <a href="/racial" className={style.buttons}><h2 className={style.title}>Cultural News</h2></a>
                 <a href="/women" className={style.buttons}><h2 className={style.title}>Women's News </h2></a>
              
            </div>
    
        </main>
    )
}
export default HomeScreen