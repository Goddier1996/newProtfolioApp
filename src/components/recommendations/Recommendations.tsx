import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import { Slide } from "react-awesome-reveal";
import CardRecommendations from "./CardRecommendations";
import "./Recommendations.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { GetRecommends } from "../../Sanity/functionsFetchData";
import {Recommends} from "../../interface/info.model"
import ButtonNextBack from "./ButtonNextBack";


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


const Recommendations:React.FC = () => {


  const [recommendations, setRecommendations] = useState<Recommends[]>([]);

  const arrowRef = useRef<any>(null);
  let lengthData:number = recommendations.length;


  const loadingDataRecommends = async () => {
    
    setRecommendations(await GetRecommends());
  };


  useEffect(() => {
    loadingDataRecommends();
  }, []);


  return (
    <div className="ContainerRecommendations" id="Recommendations">
      <Slide className="titleAboutRecommendations" direction="left">
        <span className="green">Recommendations</span>
        <h1>what say about me</h1>
        <h6>I have <b className="green">{recommendations.length}</b> Recommendations</h6>
      </Slide>
      <div className="Testimonials">

        <Slider className="modelsShowCards" ref={arrowRef} {...settings}>
          {recommendations.map((value) => (
              <div key={value.name}>
                <CardRecommendations name={value.name} position={value.position} image={value.image} bio={value.bio}/>
              </div>
            ))}
        </Slider>

        {/* check if length Recommend was more 3 , and show Arrow next + back*/}
        {lengthData > 3 ? (
          <div className="Buttons">
            <ButtonNextBack click={() => arrowRef.current.slickPrev()} typeButton={"Prev"} typeIcon={<IoIosArrowBack />} />
            <ButtonNextBack click={() => arrowRef.current.slickNext()} typeButton={"Next"} typeIcon={<IoIosArrowForward />}/>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};


export default Recommendations;