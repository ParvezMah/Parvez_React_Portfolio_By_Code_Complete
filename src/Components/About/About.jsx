import styles from "../../Components/About/About.module.css"

const About = () => {
    return (
        <section className={styles.container} id="about">
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <img className={styles.aboutImg} src="../../../assets/about/aboutImage.png" alt="" />
                
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img src="../../../assets/about/cursorIcon.png" alt="" />
                        <div className={styles.aboutItemText}>
                            <h3>Frontend Developer</h3>
                            <p>I am a front-end developer with experience
        in building responsive and optimized sites</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src="../../../assets/about/cursorIcon.png" alt="" />
                        <div className={styles.aboutItemText}>
                            <h3>Backend Developer</h3>
                            <p>I have experience developing fast and
    optimised back-end systems and APIs</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src="../../../assets/about/serverIcon.png" alt="" />
                        <div className={styles.aboutItemText}>
                            <h3>UI Designer</h3>
                            <p>I have designed multiple landing pages and
    have created design systems as well</p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default About;