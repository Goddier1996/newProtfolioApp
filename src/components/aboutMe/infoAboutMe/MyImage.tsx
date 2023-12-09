import MyImageInfoAboutMe  from "./MyImageInfoAboutMe";


const MyImage:React.FC = () => {
  
  return (
    <div className="myImageStyle">
      <img src="https://i.postimg.cc/50PDddH7/artem.webp" alt="my image" />
      <MyImageInfoAboutMe />
    </div>
  );
};


export default MyImage;