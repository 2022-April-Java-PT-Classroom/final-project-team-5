import React from "react";
import style from './style.module.scss';

const Email = () => {
    return (
      <div className={style.container}>
        <div className={style.emailus}>
            <form action="email-us">
                <div className={style.email}>
                        <h5><i>&#9993;</i> E-mail us!</h5>
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

        <div className={style.callus}>
            <h5><i>&#9990;</i> Call us!</h5>
            <button>(216) 555-0142</button>

        </div>
        
        <div className={style.media}>
            <h5><i>&#8886;</i> Connect with us!</h5>
            <button className={style.mediaButton}>&#128330;</button>
            <button className={style.mediaButton}>f</button>
            <button className={style.mediaButton}><p>&#9655;</p></button>
            <button className={style.mediaButton}>&#10695;</button>
        </div>
      </div>
    );
}
export default Email;