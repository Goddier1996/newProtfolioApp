import { createContext } from "react";

// default see all projects

const SelectCategoryProject = createContext({
  typeProject: "Website",
  setTypeProject: () => {},
});

export default SelectCategoryProject;
