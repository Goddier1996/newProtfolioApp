import "../css/AboutMe.css";
import { useState } from "react";

const CardsAboutMe = (props: any) => {
  
  const { Icon, info, title } = props;

  const [showMore, setShowMore] = useState<Boolean>(false);
  const sizeWorldInDisc: any = info.length;

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
