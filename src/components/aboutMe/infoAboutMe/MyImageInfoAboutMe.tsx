import CarouselMySkills from "../showSkills/CarouselMySkills";
import ShowInfoAboutMe from "./ShowInfoAboutMe";

const MyImageInfoAboutMe: React.FC = () => {


  return (
    <div className="miniInfoAboutMe">

      {/* show text info about me */}
      <ShowInfoAboutMe/>

      {/* here show carousel all my skills */}
      <CarouselMySkills />
    </div>
  );
};


export default MyImageInfoAboutMe;