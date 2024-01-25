import { IoIosQuote } from "react-icons/io";
import "../Recommendations.css";
import { useState } from "react";
import { Slide } from "react-awesome-reveal";
import { Recommends } from "../../../interface/info.model";
import LazyImage from "../../tools/LazyLoadImage/LazyImage";



const CardRecommendations: React.FC<Recommends> = (props) => {


  const { name, position, image, bio } = props;
  const [showMoreBio, setShowMoreBio] = useState<Boolean>(false);
  const [showMorePosition, setShowMorePosition] = useState<Boolean>(false);

  const sizeBio: number = bio.length;
  const sizePosition: number = position.length;



  return (
    <Slide direction="down">
      <div className="ContainerRecommendationsCard">
        <div className="Header">
          <span className="quote">
            <IoIosQuote />
          </span>
        </div>
        <div className="FooterCard">
          <LazyImage src={image.asset.url} width={64} height={64} alt="Logo" />
          <div className="details">
            <h1>{name}</h1>
            <p>
              {sizePosition < 50 ? (
                <>{position}</>
              ) : (
                <>
                  {showMorePosition ? position : `${position.substring(0, 40)}`}

                  <b onClick={() => setShowMorePosition(!showMorePosition)}>
                    {showMorePosition ? "Show Less" : "Read More"}
                  </b>
                </>
              )}
            </p>
          </div>
        </div>

        <div className="BodyCard">
          <p>
            {sizeBio < 140 ? (
              <>{bio}</>
            ) : (
              <>
                {showMoreBio ? bio : `${bio.substring(0, 140)}`}

                <b onClick={() => setShowMoreBio(!showMoreBio)}>
                  {showMoreBio ? "Show Less" : "Read More"}
                </b>
              </>
            )}
          </p>
        </div>
      </div>
    </Slide>
  );
};


export default CardRecommendations;