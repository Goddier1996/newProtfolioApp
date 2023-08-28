import { PiCodeThin } from "react-icons/pi";
import { BiLogoAdobe } from "react-icons/bi";
import { CgWebsite } from "react-icons/cg";
import Card from "./CardsAboutMe";
import { Slide } from "react-awesome-reveal";
import "../css/AboutMe.css";
import MyImage from "./MyImage";
import sanityClient from "../Sanity/client";
import { useEffect, useState } from "react";

const AboutMe = () => {


  const [infoAboutMe, setInfoAboutMe] = useState<any>([]);


  const loadingDataInfoAboutMe = async () => {
    await sanityClient
      .fetch(
        `*[_type=="info"]{
          title,
          info
    }`
      )
      .then((data) => setInfoAboutMe(data))
      .catch(console.error);
  };



  useEffect(() => {
    loadingDataInfoAboutMe();
  }, []);

  
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
          {infoAboutMe &&
            infoAboutMe.map((value: any) => (
              <Slide key={value} direction="right">
                <Card
                  Icon={
                    value.title == "Software Practical Engineer"
                      ? PiCodeThin
                      : value.title == "Web Developer + Mobile"
                      ? CgWebsite
                      : BiLogoAdobe
                  }
                  title={value.title}
                  info={value.info}
                />
              </Slide>
            ))}
        </div>
      </div>
    </>
  );
};

export default AboutMe;
