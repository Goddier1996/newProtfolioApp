import { useRef } from "react";
import Slider from "react-slick";
import Project from "./CardProjectModel";
import Projects from "../Json/projecrs.json";
import "../css/Projects.css";
import { useContext } from "react";
import SelectCategoryProject from "../Context/SelectCategoryProject";

var settings = {
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

  const sizeWebsite: any = Projects.filter((Project) => {
    return Project.type === "Website";
  });

  const sizeAppsAndroid: any = Projects.filter((Project) => {
    return Project.type === "App Android";
  });

  const sizePythonApp: any = Projects.filter((Project) => {
    return Project.type === "Python";
  });

  const sizeArduinoApp: any = Projects.filter((Project) => {
    return Project.type === "Arduino";
  });

  return (
    <>
      {typeProject === "Website" ? (
        <p>Size web Project's - {sizeWebsite.length}</p>
      ) : typeProject === "App Android" ? (
        <p>Size App Android Project's - {sizeAppsAndroid.length}</p>
      ) : typeProject === "Python" ? (
        <p>Size Python Project's - {sizePythonApp.length}</p>
      ) : typeProject === "Arduino" ? (
        <p>Size Arduino Project's - {sizeArduinoApp.length}</p>
      ) : (
        ""
      )}

      <div className="ContainerSlider">
        <Slider ref={arrowRef} {...settings}>
          {Projects.filter((name) => name.type.includes(typeProject)).map(
            (value) => (
              <Project item={value} />
            )
          )}
        </Slider>

        <div className="buttonNextBack">
          <button
            onClick={() => arrowRef.current.slickPrev()}
            className="back"
          />
          <button
            onClick={() => arrowRef.current.slickNext()}
            className="next"
          />
        </div>
      </div>
    </>
  );
};

export default SliderModelsProjects;
