import { MySkills } from "../../../interface/info.model";
import LazyImage from "../../tools/LazyLoadImage/LazyImage";


const ShowSkills: React.FC<{
  value: MySkills;
}> = ({ value }) => {

  return (
    <div className="slide">
      <LazyImage src={value.image.asset.url} width={NaN} height={NaN} alt="skills" />
    </div>
  );
};


export default ShowSkills;