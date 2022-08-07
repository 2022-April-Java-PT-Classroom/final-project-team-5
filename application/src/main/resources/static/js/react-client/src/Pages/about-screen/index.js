import React, { useState } from 'react';

import Adam from '../../assets/Adam.png';
import Adrian from '../../assets/Adrian.png';
import Agape from '../../assets/Agape.png';
import Dhana from '../../assets/Dhana.JPG';
import Jamie from '../../assets/Jamie.png';
import Serena from '../../assets/Serena.png';
import Victor from '../../assets/Victor.png';
import axios from 'axios';
import style from './about.module.scss';

const AboutScreen = () => {
    return (
        <div className={style.aboutScreen}>
               <div className = {style.section}>
                <h2>Together We are Team Agape!💕</h2>
                <img className={style.img} src={Agape} alt=''/>
               </div><br></br>
            
                <div className={style.section1}>

                <img className={style.img} src={Dhana} alt='' /> 
                <h2>Dhana P Acharya(Zodiac 🐐)</h2>
                
                <p> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                     incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                     laboris nisi ut aliquip ex ea commodo consequat.
                     Duis aute irure dolor in reprehenderit</p>

                <img className={style.img} src={Jamie} alt='' />
                <h2>Jamie Barr</h2>
                
                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                       incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                      ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.</p>
                      
                <img className={style.img} src={Adrian} alt='' />
                <h2>Adrian Colter</h2>
                
                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
               incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
               ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit </p>

                </div>

                <div className={style.section2}>
                  
                <img className={style.img} src={Victor} alt='' />
                <h2>Victor Grullon</h2>
                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit</p>

                <img className={style.img} src={Adam} alt='' />
                <h2>Adam Ackley</h2>
                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                   incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                   ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit </p>

                 <img className={style.img} src={Serena} alt='' />
                 <h2>Serena Howard</h2>
                <p> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                     incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit</p>
              </div>
              </div>

    );
}
export default AboutScreen;