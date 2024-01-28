import styles from "../../Components/Contact/Contact.module.css"

const Contact = () => {
    return (
        <footer className={styles.container} id="contacts">
            <div className={styles.text}>
                <h2 >Contact Page</h2>
                <p>Feel free to reach out</p>
            </div>
            <div>
                <ul className={styles.links}>
                    <li className={styles.link}>
                        <img src="../../../assets/contact/emailIcon.png" alt="Email Icon" />
                        <a href="mailto:parvezmahmudaa100@gmail.com">parvezmahmudaa100@gmail.com</a>
                    </li>
                    <li className={styles.link}>
                        <img src="../../../assets/contact/linkedinIcon.png" alt="Email Icon" />
                        <a href="https://www.linkedin.com/in/parvez-mahamud-al-amin-29932019a/">Linkedin</a>
                    </li>
                    <li className={styles.link}>
                        <img src="../../../assets/contact/githubIcon.png" alt="Email Icon" />
                        <a href="https://github.com/ParvezMah">Github</a>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Contact;