import React from "react";
import style from './style.module.scss';

const Email = () => {
    return (
      <div className={style.container}>
        <div className={style.callus}>
            <h2><i>&#9990;</i> Call</h2>
            <button className={style.phoneButton}>(216) 555-0142</button>
            <p>M-F 8am-10pm ET</p>
        </div>
        
        <div className={style.emailus}>
            <form action="email-us">
                <div className={style.email}>
                        <h2><i>&#9993;</i> E-mail</h2>
                        <input placeholder=" Email Address" type="email" required />
                     <div>
                        <textarea placeholder=" Message here" rows="10" cols="50" required></textarea>
                    </div>
                </div>
                <div class="btn">
                    <button className={style.emailButton}  type='send'>Send</button>
                </div>
            </form>
        </div>

        <div className={style.media}>
            <h2><i>&#8886;</i> Connect</h2>
            <div className={style.mediaRow}>  
              <button className={style.mediaButton}><p className={style.bird}>&#128330;</p></button>
              <button className={style.mediaButton}><p className={style.book}>f</p></button>
            </div>
            <div className={style.mediaRow}>
              <button className={style.mediaButton}><p className={style.tube}>&#9655;</p></button>
              <button className={style.mediaButton}><p className={style.gram}>&#10695;</p></button>
            </div>
        </div>
      </div>
    );
}
export default Email;