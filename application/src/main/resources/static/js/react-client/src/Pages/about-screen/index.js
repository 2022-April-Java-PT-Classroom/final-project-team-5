import React, { useState } from 'react';

import Adam from '../../Assets/Images/Adam.jpg';
import Adrian from '../../Assets/Images/Adrian.png';
import Dhana from '../../Assets/Images/Dhana.JPG';
import Jamie from '../../Assets/Images/Jamie.png';
import Serena from '../../Assets/Images/Serena.png';
import Victor from '../../Assets/Images/Victor.png';
import axios from 'axios';
import style from './about.module.scss';

const AboutScreen = () => {
    return (
        <div className={style.aboutScreen}>
            
                <div className={style.section1}>
                <section className={style.background}>
                <h2>Dhana P Acharya</h2>
                <img className={style.img} src={Dhana} alt='PP' /> 
                </section>              
                <p> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                     incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                     laboris nisi ut aliquip ex ea commodo consequat.
                     Duis aute irure dolor in reprehenderit</p>
                
                <section className={style.background}>
                <h2>Jamie Barr</h2>
                <img className={style.img} src={Jamie} alt='PP' />
                </section>   
                              
                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.</p>
                
                <section className={style.background}>
                <h2>Adrian Colter</h2>      
                <img className={style.img} src={Adrian} alt='PP' />
                </section>   
                                
                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                 incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                 ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit </p>

                 </div>


                <div className={style.section2}>
                
                <section className={style.background}>
                <h2>Victor Grullon</h2>
                <img className={style.img} src={Victor} alt='PP' />
                </section>   
                
                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit</p>
                
                <section className={style.background}>
                <h2>Adam Ackley</h2>
                <img className={style.img} src={Adam} alt='PP' />
                </section>   
               
                <p>I am currently enrolled at We Can Code IT to earn a Certificate in Software 
                    Development. It is my goal to become a Full-Stack Developer. I have a 
                    passion for coding and enjoy working with others in a team setting as well 
                    as independently. I am an efficient problem solver with excellent 
                    troubleshooting skills. I am flexible and always seeking to acquire new skills. Besides having earned an Associates degree in Network Systems Administration. I am an avid computer gamer and have great interest in computer hardware and remote control cars.</p>

                <section className={style.background}>
                <h2>Serena Howard</h2>
                <img className={style.img} src={Serena} alt='PP' />
                </section>   


                <p> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                     incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit</p>
              </div>
              </div>


    
    );
}
export default AboutScreen;