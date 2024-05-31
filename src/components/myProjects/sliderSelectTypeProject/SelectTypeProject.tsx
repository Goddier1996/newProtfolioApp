import { useState } from "react";
import SliderModelsProjects from "./SliderModelsProjects";
import SelectCategoryProject from "../../../Context/SelectCategoryProject";
import "../Projects.css";
import ShowCountMyProjects from "../counterMyTypeProjects/ShowCountMyProjects";


const SelectTypeProject: React.FC = () => {

  const selectTypeProject: string[] = [
    "Website",
    "App",
    "Python",
    "Arduino",
    "Communication & Info Security",
  ];

  const [typeProject, setTypeProject] = useState<string>("");
  const value: any = { typeProject, setTypeProject };


  return (
    <>
      <div className="selectTypeProjectStyle">
        {selectTypeProject.map((value) => (
          <div
            key={value}
            className={
              value == "Communication & Info Security"
                ? "styleTextTypeCommunication"
                : "styleTextType"
            }
          >
            <h6 onClick={() => setTypeProject(value)}>
              {value} - <ShowCountMyProjects typeProject={value} />
            </h6>
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