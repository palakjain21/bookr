import './Header.scss';
import logo from '../../assets/logo.png';

function Header() {
  return (
    <nav className="header">
      <div className="logo">
        <img src={logo} alt="logo" />
        <span>BOOK-R</span>
      </div>
      <div className="navbar">
        <p className="register ">Register</p>
        <p className="signin ">SIGN IN</p>
      </div>
    </nav>
  );
}

export default Header;
