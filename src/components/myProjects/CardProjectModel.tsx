import "../../css/Projects.css";
import { AiOutlineGithub } from "react-icons/ai";
import { BsFillInfoSquareFill } from "react-icons/bs";
import { AiOutlineLink } from "react-icons/ai";
import Swal from "sweetalert2";
import { ShowMyProjects } from "../../interface/info.model";
import { AsyncImage } from 'loadable-image'
import { Zoom  } from 'transitions-kit'


const CardProjectModel: React.FC<ShowMyProjects> = (props) => {


  const { image, nameProject, link, git, type, skills, about, video } = props;

  
  const ShowPopUpInfoApp = () => {
    Swal.fire({
      html: `<div>
                <div class="infoApp"><video controls autoplay loop muted playsinline src="${video}"></video></div>
                <br/><p>${about}</p>
                <br/><p> <b class="highlight">Skills :</b> ${skills}</p>
             </div>`,
      confirmButtonText: "Ok",
      confirmButtonColor: "green",
    });
  };

  
  return (
    <div className="ContainerProject project">
      <AsyncImage
        src={image}
        style={{ width: "100%", height: "100%" }}
        Transition={Zoom }
        loader={<img src={require("../../images/11.webp") } />}
        alt="project"
      />
      <div className="about">
        <div className="titleAndAbout">
          <p>{nameProject}</p>
          
        </div>

        {type === "Website" ? (
          <a aria-label="link website" href={link}>
            <AiOutlineLink />
          </a>
        ) : (
          ""
        )}

        <a aria-label="git link" href={git}>
          <AiOutlineGithub />
        </a>

        <a aria-label="popup info"  onClick={ShowPopUpInfoApp}>
          <BsFillInfoSquareFill />
        </a>
      </div>
    </div>
  );
};

export default CardProjectModel;
