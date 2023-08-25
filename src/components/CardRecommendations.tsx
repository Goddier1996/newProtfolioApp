

import { IoIosQuote } from "react-icons/io";
import "../css/Recommendations.css";

const CardRecommendations = (props: any) => {
  const { name, position, img_url, disc } = props.item;

  return (
    <div className="ContainerRecommendationsCard">
      <div className="Header">
        <span className="quote">
          <IoIosQuote />
        </span>
      </div>
      <div className="FooterCard">
        <img src={img_url} alt={name} />
        <div className="details">
          <h1>{name}</h1>
          <p>{position}</p>
        </div>
      </div>

      <div className="BodyCard">{disc}</div>
    </div>
  );
};

export default CardRecommendations;