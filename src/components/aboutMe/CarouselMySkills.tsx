import { useEffect, useState } from "react";
import "../../css/AboutMe.css";
import { GetMySkills } from "../../Sanity/functionsFetchData";
import { MySkills } from "../../interface/info.model";



const CarouselMySkills: React.FC = () => {

  const [skills, setSkills] = useState<MySkills[]>([]);


  const loadingDataSkills = async () => {
    setSkills(await GetMySkills());
  };


  useEffect(() => {
    loadingDataSkills();
  }, []);


  return (
    <div className="slider">
      <div className="slide-track">
        {skills.map((value: any) => (
          <div className="slide" key={value}>
            <img src={value.image.asset.url} alt="skills" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarouselMySkills;
