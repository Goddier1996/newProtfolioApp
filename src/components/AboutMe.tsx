import { PiCodeThin } from "react-icons/pi";
import { BiLogoAdobe } from "react-icons/bi";
import { CgWebsite } from "react-icons/cg";
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
          <h1>
            About <span className="green">Me</span>
          </h1>
        </Slide>

        {/* here show my image,and in component MyImage use other component to show mini info about me */}
        <Slide direction="left">
          <MyImage />
        </Slide>

        {/* here show cards data */}
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
                    : value.title == "Web Developer + Mobile"
                    ? CgWebsite
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
