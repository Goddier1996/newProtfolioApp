import { SocialData } from "../../../interface/info.model";
import { AiOutlineGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";


const SocialMyData: React.FC<SocialData> = (props) => {

  return (
    <span>
      <a aria-label={props.ariaLabel} href={props.hrefSocial}>
        {props.typeSocial == "github" ? (
          <AiOutlineGithub />
        ) : props.typeSocial == "linkedin" ? (
          <FaLinkedinIn />
        ) : props.typeSocial == "instagram" ? (
          <FaInstagram />
        ) : null}
      </a>
    </span>
  );
};


export default SocialMyData;