import PropTypes from 'prop-types';
import styles from  "../../Components/Projects/ProjectsCard.module.css"

const ProjectsCard = ({project}) => {
    const {imageSrc, title, description, skills, demo, source} = project;
    console.log('skills : ', skills);
    return (
    <div className={styles.container}>
        <img className={styles.Img} src={imageSrc} alt={title} />
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
            <ul className={styles.skills}>
                {
                    skills.map((skill, id)=>{
                        <li className={styles.skill} key={id}>{skill}</li>
                    })
                }
                
            </ul>
            <div className={styles.links}>
                <a className={styles.link} href={demo}>Demo</a>
                <a className={styles.link} href={source}>Source</a>
            </div>
    </div>
)
};

export default ProjectsCard;

ProjectsCard.propTypes = {
    project: PropTypes.object,

}