import { useState } from "react";
import SliderModelsProjects from "./SliderModelsProjects";
import SelectCategoryProject from "../Context/SelectCategoryProject";
import "../css/Projects.css";

const SelectTypeProject = () => {
  
  const selectTypeProject: string[] = ["Website", "App", "Python", "Arduino"];

  const [typeProject, setTypeProject] = useState<String>("");
  const value: any = { typeProject, setTypeProject };

  return (
    <>
      <div className="selectTypeProjectStyle">
        {selectTypeProject.map((value) => (
          <div key={value} className="styleTextType">
            <h6 onClick={() => setTypeProject(value)}>{value}</h6>
          </div>
        ))}
      </div>

      {/* here i can use props , but i use context for example */}
      <SelectCategoryProject.Provider value={value}>
        <SliderModelsProjects />
      </SelectCategoryProject.Provider>
    </>
  );
};

export default SelectTypeProject;
