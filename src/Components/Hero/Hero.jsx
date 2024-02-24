import styles from "../../../src/Components/Hero/Hero.module.css"

const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, I am Parvez</h1>
                <p className={styles.description}>I’m a full-stack developer with 5 years
of experience using React and NodeJS.
Reach out if you would like to learn more!</p>
<a className={styles.contactBtn} href="mailto:parvezmahmudaa100@gmail.com">Contact Me</a>
            </div>

            <img className={styles.heroImg} src="../../../assets/hero/Parvez Portfolio Picture1.jpg" alt="" />
            <div className={styles.topBlur}></div>
            <div className={styles.btmBlur}></div>
        </section>
    );
};

export default Hero;