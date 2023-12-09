import { useEffect, useState } from "react";
import "../../../css/AboutMe.css";
import { GetMySkills } from "../../../Sanity/functionsFetchData";
import { MySkills } from "../../../interface/info.model";
import ShowSkills from "./ShowSkills";



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

          <ShowSkills value={value}/>
        ))}
      </div>
    </div>
  );
};


export default CarouselMySkills;