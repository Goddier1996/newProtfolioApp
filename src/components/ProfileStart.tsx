import { AiOutlineGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { Slide } from "react-awesome-reveal";
import "../css/ProfileStart.css";

const ProfileStart = () => {
  
  return (
    <div className="ContainerProfileStart">
      <Slide direction="left">
        <div className="Texts">
          <h4>
            Hi <span className="green">There...</span>
          </h4>
          <h1 className="green">Artem Kot</h1>
          <h3>
          Web Developer | Software Practical Engineer
            <br />
            Ready For Any Challenge 🚀
          </h3>
          <p>
            Create Websites And Also Applications For Mobile. And In Addition
            Creates Algorithm Software, And A Database..
          </p>

          <div className="btn">
            <a href="#About">About Me</a>
          </div>

          <div className="Social">
            <p>Check out my</p>
            <div className="social-icons">
              <span>
                <a href="https://github.com/Goddier1996" aria-label="show im my git all my projects">
                  <AiOutlineGithub />
                </a>
              </span>
              <span>
                <a href="https://www.linkedin.com/in/artem-kot96" aria-label="connect to my linkedin">
                  <FaLinkedinIn />
                </a>
              </span>
            </div>
          </div>
        </div>
      </Slide>
      <Slide direction="right">
        <div className="Profile">
          <img src="https://i.postimg.cc/MTCzWm3W/p1.webp" alt="profile" />
        </div>
      </Slide>
    </div>
  );
};

export default ProfileStart;
