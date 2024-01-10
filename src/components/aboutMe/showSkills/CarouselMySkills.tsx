import { useEffect, useState } from "react";
import "../AboutMe.css";
import { ObjectCustomHook } from "../../../interface/info.model";
import ShowSkills from "./ShowSkills";
import { FetchData } from "../../../customHook/FetchData";

const CarouselMySkills: React.FC = () => {


  // here use customHook to fetch animal data
  const [saveOpjDataSendToCustomHook, SetSaveOpjDataSendToCustomHook] =
    useState<ObjectCustomHook>({});
  const { dataCarouselMySkills } = FetchData(saveOpjDataSendToCustomHook);


  const loadingDataSkills = () => {
    SetSaveOpjDataSendToCustomHook({
      typeFetchData: "CarouselMySkills",
    });
  };


  useEffect(() => {
    loadingDataSkills();
  }, []);


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