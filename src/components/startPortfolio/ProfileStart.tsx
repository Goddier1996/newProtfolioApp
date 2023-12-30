import { AiOutlineGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { Slide } from "react-awesome-reveal";
import "./ProfileStart.css";



const ProfileStart:React.FC = () => {
  
  return (
    <div className="ContainerProfileStart">
      <Slide direction="left">
        <div className="Texts">
          <h4>
            Hi <span className="green">There...</span>
          </h4>
          <h1 className="green">Artem Kot</h1>
          <h3>
            Front End Developer
            <br />
            <br/>
            Expert in <b className="green">React</b> and <b className="green">Server side technologies</b> (Node.js, Database) Ready For Any Challenge 🚀
          </h3>
          <p>
          Built a portfolio of 10+ personal projects to hone my skill.
          </p>

          <div className="btn">
            <a aria-label="about me" href="#About">About Me</a>
          </div>

          <div className="Social">
            <p>Check out my</p>
            <div className="social-icons">
              <span>
                <a aria-label="show im my git all my projects" href="https://github.com/Goddier1996">
                  <AiOutlineGithub />
                </a>
              </span>
              <span>
                <a aria-label="connect to my linkedin" href="https://www.linkedin.com/in/artem-kot96">
                  <FaLinkedinIn />
                </a>
              </span>
            </div>
          </div>
        </div>
        <div className="Profile">
          <img src="https://i.postimg.cc/MTCzWm3W/p1.webp" alt="profile" />
        </div>
      </Slide>
    </div>
  );
};


export default ProfileStart;