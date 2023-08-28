import { useEffect, useState } from "react";
import "../css/AboutMe.css";
import sanityClient from "../Sanity/client";


const CarouselMySkills = () => {

  const [skills, setSkills] = useState<any>([]);

  const loadingDataSkills = async () => {
    await sanityClient
      .fetch(
        `*[_type=="skills"]{
          title,
      image{
        asset->{
          _id,
          url
        },
      },
      
    }`
      )
      .then((data) => setSkills(data))
      .catch(console.error);
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
