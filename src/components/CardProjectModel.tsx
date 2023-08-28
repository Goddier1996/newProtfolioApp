import "../css/Projects.css";
import { AiOutlineGithub } from "react-icons/ai";
import { BsFillInfoSquareFill } from "react-icons/bs";
import { AiOutlineLink } from "react-icons/ai";
import Swal from "sweetalert2";

const CardProjectModel = (props: any) => {

  const { image, nameProject, link, git, type, skills, about, video } =
    props.item;

  
  const ShowPopUpInfoApp = () => {
    Swal.fire({
      html: `<div>
                <div class="infoApp"><video controls autoplay loop muted playsinline src="${video}"></video></div>
                <br/><p>${about}</p>
                <br/><p> <b class="highlight">Skills :</b> ${skills}</p>
             </div>`,
      confirmButtonText: "Ok",
      confirmButtonColor: "#82b5bd",
    });
  };

  
  return (
    <div className="ContainerProject project">
      <img src={image} alt="project" />

      <div className="about">
        <div className="titleAndAbout">
          <p>{nameProject}</p>
        </div>

        {type === "Website" ? (
          <a href={link}>
            <AiOutlineLink />
          </a>
        ) : (
          ""
        )}

        <a href={git}>
          <AiOutlineGithub />
        </a>

        <a onClick={ShowPopUpInfoApp}>
          <BsFillInfoSquareFill />
        </a>
      </div>
    </div>
  );
};

export default CardProjectModel;
