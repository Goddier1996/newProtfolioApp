import { FetchData } from "../../../customHook/FetchData";
import { ObjectCustomHook, TypeMyProject } from "../../../interface/info.model";
import { useState, useEffect } from "react";



const ShowCountMyProjects: React.FC<TypeMyProject> = ({ typeProject }) => {


  // here use customHook to fetch animal data
  const [saveOpjDataSendToCustomHook, SetSaveOpjDataSendToCustomHook] =
    useState<ObjectCustomHook>({});
  const { dataProjects, loading } = FetchData(saveOpjDataSendToCustomHook);

  const [counterProjects, setCounterProjects] = useState<Number>();


  const loadingDataProjectsAndFilter = () => {
    SetSaveOpjDataSendToCustomHook({
      typeFetchData: "Projects",
    });

    let filtered = dataProjects.filter((user) =>
      user.type.includes(typeProject)
    );

    setCounterProjects(filtered.length);
  };


  useEffect(() => {
    loadingDataProjectsAndFilter();
  }, [dataProjects]);


  return (
    <>{!loading ? <b style={{ fontSize: "11px" }}>Load</b> : counterProjects}</>
  );
};


export default ShowCountMyProjects;