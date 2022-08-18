

import Adam from '../../Assets/Images/Adam.jpg';
import Adrian from '../../Assets/Images/Adrian.png';
import Dhana from '../../Assets/Images/Dhana.JPG';
import Jamie from '../../Assets/Images/Jamie.png';
import serena from '../../Assets/Images/serena.jpg';
import Victor from '../../Assets/Images/Victor.png'
import style from './about.module.scss';

const AboutScreen = () => {
    return (
        <div className={style.aboutScreen}>
               <div className = {style.section}>
                <h1>Together We are Team Agape!</h1>
                
               </div><br></br>
            
                <div className={style.section1}>

                <img className={style.img} src={Dhana} alt='' /> 
                <h2 className={style.Name}>Dhana P Acharya</h2>
                
                <p className={style.eachBio}> Current Amazon Problem Solver , Process Guide, and Learning Ambassador  for problem solvers
                    and  Count Associates looking to further career in  IT field
                    by obtaining a role of a Junior Developer to make best use of the experiences and skills
                    that I gained through We CAN CODE IT, and Kenzie Academy.
                    I am a passionate learner. Learning means fun to me. Learning anything new always enchants me.
                    I love coding.
                    Literally, I started coding from Zero,but my passion for coding dismantled
                    all the hinderances that
                    I came across</p>

                <img className={style.img} src={Jamie} alt='' />
                <h2 className={style.Name}>Jamie Barr</h2>
                
                <p className={style.eachBio} >"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                       incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                      ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.</p>
                      
                <img className={style.img} src={Adrian} alt='' />
                <h2 className={style.Name}>Adrian Colter</h2>
                
                <p className={style.eachBio} >A jr. full stack developer located in the greater Cleveland area. 
                    I hold a Bachelor of Arts in Communication Studies and have prior experience in the marketing industry. 
                    I am eager to advance my skills 
                    and continue my learning in the software development field. </p>

                </div>

                <div className={style.section2}>
                  
                <img className={style.img} src={Victor} alt='' />
                <h2 className={style.Name}>Victor Grullon</h2>
                <p className={style.eachBio}>Full stack java developer based in Cleveland, Ohio. Eager to use my excellent communication 
                     and problem solving skills to help make a difference through tech.</p>
                <img className={style.img} src={Adam} alt='' />
                <h2 className={style.Name}>Adam Ackley</h2>
                <p className={style.eachBio}> I am currently enrolled at We Can Code IT to earn a Certificate in Software
                    Development. It is my goal to become a Full-Stack Developer. I have a
                    passion for coding and enjoy working with others in a team setting as well
                    as independently. I am an efficient problem solver with excellent
                    troubleshooting skills. I am flexible and always seeking to acquire new skills. Besides having earned
                     an Associates degree in Network Systems Administration. 
                    I am an avid computer gamer and have great interest in computer hardware and remote control cars.</p>


                 <img className={style.img} src={serena} alt='' />
                 <h2>Serena Howard</h2>
                <p> I am a full stack software developer located in Columbus,OH who is exited about adding to 
                    the numbers of
                     women in tech and developing my skills. </p>
              </div>
              </div>

    );
}
export default AboutScreen;
























