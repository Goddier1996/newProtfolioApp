import "../css/Projects.css";
import { AiOutlineGithub } from "react-icons/ai";
import { BsFillInfoSquareFill } from "react-icons/bs";
import { AiOutlineLink } from "react-icons/ai";
import Swal from "sweetalert2";

const CardProjectModel = (props: any) => {
  const { image, NameProject, Link, Git, type, Skils, About, video } =
    props.item;

  const ShowPopUpInfoApp = () => {
    Swal.fire({
      html: `<div>
                <div class="infoApp"><video controls autoplay loop muted playsinline src="${video}"></video></div>
                <br/><p>${About}</p>
                <br/><p>Skills : ${Skils}</p>
             </div>`,
      confirmButtonText: "Ok",
      confirmButtonColor: "#f9a51f",
    });
  };

  return (
    <div className="ContainerProject project">
      <img src={image} alt="project" />

      <div className="about">
        <div className="titleAndAbout">
          <p>{NameProject}</p>
        </div>

        {type === "Website" ? (
          <a href={Link}>
            <AiOutlineLink />
          </a>
        ) : (
          ""
        )}

        <a href={Git}>
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
