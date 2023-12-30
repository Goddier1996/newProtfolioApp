import { IoIosQuote } from "react-icons/io";
import "../Recommendations.css";
import { useState } from "react";
import { Slide } from "react-awesome-reveal";
import {Recommends} from "../../../interface/info.model"


const CardRecommendations:React.FC<Recommends> = (props) => {
  
  const { name, position, image, bio } = props;
  const [showMore, setShowMore] = useState<Boolean>(false);


  const sizeWorldInDisc: any = bio.length;


  return (
    <Slide direction="down">
      <div className="ContainerRecommendationsCard">
        <div className="Header">
          <span className="quote">
            <IoIosQuote />
          </span>
        </div>
        <div className="FooterCard">
          <img src={image.asset.url} alt={name} />
          <div className="details">
            <h1>{name}</h1>
            <p>{position}</p>
          </div>
        </div>

        <div className="BodyCard">
          <p>
            {sizeWorldInDisc < 140 ? (
              <>{bio}</>
            ) : (
              <>
                {showMore ? bio : `${bio.substring(0, 140)}`}
                  
                <b onClick={() => setShowMore(!showMore)}>
                  {showMore ? "Show Less" : "Read More"}
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