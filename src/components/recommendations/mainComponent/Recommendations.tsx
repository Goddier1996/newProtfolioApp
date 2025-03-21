import { useRef } from "react";
import Slider from "react-slick";
import CardRecommendations from "../modelRecommendations/CardRecommendations";
import "../Recommendations.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import ButtonNextBack from "../sliderNextBack/ButtonNextBack";
import { FetchData } from "../../../customHook/FetchData";
import Loading from "../../tools/loading/Loading";


// settings Slider
let settings = {
  dots: true,
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
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 530,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};


const Recommendations: React.FC = () => {


  const { dataRecommendations, loading } = FetchData("Recommendations", "");

  const arrowRef = useRef<any>(null);


  return (
    <div className="ContainerRecommendations">
      <div className="titleAboutRecommendations">
        <span className="green">Recommendations</span>
        <h1>what say about me</h1>
        <h6>
          I have{" "}
          <b className="green">
            {loading ? "Loading..." : dataRecommendations.length}
          </b>{" "}
          Recommendations
        </h6>
        </div>

      {loading ? (
        <Loading textLoading={"Recommendations"} />
      ) : (
        <div className="Testimonials">
            <Slider className="modelsShowCards" ref={arrowRef} {...settings}>
            {dataRecommendations.map((value) => (
              <div key={value.name}>
                <CardRecommendations
                  name={value.name}
                  position={value.position}
                  image={value.image}
                  bio={value.bio}
                  linkedin={value.linkedin}
                />
              </div>
            ))}
          </Slider>

          {/* check if length Recommend was more 3 , and show Arrow next + back*/}
          {dataRecommendations.length > 3 ? (
            <div className="Buttons">
              <ButtonNextBack
                click={() => arrowRef.current.slickPrev()}
                typeButton={"Prev"}
                typeIcon={<IoIosArrowBack />}
              />
              <ButtonNextBack
                click={() => arrowRef.current.slickNext()}
                typeButton={"Next"}
                typeIcon={<IoIosArrowForward />}
              />
            </div>
          ) : (
            ""
          )}
        </div>
      )}
    </div>
  );
};


export default Recommendations;