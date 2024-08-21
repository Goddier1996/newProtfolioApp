import { Slide } from "react-awesome-reveal";
import "./ProfileStart.css";
import LazyImage from "../tools/LazyLoadImage/LazyImage";
import Swal from "sweetalert2";
import SocialMyData from "./showSocialMyData/SocialMyData";



const ProfileStart: React.FC = () => {


  const positionPostSearch = () => {
    Swal.fire({
      html: `
      <div class="positionPostJob">
         <h6>Last post about my
            <span class="green"> job search</span>
         </h6>
         <p class="infoCodeLine">I am looking for a warm house (job)
         <br/>
         Click on the LinkedIn icon 
         </p>
         <div class="positionPostSearch">
             <a aria-label="postSearch" href="https://www.linkedin.com/posts/artem-kot96_opentowork-acraclacsacgabracsacpacpadd-adaadeaclacpacpaddacoabracyadeachacladgabrackacjacjacpadg-activity-7230833688920432640-xoJw?utm_source=share&utm_medium=member_desktop">
             <img src="https://i.postimg.cc/Dfj6fGqw/linkedin-my.webp" alt="linkedin post"/>
             </a>
        </div>

        <div class="haveAProblemSeePostJob">
              <p>* If icon don't work click to the link</p>
              <a aria-label="postSearch" href="https://www.linkedin.com/posts/artem-kot96_opentowork-acraclacsacgabracsacpacpadd-adaadeaclacpacpaddacoabracyadeachacladgabrackacjacjacpadg-activity-7230833688920432640-xoJw?utm_source=share&utm_medium=member_desktop">
                Link Job Post
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

            <div
              className="postSearch"
              onClick={() => positionPostSearch()}
            >
              <LazyImage
                src="https://i.postimg.cc/dQn7vGZN/job-search.png"
                width={95}
                height={NaN}
                alt="post search work in linkedin"
              />
            </div>
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