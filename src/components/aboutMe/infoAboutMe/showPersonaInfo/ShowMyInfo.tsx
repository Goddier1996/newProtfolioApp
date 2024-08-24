import React, { useState } from "react";
import { InfoAboutMePersonal } from "../../../../interface/info.model";


const ShowMyInfo: React.FC<InfoAboutMePersonal> = (props) => {


  const { info } = props;
  const [showMoreWord, setShowMoreWord] = useState<Boolean>(false);
  const sizeWords: number = info.length;

  return (
    <>
      {sizeWords < 300 ? (
        <>{info}</>
      ) : (
        <>
          {showMoreWord ? info : `${info.substring(0, 300)}`}
          <b className="boldMoreInfo" onClick={() => setShowMoreWord(!showMoreWord)}>
            {showMoreWord ? " Show less" : " Read more"}
          </b>
        </>
      )}
    </>
  );
};


export default ShowMyInfo;