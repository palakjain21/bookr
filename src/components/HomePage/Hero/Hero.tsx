import './Hero.scss';
import hero from '../../../assets/hero.png';

function Hero() {
  return (
    <div className="books">
      <div className="text">
          <p>
            CHANGE YOUR<br /> READING <br />EXPERIENCE
            <br/><br />
            <span>WITH THE POWER OF CLOUD</span>
          </p>
      </div> 
      <div className="hero">
        <img className="hero" src={hero} alt="logo" />
      </div>
      
    </div>
  );
}

export default Hero;
