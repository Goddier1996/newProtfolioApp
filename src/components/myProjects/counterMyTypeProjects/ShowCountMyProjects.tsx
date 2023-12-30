import { GetProjects } from "../../../Sanity/functionsFetchData";
import { ShowMyProjects , TypeMyProject } from "../../../interface/info.model";
import { useState, useEffect } from "react";


const ShowCountMyProjects: React.FC<TypeMyProject> = ({ typeProject }) => {


  const [projects, setProjects] = useState<ShowMyProjects[]>([]);
  const [counterProjects, setCounterProjects] = useState<Number>();


  const loadingDataProjects = async () => {
    setProjects(await GetProjects());

    let filtered = projects.filter((user) =>
      user.type.includes(typeProject)
    );
    
     setCounterProjects(filtered.length);
  };



  useEffect(() => {
    loadingDataProjects();
  }, [counterProjects]);



  return (
    <>
      {counterProjects}
    </>
  ) 
  
};


export default ShowCountMyProjects;