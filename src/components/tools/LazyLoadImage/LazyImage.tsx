import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { LazyImg } from "../../../interface/info.model";


const LazyImage: React.FC<LazyImg> = (props) => {

  return (
    <LazyLoadImage
      src={props.src}
      width={props.width ? props.width * 1 : ""}
      height={props.height ? props.height * 1 : ""}
      effect="blur"
      alt={props.alt}
    />
  );
};


export default LazyImage;