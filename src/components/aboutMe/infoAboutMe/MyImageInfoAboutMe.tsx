import CarouselMySkills from "../showSkills/CarouselMySkills";
import ShowMyCertificate from "../MyDiplomaAndCertificate/ShowMyCertificate";
import ShowMyEducation from "../MyDiplomaAndCertificate/ShowMyDiploma";


export const MyImageInfoAboutMe:React.FC = () => {

  return (
    <div className="miniInfoAboutMe">
      <p className="aboutMe">
         i"m a Frontend Developer Specializing in React frameworks and a strong understanding server side (backend) Node.js, Database..
        <br />
         I am Highly Skilled with high performance capabilities and high achievements, have experience developing complex projects web site and apps.
        <br />
        Possess a strong passion for developing ideas from scratch while being organized and motivated by challenges. Has the ability to self-learn new technologies.
        <br />
        ability to work in a group / independently.
        <br />
        learns new things in programming every day and also learns to deal with
        problems that exist during the creation of projects.
        <br />
        For me, development is like a computer game 🎮.
        <br />{" "}
        <b className="highlight">
          My hobbies : (gamer , following new technologies , cars , lego , and
          traveling to a variety of beautiful places in the world).
        </b>
      </p>

      {/* here show carousel all my skills */}
      <CarouselMySkills />
      

      {/* here show my education diploma and course */}
      <div className="styleButtonEducation">
        <ShowMyEducation />
        <ShowMyCertificate/>
      </div>

    </div>
  );
};
