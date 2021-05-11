import styles from './Hero.module.scss';
import hero from '../../../assets/hero.png';

const Hero = () => {
  return (
    <div className={styles.hero}>
      <p className={styles.text}>
        CHANGE YOUR
        <br /> READING <br />
        EXPERIENCE
        <br />
        <span className={styles.tagline}>WITH THE POWER OF CLOUD</span>
      </p>
      <div className={styles.booksContainer}>
        <img className={styles.booksContainer} src={hero} alt="logo" />
      </div>
    </div>
  );
};

export default Hero;
