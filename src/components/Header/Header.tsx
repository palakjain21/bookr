import { useState} from 'react';
import styles from  './Header.module.scss';
import logo from '../../assets/logo.png';
import {GiHamburgerMenu} from "react-icons/gi";
import { IconContext } from 'react-icons';
import Menu from '../Menu/Menu';

function Header() {
  const [isMenuOpen, setMenu ] = useState(false)
  return (
    <>
    <div style={{ position: 'fixed'}}>
     {isMenuOpen ? <Menu isMenu={isMenuOpen} closeMenu={setMenu} /> : null}
    </div>
    <nav className={styles.header}>
      <div className={styles.logo}>
        <img src={logo} alt="logo" />
        <span>BOOK-R</span>
      </div>
      <div className={styles.navbar}>
        <p className={styles.register}>Register</p>
        <p className={styles.signin }>SIGN IN</p>
      </div>
      <div className={styles.burger} onClick={()=> setMenu(true)}>
        <IconContext.Provider
                    value={{ size: '30px', color: 'black' }}
        >
          <GiHamburgerMenu className={styles.hamburger} />
        </IconContext.Provider>   
      </div>
    </nav>
    </>
  );
}

export default Header;




