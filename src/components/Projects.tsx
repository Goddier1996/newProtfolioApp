import "../css/Projects.css";
import SelectTypeProject from "./SelectTypeProject";
import { Slide } from "react-awesome-reveal";

const Projects = () => {
  return (
    <>
      <div className="ContainerMyProjects" id="project">
        <Slide direction="right">
          <h1>
            My <span className="green">Projects</span>
          </h1>
          <p style={{fontSize:"12.5px"}}>
            Here all my projects ( Website , Apps , Python app , Arduino ).
            <br />
            Select a project and you can see Live app , Git link and info about
            project.
          </p>
        </Slide>

        <div>
          <SelectTypeProject />
        </div>
      </div>
    </>
  );
};

export default Projects;
