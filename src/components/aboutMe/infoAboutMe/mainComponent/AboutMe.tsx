import { PiCodeThin } from "react-icons/pi";
import { BiLogoAdobe } from "react-icons/bi";
import { CgWebsite } from "react-icons/cg";
import Card from "../modelsCardsAboutMe/CardsAboutMe";
import { Slide } from "react-awesome-reveal";
import "../../AboutMe.css";
import MyImage from "../MyImage";
import { FetchData } from "../../../../customHook/FetchData";
import Loading from "../../../tools/loading/Loading";
import ShowGitHubCalendar from "../../reactGitHubCalendar/ShowGitHubCalendar";



const AboutMe: React.FC = () => {


  // here use customHook to fetch about cards data
  const { dataAboutMe, loading } = FetchData("AboutMe", "");
  

  return (
    <>
      <div className="ContainerAboutMe">
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
          {loading ?
            <Loading textLoading={"Cards About Me"} />
            :
            <>
            {dataAboutMe.map((value: any) => (
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
            </>    
        }
        </div>
      </div>
      
      {/* show my active in GitHub */}
      <Slide direction="left">
         <ShowGitHubCalendar/>
      </Slide>
    </>
  );
};


export default AboutMe;