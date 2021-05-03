import './Header.scss';
import logo from './logo.png';

function Header() {
  return (
    <nav className="header">
      <div className="logo">
        <img src={logo} alt="logo" />
        <h2>BOOK-R</h2>
      </div>
      <div className="navbar">
        <p className="register ">Register</p>
        <p className="signin ">SIGN IN</p>
      </div>
    </nav>
  );
}

export default Header;
