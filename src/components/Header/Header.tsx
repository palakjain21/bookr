import styles from './Header.module.scss';
import logo from '../../assets/logo.png';

function Header() {
  return (
    <nav className={styles.header}>
      <div className={styles.logo}>
        <img src={logo} alt="logo" />
        <span>BOOK-R</span>
      </div>
      <div className={styles.navbar}>
        <p className={styles.register}>Register</p>
        <p className={styles.signin}>SIGN IN</p>
      </div>
    </nav>
  );
}

export default Header;
