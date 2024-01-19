import styles from './Navbar.module.css'

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
              <a className={styles.title} href="/">Portfolio</a>  
              <div className={styles.menu}>
                <ul className={styles.menuitems}>
                    <li><a href="/about">About</a></li>
                    <li><a href="/about">Experience</a></li>
                    <li><a href="/about">Projects</a></li>
                    <li><a href="/about">Contact</a></li>
                </ul>
              </div>
        </nav>
    );
};

export default Navbar;