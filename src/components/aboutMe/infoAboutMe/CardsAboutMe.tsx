import "../AboutMe.css";
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

      
        {sizeWorldInDisc < 100 ? (
          <p>{info}</p>
        ) : (
          <>
            {showMore ? <p>{info}</p> : <p>{info.substring(0, 50)}</p>}
            <b onClick={() => setShowMore(!showMore)}>
              {showMore ? "Show less" : "Read more"}
            </b>
          </>
        )}
      
    </div>
  );
};


export default CardsAboutMe;