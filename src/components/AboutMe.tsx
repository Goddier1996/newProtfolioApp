import { PiCodeThin } from "react-icons/pi";
import { BiLogoAdobe } from "react-icons/bi";
import { CgWebsite } from "react-icons/cg";
import { TfiMobile } from "react-icons/tfi";
import Card from "./CardsAboutMe";
import { Slide } from "react-awesome-reveal";
import "../css/AboutMe.css";
import MyImage from "./MyImage";
import infoAboutMe from "../Json/infoAboutMe.json";

const AboutMe = () => {
  let lengthJsonFileInfoAboutMe: Number = infoAboutMe.length / 2;

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
          {infoAboutMe.map((value: any) => (
            <Slide
              key={value.id}
              direction={
                value.id <= lengthJsonFileInfoAboutMe ? "left" : "right"
              }
            >
              <Card
                Icon={
                  value.title == "Software Practical Engineer"
                    ? PiCodeThin
                    : value.title == "Full Stack Developer"
                    ? CgWebsite
                    : value.title == "Mobile"
                    ? TfiMobile
                    : BiLogoAdobe
                }
                title={value.title}
                disc={value.info}
              />
            </Slide>
          ))}
        </div>
      </div>
    </>
  );
};

export default AboutMe;
