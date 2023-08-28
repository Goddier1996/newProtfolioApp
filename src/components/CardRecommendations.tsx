import { IoIosQuote } from "react-icons/io";
import "../css/Recommendations.css";
import { useState } from "react";
import { Slide } from "react-awesome-reveal";

const CardRecommendations = (props: any) => {
  
  const { name, position, image, bio } = props.item;
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
            {sizeWorldInDisc < 150 ? (
              <p>{bio}</p>
            ) : (
              <>
                {showMore ? bio : `${bio.substring(0, 150)}`}
                <b onClick={() => setShowMore(!showMore)}>
                  {showMore ? "Show less" : "Show more"}
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
