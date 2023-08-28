import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import { Slide } from "react-awesome-reveal";
import CardRecommendations from "./CardRecommendations";
import "../css/Recommendations.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import sanityClient from "../Sanity/client";


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



const Recommendations = () => {


  const [recommendations, setRecommendations] = useState<any>([]);

  const arrowRef = useRef<any>(null);
  let lengthData = recommendations.length;

  const loadingDataRecommends = async () => {

    await sanityClient
      .fetch(
        `*[_type=="recommends"]{
      name,
      position,
      bio,
      image{
        asset->{
          _id,
          url
        },
      },
      
    }`
      )
      .then((data) => setRecommendations(data))
      .catch(console.error);
  };



  useEffect(() => {
    loadingDataRecommends();
  }, []);



  return (
    <div className="ContainerRecommendations" id="Recommendations">
      <Slide className="titleAboutRecommendations" direction="left">
        <span className="green">Recommendations</span>
        <h1>what say about me</h1>
      </Slide>
      <div className="Testimonials">
        <Slider ref={arrowRef} {...settings}>
          {recommendations &&
            recommendations.map((value: any) => (
              <div key={value}>
                <CardRecommendations item={value} />
              </div>
            ))}
        </Slider>


        {/* check if length Recommend was more 3 , and show Arrow next + back*/}
        {lengthData > 3 ? (
          <div className="Buttons">
            <button onClick={() => arrowRef.current.slickPrev()}>
              <IoIosArrowBack />
            </button>
            <button onClick={() => arrowRef.current.slickNext()}>
              <IoIosArrowForward />
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Recommendations;
