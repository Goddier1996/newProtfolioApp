import { PiCodeThin } from "react-icons/pi";
import { BiLogoAdobe } from "react-icons/bi";
import { CgWebsite } from "react-icons/cg";
import { TfiMobile } from "react-icons/tfi";
import Card from "./CardsAboutMe";
import { Slide } from "react-awesome-reveal";
import "../css/AboutMe.css";
import CarouselMySkills from "./CarouselMySkills";
import MyImage from "./MyImage";

const AboutMe = () => {
  return (
    <>
      <div className="ContainerAboutMe" id="About">
        <Slide direction="down">
          <h4>
            About <span className="green">Me</span>
          </h4>
          <h1>What I Do</h1>
        </Slide>

        <Slide direction="left">
          <MyImage />
        </Slide>

        <div className="CardsAboutMe">
          <Slide direction="left">
            <Card
              Icon={PiCodeThin}
              title={"Software Practical Enginee"}
              disc={`
            Learn in Shenkar - Engineering. Design. Art.
            specialized in 
            data structures
            - OOP concepts
            - Full-Stack Development & mobile
            - Database
            - Algorithm `}
            />
          </Slide>
          <Slide direction="left">
            <Card
              Icon={CgWebsite}
              title={"Full Stack Developer"}
              disc={`With a strong inclination towards Full Stack Developer. 
            Possess a strong passion for developing ideas from scratch while being organized and motivated by challenges.
             Has the ability to self-learn new technologies.
             Has a solid background in React, JavaScript , TypeScript, NodeJS , DataBase and other technologies⚒️`}
            />
          </Slide>
          <Slide direction="right">
            <Card
              Icon={TfiMobile}
              title={"Mobile"}
              disc={` Has the ability to create an application in technologies
          React Native - Android`}
            />
          </Slide>
          <Slide direction="right">
            <Card
              Icon={BiLogoAdobe}
              title={"UX / UI"}
              disc={`Has a broad background in web design and applications.
                      Improving user experience`}
            />
          </Slide>
        </div>

        <Slide direction="up">
          <CarouselMySkills />
        </Slide>
      </div>
    </>
  );
};

export default AboutMe;
