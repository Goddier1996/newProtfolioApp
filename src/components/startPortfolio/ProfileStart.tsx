import { AiOutlineGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { Slide } from "react-awesome-reveal";
import "./ProfileStart.css";
import LazyImage from "../tools/LazyLoadImage/LazyImage";
import Swal from "sweetalert2";



const ProfileStart: React.FC = () => {


  const numberMyCodeLine = () => {
    Swal.fire({
      html: `
      <div class="positionCertificate">
         <h6>Number code lines in my
            <span class="green">GitHub</span>
         </h6>
         <p class="infoCodeLine">Click on the image to see more info</p>
         <div class="positionImgCodeLine">
             <a aria-label="code line number" href="https://drive.google.com/file/d/1UHjUHwhFt7USDCRpUEF9ySIBh5Rn0p3V/view?usp=sharing">
             <img src="https://i.postimg.cc/h4p3dXpy/Screenshot-2024-04-04-185856.png" alt="line number"/>
             </a>
        </div>
      </div>`,
      confirmButtonColor: "green",
      confirmButtonText: "Close",
    });
  };



  return (
    <div className="ContainerProfileStart">
      <Slide direction="left">
        <div className="Texts">
          <h1 className="green">Artem Kot</h1>
          <h3>
            Software Engineer
            <br />
            <br />
            Expert In <b className="green">React Frameworks </b> &{" "}
            <b className="green">Server Technologies </b>
            Built A Portfolio Of 5+ Personal Projects
          </h3>
          <p>
            Creating the optimal blend of functionality & user experience in
            project development.
          </p>

          <div className="positionButtonAndLineGit">
            <div className="btn">
              <a aria-label="about me" href="#About">
                About Me
              </a>
            </div>

            <div
              className="countLineCodeGit"
              onClick={() => numberMyCodeLine()}
            >
              <LazyImage
                src="https://i.postimg.cc/hjpXkch0/line-code.webp"
                width={305}
                height={NaN}
                alt="code line git"
              />
            </div>
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