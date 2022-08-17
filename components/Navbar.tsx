import styles from "../styles/Navbar.module.scss";
import {AiOutlineMenu} from "react-icons/ai";

const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <a className={styles.logo}>ABOUT ME</a>
            <ul className={styles.ul}>
                <li><a href={'#'}>Currículo</a></li>
                <li><a href={'#'}>Portfólio</a></li>
            </ul>
            <div className={styles.menu}>
                <AiOutlineMenu/>
            </div>
        </nav>
    );
};

export default Navbar;