import styles from "../Experience/Experience.module.css"
import skills from "../../Components/Data/skills.json"
import history from "../../Components/Data/history.json"

const Experience = () => {
    console.log('skills is : ', skills);
    console.log('history is : ', history);

    return (
        <section className={styles.container} id="experience">
            <h2 className={styles.title}>Experience</h2>
            <div className={styles.content}>
                <div className={styles.skills}>
                    {
                        skills.map((skill, id) => {
                            return <div key={id} className={styles.skill}>
                                <div className={styles.skillImgContainer}>
                                    <img style={{ width: '75px' }} className={styles.imageSrc}  src={skill.imageSrc} alt={skill.title} />
                                </div>
                                <p>{skill.title}</p>
                            </div>
                        })
                    }
                </div>
                <ul className={styles.history}>
                    {
                        history.map((historyItem, id) => {
                            return <li key={id} className={styles.historyItem}>
                                <img 
                                    src={historyItem.imageSrc} 
                                    alt={historyItem.organisation}
                                    style={{ width: '75px' }}
                                />
                                <div className={styles.historyItemDetails}>
                                    <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                                    <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                                    <ul>{historyItem.experiences.map((experience, id) => {
                                        return <li key={id}>{experience}</li>
                                    })}</ul>
                                </div>
                            </li>
                        })
                    }
                </ul>
            </div>
        </section>
    );
};

export default Experience;