import projects from "../Data/projects.json"
import ProjectsCard from "./ProjectsCard";
import styles from "../../Components/Projects/Projects.module.css"


const Projects = () => {
console.log('Projects : ', projects);

    return (
        <section className={styles.container} id="projects">
            <h3 className={styles.title}>Projects</h3>
            <div className={styles.projects}>
                {
                    projects.map((project, id)=>{
                        return (
                           <ProjectsCard key={id} project={project}></ProjectsCard> 
                        )
                    })
                }
            </div>
        </section>
    );
};

export default Projects;