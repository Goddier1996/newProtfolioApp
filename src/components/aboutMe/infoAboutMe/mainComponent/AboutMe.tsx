import { PiCodeThin } from "react-icons/pi";
import { BiLogoAdobe } from "react-icons/bi";
import { CgWebsite } from "react-icons/cg";
import Card from "../modelsCardsAboutMe/CardsAboutMe";
import { Slide } from "react-awesome-reveal";
import "../../AboutMe.css";
import MyImage from "../MyImage";
import { useEffect, useState } from "react";
import { GetInfoAboutMe} from "../../../../Sanity/functionsFetchData";
import { InfoAboutMe } from "../../../../interface/info.model"


const AboutMe:React.FC = () => {


  const [infoAboutMe, setInfoAboutMe] = useState<InfoAboutMe[]>([]);


  const loadingDataInfoAboutMe = async () => {

    setInfoAboutMe(await GetInfoAboutMe());
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

          {infoAboutMe.map((value: any) => (
              <Slide key={value.title} direction="left">
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