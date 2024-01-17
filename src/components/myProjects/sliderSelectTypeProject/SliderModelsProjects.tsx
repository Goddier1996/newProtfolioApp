import { useRef, useContext } from "react";
import Slider from "react-slick";
import Project from "../showModelProjects/CardProjectModel";
import "../Projects.css";
import SelectCategoryProject from "../../../Context/SelectCategoryProject";
import ButtonNextBackProjects from "./ButtonNextBackProjects";
import { FetchData } from "../../../customHook/FetchData";
import Loading from "../../tools/loading/Loading";


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


const SliderModelsProjects: React.FC = () => {


  const arrowRef = useRef<any>(null);

  const { typeProject } = useContext(SelectCategoryProject);

  const { dataProjects, loading } = FetchData("Projects", "");

  
  return (
    <div className="ContainerSlider">
      {loading ? (
        <Loading textLoading={"Project's"} />
      ) : (
        <>
          <Slider ref={arrowRef} {...settings}>
            {dataProjects
              .filter((name) =>
                name.type.includes(typeProject == "" ? "Website" : typeProject)
              )
              .sort((a, b) => (b.nameProject > a.nameProject ? -1 : 1))
              .map((value) => (
                <div key={value.nameProject}>
                  <Project
                    type={value.type}
                    image={value.image}
                    nameProject={value.nameProject}
                    skills={value.skills}
                    link={value.link}
                    git={value.git}
                    about={value.about}
                    video={value.video}
                  />
                </div>
              ))}
          </Slider>

          <div className="buttonNextBack">
            <ButtonNextBackProjects
              type={"Prev"}
              Click={() => arrowRef.current.slickPrev()}
              typeClassName={"back"}
            />
            <ButtonNextBackProjects
              type={"Next"}
              Click={() => arrowRef.current.slickNext()}
              typeClassName={"next"}
            />
          </div>
        </>
      )}
    </div>
  );
};


export default SliderModelsProjects;