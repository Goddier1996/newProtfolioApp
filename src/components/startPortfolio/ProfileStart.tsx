import { Slide } from "react-awesome-reveal";
import "./ProfileStart.css";
import LazyImage from "../tools/LazyLoadImage/LazyImage";
import Swal from "sweetalert2";
import SocialMyData from "./showSocialMyData/SocialMyData";


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
            Software Engineer | Actively{" "}
            <b className="green">Looking For Work</b>
            <br />
            <br />
            Expert In <b className="green">Web Technologies </b> &{" "}
            <b className="green">Writing efficient code </b>
            Built A Portfolio Of 10+ Personal Projects
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

            {/* <div
              className="countLineCodeGit"
              onClick={() => numberMyCodeLine()}
            >
              <LazyImage
                src="https://i.postimg.cc/hjpXkch0/line-code.webp"
                width={270}
                height={NaN}
                alt="code line git"
              />
            </div> */}
          </div>

          <div className="Social">
            <p>Check out my</p>
            <div className="social-icons">
              <SocialMyData
                ariaLabel="show im my git all my projects"
                hrefSocial="https://github.com/Goddier1996"
                typeSocial="github"
              />

              <SocialMyData
                ariaLabel="connect to my linkedin"
                hrefSocial="https://www.linkedin.com/in/artem-kot96"
                typeSocial="linkedin"
              />

              <SocialMyData
                ariaLabel="connect to my Instagram"
                hrefSocial="https://www.instagram.com/artem_kot96"
                typeSocial="instagram"
              />
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