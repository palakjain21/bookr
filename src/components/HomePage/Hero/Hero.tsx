import './Hero.scss';
import hero from '../../../assets/hero.png';

function Hero() {
  return (
    <div className="hero">
      <div className="text">
        <p>
          CHANGE YOUR
          <br /> READING <br />
          EXPERIENCE
          <br />
          <span>WITH THE POWER OF CLOUD</span>
        </p>
      </div>
      <div className="books">
        <img className="books" src={hero} alt="logo" />
      </div>
    </div>
  );
}

export default Hero;
