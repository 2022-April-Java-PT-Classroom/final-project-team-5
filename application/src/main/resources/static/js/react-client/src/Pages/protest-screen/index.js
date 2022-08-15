import React from 'react';
import style from './style.module.scss';
import streetProtest from '../../Assets/Images/streetProtest.jpg';

const ProtestScreen=()=>{


 return(
   <main>
       <div className={style.container}>
         <h2 className={style.title}>Resources Page</h2>
        <section className={style.infoBody}>
            <article className={style.howTo}>
                <p>Here are a few resources to help with the process!</p>
                <a href="https://www.activisthandbook.org/en/organising/protest" target='_blank'><button className={style.resources}>Activist Handbook</button></a>
                <a href="https://www.amnestyusa.org/" target='_blank'><button className={style.resources}>Amnesty USA</button></a>
                <a href="https://www.nonviolent-conflict.org/resource-library/?fwp_language=english" target='_blank'><button className={style.resources}>Non-Violent Conflict</button></a>
           
             </article>

            <article className= {style.rights}>
                 <p>Here is where you can learn your rights!</p>
                  <a href="https://cldc.org/know-your-rights/" target='_blank'><button className={style.resources}>Civil Liberties Defense</button></a>
                  <a href="https://www.americanbar.org/news/abanews/publications/youraba/2018/november-2018/consider-this-advice-before-adding-civil-disobedience-defense-to/" target='_blank'><button className={style.resources}>American Bar</button></a>
                  <a href="https://www.nlg.org/resources/" target='_blank'><button className={style.resources}>National Lawyers Guild</button></a>
            </article>
       </section>
      </div>
         <h2 className={style.subheading}>Organizations to Support</h2>

      <div className={style.organizations}>
       <section className={style.lgbtqRights}>
          <h2>LGBTQ Organizations</h2>
            <a href="https://www.thetaskforce.org/" target='_blank'><button className={style.resources2}>National LGBTQ Taskforce</button></a>
            <a href="https://www.hrc.org/" target='_blank'><button className={style.resources2}>Human Rights Campaign</button></a>
            <a href="https://www.lambdalegal.org/" target='_blank'><button className={style.resources2}>Lambda Legal for Assistance</button></a>
      </section>
   
      <section className={style.culturalRights}>
         <h2>Rights of Minorities Organizations</h2>
          <a href="https://civilrights.org/" target='_blank'><button className={style.resources2}>Civil and Human Rights of all Persons</button></a>
          <a href="https://colorofchange.org/" target='_blank'><button className={style.resources2}>Color of Change</button></a>
          <a href="https://www.equalrights.org/" target='_blank'><button className={style.resources2}>Media Justice</button></a>
      </section>

       <section className={style.womensRights}>
          <h2>Womens Rights Organizations</h2>
            <a href="https://now.org/" target='_blank'><button className={style.resources2}>National Organization for Women</button></a>
            <a href="https://feminist.org/" target='_blank'><button className={style.resources2}>Feminist Majority Foundation</button></a>
            <a href="https://www.equalrights.org/" target='_blank'><button className={style.resources2}>Equal Rights Advocates</button></a>
       </section> 
   
  </div>
</main>
 )
}

export default ProtestScreen