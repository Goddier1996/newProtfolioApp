import { AiOutlineGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { Slide } from "react-awesome-reveal";
import "./ProfileStart.css";
import LazyImage from "../tools/LazyLoadImage/LazyImage";


const ProfileStart: React.FC = () => {

  return (
    <div className="ContainerProfileStart">
      <Slide direction="left">
        <div className="Texts">
          <h1 className="green">Artem Kot</h1>
          <h3>
             Practical Software Engineering with focus on <b className="green">Frontend</b>
            <br />
            <br />
            experienced with <b className="green">React frameworks </b> &{" "}
            <b className="green">Server technologies </b> 
            Built a portfolio of 10+ personal projects
          </h3>
          <p>Creating a best functional & user experience at project's.</p>

          <div className="btn">
            <a aria-label="about me" href="#About">
              About Me
            </a>
          </div>

          <div className="Social">
            <p>Check out my</p>
            <div className="social-icons">
              <span>
                <a
                  aria-label="show im my git all my projects"
                  href="https://github.com/Goddier1996"
                >
                  <AiOutlineGithub />
                </a>
              </span>
              <span>
                <a
                  aria-label="connect to my linkedin"
                  href="https://www.linkedin.com/in/artem-kot96"
                >
                  <FaLinkedinIn />
                </a>
              </span>
            </div>
          </div>
        </div>

        <div className="Profile">
          <LazyImage
            src="https://i.postimg.cc/mgmYVb9R/a2.webp"
            width={250}
            height={NaN}
            alt="profile"
          />
        </div>
      </Slide>
    </div>
  );
};


export default ProfileStart;