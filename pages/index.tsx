import type {NextPage} from 'next';
import styles from '../styles/Home.module.scss';
import Navbar from "../components/Navbar";
import {BsChevronDoubleDown} from "react-icons/bs";

const Home: NextPage = () => {
    return (
        <>
            <header>
                <Navbar/>
            </header>
            <main>
                <div className={styles.mainBG}>
                    <div className={styles.headerContent}>
                        <div className={styles.headerText}>
                            <h1>
                                Pedro Lucas
                            </h1>
                            <p>Técnico em desenvolvimento de sistemas pelo CEFET-MG com 4 anos de experiência em desenvolvimento
                                web, principalmente angular. Atualmente cursando ciências da computação na UFV Campus de
                                Viçosa.</p>
                        </div>
                    </div>
                    <div className={styles.arrowDownIconDiv}>
                        <BsChevronDoubleDown/>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Home;
