
import styles from './Hero.module.css';
import heroImage from '../../assets/hero-img.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import twitterLight from '../../assets/twitter-light.svg';
import twitterDark from '../../assets/twitter-dark.svg'
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg'
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import cv from '../../assets/cv.pdf';
import cv1 from '../../assets/CV VIRAJ D.pdf'
import { useTheme } from '../../common/ThemeContext';
function Hero() {
    const {theme , toggleTheme}=useTheme();

  const themeIcon =theme==='dark' ? moon : sun;
  const twitterIcon = theme === 'dark' ? twitterLight : twitterLight;
  const githubIcon = theme === 'light' ? githubLight : githubLight;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinLight;

  return (
   <section id='hero' className={styles.container}>
    <div className={styles.colorModeContainer}>
      <img className={styles.hero} src={heroImage} alt='Profile Picture of Viraj' /> 
      <img className={styles.colorMode} src={themeIcon} alt="color mode icon" onClick={toggleTheme} />
    </div>
    <div className={styles.info}>
        <h1>Viraj Deshmukh</h1>
        <h2>Java Full Stack Developer</h2>
        <span>
            <a href='https://twitter.com' target='_blank'><img src={twitterIcon} alt='twitter-Icon'/></a>
            
            <a href='https://github.com/Blackshadow45' target='_blank'><img src={githubIcon} alt='Github-Icon'/></a>

            <a href='https://www.linkedin.com/in/viraj-deshmukh-7a31292a3/' target='_blank'><img src={linkedinIcon} alt='Linkedin icon'/></a>


        </span>
        <p className={styles.description}>
              Aspiring Java Full Stack Developer — on a mission to craft meaningful web experiences and evolve through every line of code.
        </p>
        <a href={cv1} download>
            <button className='hover' >Resume </button>
        </a>
    </div>

   </section>
  )
}

export default Hero;
