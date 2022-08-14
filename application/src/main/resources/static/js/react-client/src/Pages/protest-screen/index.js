import React from 'react';
import style from './style.module.scss';

const ProtestScreen=()=>{


 return(
   <main>
       <div className={style.container}>
         <h2 className={style.title}>Resources Page</h2>
    <section className={style.infoBody}>
        <article className={style.howTo}>
                <p>Here are a few resources to help with the process!</p>
          <figure className={style.howtoFigure}>
                <a href="https://www.activisthandbook.org/en/organising/protest" target='_blank'><button className={style.resources}>Activist Handbook</button></a>
                <a href="https://www.amnestyusa.org/" target='_blank'><button className={style.resources}>Amnesty USA</button></a>
                <a href="https://www.nonviolent-conflict.org/resource-library/?fwp_language=english" target='_blank'><button className={style.resources}>Non-Violent Conflict</button></a>
            </figure>
         </article>
         <article className= {style.rights}>
            <figure className={style.rightsFigure}>
                 <p>Here is where you can learn your rights!</p>
                 <a href="https://cldc.org/know-your-rights/" target='_blank'><button className={style.resources}>Civil Liberties Defense</button></a>
                 <a href="https://www.americanbar.org/news/abanews/publications/youraba/2018/november-2018/consider-this-advice-before-adding-civil-disobedience-defense-to/" target='_blank'><button className={style.resources}>American Bar</button></a>
                 <a href="https://www.nlg.org/resources/" target='_blank'><button className={style.resources}>National Lawyers Guild</button></a>
            </figure>
         </article>
     </section>
  </div>
   </main>
 )
}

export default ProtestScreen