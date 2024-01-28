import styles from './Navbar.module.css'
import '../../utils'
import { useState } from 'react';
// import { getImageUrl } from '../../utils';


const Navbar = () => {
    const [menuopen, setMenuopen] = useState(false);
    // import usestate
    // import getImageURL
    return (
        <nav className={styles.navbar}>
              <a className={styles.title} href="/">Parvez Mahamud AA</a>  
              <div className={styles.menu}>
                <img className={styles.menuBtn} 
                src={menuopen ? "../../../assets/nav/closeIcon.png" : "../../../assets/nav/menuIcon.png"} 
                alt="" 
                onClick={()=>setMenuopen(!menuopen)}
                />

                {/* <img className={styles.menuBtn} src={getImageUrl("../../../assets/nav/menuIcon.png")}/> */}
                <ul onClick={()=>setMenuopen(false)} className={`${styles.menuitems} ${menuopen && styles.menuopen}`}>
                    <li><a href="#about">About</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contacts">Contacts</a></li>
                </ul>
              </div>
        </nav>
    );
};

export default Navbar;