import React from "react";
import style from './style.module.scss';

const Email = () => {

  const handleSubmit = (e) => {
  
    window.location.reload(false);
   
  }

    return (
      <div className={style.container}>
        <div className={style.callus}>
            <h2 className={style.contactTitle}><i>&#9990;</i> Call</h2>
            <button className={style.phoneButton}>(216) 555-0142</button>
            <p>M-F 8am-10pm ET</p>
        </div>
        
        <div className={style.emailus}>
            <form onSubmit={handleSubmit}>
                <div className={style.email}>
                        <h2 className={style.contactTitle}><i>&#9993;</i> E-mail</h2>
                        <input placeholder=" Email Address" type="email" required />
                        <textarea placeholder=" Message here" rows="10" cols="50" required></textarea>
                </div>
                <div class="btn">
                    <button className={style.emailButton}   type='submit' >Send</button>
                </div>
            </form>
        </div>

        <div className={style.media}>
        <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"></link>
            <h2 className={style.contactTitle}><i>&#8886;</i> Connect</h2>
            <div className={style.mediaRow}>  
              <button className={style.mediaButton}><p className={style.bird}><i class="uil uil-twitter"></i></p></button>
              <button className={style.mediaButton}><p className={style.book}><i class="uil uil-facebook-f"></i></p></button>
            </div>
            <div className={style.mediaRow}>
              <button className={style.mediaButton}><p className={style.tube}><i class="uil uil-youtube"></i></p></button>
              <button className={style.mediaButton}><p className={style.gram}><i class="uil uil-instagram"></i></p></button>
            </div>
        </div>
      </div>
    );
}
export default Email;