import MyImageInfoAboutMe  from "./MyImageInfoAboutMe";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";


const MyImage:React.FC = () => {
  
  return (
    <div className="myImageStyle">
      <LazyLoadImage
            src={"https://i.postimg.cc/50PDddH7/artem.webp"}
            width={""}
            height={400}
            effect="blur"
            alt="my image"
      />
      
      <MyImageInfoAboutMe />
    </div>
  );
};


export default MyImage;