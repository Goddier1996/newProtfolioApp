import "../css/AboutMe.css";
import Skills from "../Json/skils.json";

const CarouselMySkills = () => {
  return (
    <div className="slider">
      <div className="slide-track">
        {Skills.map((value) => (
          <div className="slide" key={value.id}>
            <img src={value.image} height="100" width="250" alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarouselMySkills;
