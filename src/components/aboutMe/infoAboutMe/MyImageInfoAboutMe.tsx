import CarouselMySkills from "../showSkills/CarouselMySkills";
// import ShowMyCertificate from "../MyDiplomaAndCertificate/ShowMyCertificate";
// import ShowMyEducation from "../MyDiplomaAndCertificate/ShowMyDiploma";
// import ShowMyCV from "../myCV/ShowMyCV";
import ShowInfoAboutMe from "./ShowInfoAboutMe";



const MyImageInfoAboutMe: React.FC = () => {


  return (
    <div className="miniInfoAboutMe">

      {/* show text info about me */}
      <ShowInfoAboutMe/>

      {/* here show carousel all my skills */}
      <CarouselMySkills />

      {/* here show my education diploma and course */}
      {/* <div className="styleButtonEducation">
        <ShowMyEducation />
        <ShowMyCertificate />
      </div> */}

      {/* show my CV */}
      {/* <ShowMyCV /> */}

    </div>
  );
};


export default MyImageInfoAboutMe;