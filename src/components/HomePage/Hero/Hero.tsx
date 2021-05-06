import './Hero.scss';
import hero from '../../../assets/hero.png';

function Hero() {
  return (
    <div className="hero">
      <p className="text">
        CHANGE YOUR
        <br /> READING <br />
        EXPERIENCE
        <br />
        <span className="tagline">WITH THE POWER OF CLOUD</span>
      </p>
      <div className="books">
        <img className="books" src={hero} alt="logo" />
      </div>
    </div>
  );
}

export default Hero;
