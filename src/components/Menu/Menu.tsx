import styles from './Menu.module.scss';
import { IconContext } from 'react-icons';
import { AiOutlineCloseSquare } from 'react-icons/ai';

interface Props { 
  isMenu: boolean;
  closeMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const Menu = ( {isMenu, closeMenu }:Props) => {
   
    return (
    <>
      {isMenu ? (
        <>
          <div className={styles.box}>
            <div className={styles.menu}>
              <div className={styles.menuClose} onClick={() => closeMenu(false)}>
                  <IconContext.Provider
                    value={{ size: '35px', color: 'black',  }}
                  >
                    <AiOutlineCloseSquare />
                  </IconContext.Provider>
              </div>
            </div>
            <div className={styles.options}>
             <p className={styles.register}>REGISTER</p>
              <p className={styles.signin}>SIGN IN</p>
            </div >
          </div>
       </>
      ) : false}
    </>
  );
};

export default Menu;