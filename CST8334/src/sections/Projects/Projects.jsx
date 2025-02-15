import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/viberr.png';
import server from '../../assets/windows_server.jpg'
import lockdoor from '../../assets/door_lock.png';
import voting from '../../assets/evm.png';
import sw from '../../assets/cisco_sw.jpg';
import freshBurger from '../../assets/fresh-burger.png';
import hipsster from '../../assets/hipsster.png';
import fitLift from '../../assets/fitlift.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={server}
          link="https://github.com/PratapSinghDarjee/Window_Servers-2012-r2-Installation-steps"
          h3="Window Server 2012 r2"
          p="Window Server installtaion and setting Steps"
        />
        <ProjectCard
          src={sw}
          link="https://github.com/PratapSinghDarjee/Basic-cisco-switch-configuration"
          h3="Basics cisco commands"
          p="The cisco command for the beginners"
        />
        <ProjectCard
          src={lockdoor}
          link="https://github.com/PratapSinghDarjee/Password-Protected-Door-System-Using-Arduino"
          h3="Automatic door lock"
          p="The automatic door locking system using Aurdino"
        />
        <ProjectCard
          src={voting}
          link="https://github.com/PratapSinghDarjee/Electro_Voting_Machine-Using-Arduino-Atmega-2560"
          h3="Electronic Voting Machine"
          p="The EVM is develop using arduino MC Atmega 2560"
        />
      </div>
    </section>
  );
}

export default Projects;