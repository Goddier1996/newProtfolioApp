import "../css/Projects.css";
import SelectTypeProject from "./SelectTypeProject";

const Projects = () => {
  return (
    <div className="ContainerMyProjects" id="project">
      <h1>
        My <span className="green">Projects</span>
      </h1>
      <p>
        Here all my projects ( Website , Apps , Python app , Arduino ).
        <br />
        Select a project and you can see Live app , Git link and info about
        project.
      </p>

      <div>
        <SelectTypeProject/>
      </div>
    </div>
  );
};

export default Projects;
