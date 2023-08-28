import { useRef, useContext, useState, useEffect } from "react";
import Slider from "react-slick";
import Project from "./CardProjectModel";
import "../css/Projects.css";
import SelectCategoryProject from "../Context/SelectCategoryProject";
import { GetProjects}from "../Sanity/functionsFetchData"


// this settings for Slider
let settings = {
  className: "center",
  centerMode: true,
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  arrows: false,
  responsive: [
    {
      breakpoint: 990,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        centerMode: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
        centerMode: false,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
      },
    },
  ],
};



const SliderModelsProjects = () => {

  const arrowRef = useRef<any>(null);

  const { typeProject } = useContext(SelectCategoryProject);

  const [projects, setProjects] = useState<any>([]);


  const loadingDataProjects = async () => {

    setProjects(await GetProjects());
  };


  
  useEffect(() => {
    loadingDataProjects();
  }, []);



  return (
    <div className="ContainerSlider">
      <Slider ref={arrowRef} {...settings}>
        {projects.filter((name:any) => name.type.includes(typeProject)).map(
          (value:any) => (
            <div key={value.id}>
               <Project item={value} />
            </div>
          )
        )}
      </Slider>

      <div className="buttonNextBack">
        <button onClick={() => arrowRef.current.slickPrev()} className="back" />
        <button onClick={() => arrowRef.current.slickNext()} className="next" />
      </div>
    </div>
  );
};

export default SliderModelsProjects;
