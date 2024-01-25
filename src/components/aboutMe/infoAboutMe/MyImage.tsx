import MyImageInfoAboutMe from "./MyImageInfoAboutMe";
import LazyImage from "../../tools/LazyLoadImage/LazyImage";



const MyImage: React.FC = () => {

  return (
    <div className="myImageStyle">

      <LazyImage
        src="https://i.postimg.cc/50PDddH7/artem.webp"
        width={NaN}
        height={400}
        alt="my image"
      />

      <MyImageInfoAboutMe />
    </div>
  );
};


export default MyImage;