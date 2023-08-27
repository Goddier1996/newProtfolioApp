import { MyImageInfoAboutMe } from "./MyImageInfoAboutMe";

const MyImage = () => {
  
  return (
    <div className="myImageStyle">
      <img src="https://i.postimg.cc/VLSJGdQw/artem.jpg" alt="my image" />
      <MyImageInfoAboutMe />
    </div>
  );
};

export default MyImage;
