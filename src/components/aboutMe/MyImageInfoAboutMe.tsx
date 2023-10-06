import CarouselMySkills from "./CarouselMySkills";
import ShowMyEducation from "./ShowMyDiploma";


export const MyImageInfoAboutMe:React.FC = () => {

  return (
    <div className="miniInfoAboutMe">
      <p className="aboutMe">
        Hi, I'm a specialist Software Practical Engineer.
        <br /> creates a variety of projects , websites and applications and
        also creates algorithm and database software.
        <br /> I love my job in programming and challenging myself with new
        things,
        <b className="highlight">
          You can see a variety of different projects I've done in my portfolio
          or Github.
        </b>
        <br />
        ability to work in a group/independently.
        <br />
        learns new things in programming every day and also learns to deal with
        problems that exist during the creation of projects.
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
      </div>


    </div>
  );
};
