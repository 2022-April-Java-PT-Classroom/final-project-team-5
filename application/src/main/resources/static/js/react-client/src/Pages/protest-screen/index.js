import style from './style.module.scss';
import React from 'react';

const ProtestScreen=()=>{
    console.log(Hello);

 return(
 <div className="container">
    <section>
        <article className={style.how_to_column}>
          <figure className={style.how_to_column_figure}>
                <a href="https://www.activisthandbook.org/en/rights/united-states"><button>Organize</button></a>
                 <a href="https://www.amnestyusa.org/"><button>Organize</button></a>
                <a href="https://www.nonviolent-conflict.org/resource-library/?fwp_language=english"><button>Organize</button></a>
                <p>Here are a few resources to help with the process!</p>
            </figure>
         </article>
         <article className= {style.rights_column}>
            <figure className={style.rights_figure}>
                <a href="https://www.amnestyusa.org/"><button>Our Rights</button></a>
                 <a href="https://www.americanbar.org/news/abanews/publications/youraba/2018/november-2018/consider-this-advice-before-adding-civil-disobedience-defense-to/"><button>Our Rights</button></a>
                 <a href="https://www.nlg.org/resources/"><button>Our Rights</button></a>
                 <p>Here is where you can learn your rights!</p>
            </figure>
         </article>
     </section>
  </div>
 )
}

export default ProtestScreen