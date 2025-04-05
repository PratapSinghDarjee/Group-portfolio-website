import styles from './HeroStyles.module.css';
import heroImg from '../../assets/hero-img.png';
import groupImg from '../../assets/group_image.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import twitterLight from '../../assets/twitter-light.svg';
import twitterDark from '../../assets/twitter-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/license.pdf';
import cert from '../../assets/Certificates.pdf';
import train from '../../assets/Trainings.pdf';

import { useTheme } from '../../common/ThemeContext';
import { createElement } from 'react';

function Hero() {
    const {theme, toggleTheme} = useTheme();
    const themeIcon = theme ==='light' ? sun : moon;
    const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
    const githubIcon = theme === 'light' ? githubLight : githubDark;
    const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;
   
  return (

    <section id='hero' className={styles.container}>
        <div className={styles.colorModeContainer}>
            <img 
                className={styles.hero}
                src={groupImg} 
                alt="Profile picture of dream again" 
            />
            <img 
                className={styles.colorMode}
                src={themeIcon} 
                alt="Color mode icon" 
                onClick ={toggleTheme}
            />
        </div>
        <div className={styles.info}> 
            <h1>
                Team Dream Again 
            </h1>
            <h2>
                Algonquin College
            </h2>
            <h3>
                Computer Science Department  
            </h3> 
            <span>
                <a href="https://twitter.com/" target="_blank">
                    <img src={twitterIcon} alt="Twitter icon" />
                </a>
                <a href="https://github.com/PratapSinghDarjee" target="_blank">
                    <img src={githubIcon} alt="Github icon" />
                </a>
                <a href="https://Linkedin.com/in/pratapsd/" target="_blank">
                    <img src={linkedinIcon} alt="Linkedin icon" />
                </a>
            </span>
            <p className={styles.description}>
            We have worked together as a team on various Software Development Projects, 
            successfully building a number of software solutions. Our team is made up 
            of five members, namely Aspinder Singh, Jashkaran Singh, Jujhar Singh, Karan Singh
            and Pratap Singh Darjee. Currently, The team leader or Scrum Master is Pratap.
            </p>
            
            <a href={CV} download>
                <button className="hover">
                   Licenses and certificates
                </button>          
            </a>
            
            
        </div>
    </section>
  );
  
}

export default Hero; 