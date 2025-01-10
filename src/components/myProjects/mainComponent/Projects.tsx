import "../Projects.css";
import SelectTypeProject from "../sliderSelectTypeProject/SelectTypeProject";
import { Slide } from "react-awesome-reveal";


const Projects: React.FC = () => {
  return (
    <div className="ContainerMyProjects">
      <Slide direction="left">
        <h1>
          My <span className="green">Projects</span>
        </h1>
        <br />
      </Slide>

      
      <Slide direction="left">
        {/* here show mini menu select type to show project */}
        <SelectTypeProject />
      </Slide>
    </div>
  );
};


export default Projects;