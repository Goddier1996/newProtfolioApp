import { useRef, useContext } from "react";
import Slider from "react-slick";
import Project from "./CardProjectModel";
import Projects from "../Json/projecrs.json";
import "../css/Projects.css";
import SelectCategoryProject from "../Context/SelectCategoryProject";

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

  return (
    <div className="ContainerSlider">
      <Slider ref={arrowRef} {...settings}>
        {Projects.filter((name) => name.type.includes(typeProject)).map(
          (value) => (
            <Project item={value} />
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
