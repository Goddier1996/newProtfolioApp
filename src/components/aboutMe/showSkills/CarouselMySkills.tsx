import "../AboutMe.css";
import ShowSkills from "./ShowSkills";
import { FetchData } from "../../../customHook/FetchData";



const CarouselMySkills: React.FC = () => {


  // here use customHook
  const { dataCarouselMySkills } = FetchData("CarouselMySkills", "");


  return (
    <div className="slider">
      <div className="slide-track">
        {dataCarouselMySkills.map((value) => (
          <div key={value.image.asset.url}>
            <ShowSkills value={value} />
          </div>
        ))}
      </div>
    </div>
  );
};


export default CarouselMySkills;