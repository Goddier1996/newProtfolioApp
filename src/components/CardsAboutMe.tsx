import "../css/AboutMe.css";
import { useState } from "react";

const CardsAboutMe = (props: any) => {
  const { Icon, disc, title } = props;

  const [showMore, setShowMore] = useState<Boolean>(false);
  const sizeWorldInDisc: any = disc.length;

  return (
    <div className="ContainerAboutMeCards">
      <span className="green">
        <Icon />
      </span>
      <h1>{title}</h1>

      <p>
        {sizeWorldInDisc < 100 ? (
          <p>{disc}</p>
        ) : (
          <>
            {showMore ? disc : `${disc.substring(0, 100)}`}
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
