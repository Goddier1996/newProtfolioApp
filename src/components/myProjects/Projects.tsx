import "./Projects.css";
import SelectTypeProject from "./SelectTypeProject";
import { Slide } from "react-awesome-reveal";


const Projects:React.FC = () => {

  return (
    <div className="ContainerMyProjects" id="project">
      <Slide direction="left">
        <h1>
          My <span className="green">Projects</span>
        </h1>
        <p style={{ fontSize: "12px" }}>
          Here all my projects ( Website , Apps , Python app , Arduino ).
          <br />
          Select a project and you can see Live app , Git link and info.
        </p>
      </Slide>

      {/* here show mini menu select type to show project */}
      <SelectTypeProject />
    </div>
  );
};

export default Projects;
