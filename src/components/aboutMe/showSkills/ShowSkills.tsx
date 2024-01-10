import { MySkills } from "../../../interface/info.model";


const ShowSkills: React.FC<{
  value: MySkills;
}> = ({ value }) => {

  return (
    <>
      <div className="slide">
        <img src={value.image.asset.url} alt="skills" />
      </div>
    </>
  );
};


export default ShowSkills;