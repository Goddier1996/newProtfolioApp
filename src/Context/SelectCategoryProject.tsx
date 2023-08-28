import { createContext } from "react";

// default see all projects
const SelectCategoryProject = createContext({
  typeProject: "",
  setTypeProject: () => {},
});

export default SelectCategoryProject;
