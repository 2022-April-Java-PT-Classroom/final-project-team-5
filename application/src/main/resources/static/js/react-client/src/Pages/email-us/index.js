import React from "react";
import style from './style.module.scss';

const Email = () => {
    return (
        <div className={style.emailus}>
            <form action="email-us">
                <div className={style.email}>
                    
                        <input placeholder=" Email Address" type="email" required />
                     <div>
                        <textarea placeholder=" Message here" rows="10" cols="50" required></textarea>
                    </div>
                </div>
                <div class="btn">
                    <button  type='send'>Send</button>
                </div>
            </form>
        </div>
    );
}
export default Email;