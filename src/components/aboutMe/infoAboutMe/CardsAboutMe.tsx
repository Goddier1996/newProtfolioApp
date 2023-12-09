import "../../../css/AboutMe.css";
import { useState } from "react";
import { InfoAboutMe } from "../../../interface/info.model";


const CardsAboutMe: React.FC<InfoAboutMe> = (props) => {


  const { Icon, info, title } = props;

  const [showMore, setShowMore] = useState<Boolean>(false);
  const sizeWorldInDisc: number = info.length;

  
  return (
    <div className="ContainerAboutMeCards">
      <span className="styleIconAboutMe">
        <Icon />
      </span>
      <h1>{title}</h1>

      <p>
        {sizeWorldInDisc < 100 ? (
          <p>{info}</p>
        ) : (
          <>
            {showMore ? info : `${info.substring(0, 100)}`}
            <b onClick={() => setShowMore(!showMore)}>
              {showMore ? "Show less" : "Show more"}
            </b>
          </>
        )}
      </p>
    </div>
  );
};


export default CardsAboutMe;