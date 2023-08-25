import { createContext } from "react";

// default select website

const SelectCategoryProject = createContext({
  typeProject: "Website",
  setTypeProject: () => {},
});

export default SelectCategoryProject;
