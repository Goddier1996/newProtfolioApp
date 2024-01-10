import { FetchData } from "../../../customHook/FetchData";
import { ObjectCustomHook, TypeMyProject } from "../../../interface/info.model";
import { useState, useEffect } from "react";

const ShowCountMyProjects: React.FC<TypeMyProject> = ({ typeProject }) => {


  // here use customHook to fetch animal data
  const [saveOpjDataSendToCustomHook, SetSaveOpjDataSendToCustomHook] =
    useState<ObjectCustomHook>({});
  const { dataProjects, loading } = FetchData(saveOpjDataSendToCustomHook);


  const loadingDataProjectsAndFilter = () => {
    SetSaveOpjDataSendToCustomHook({
      typeFetchData: "ProjectsCountFilterTypeProject",
      typeProject: typeProject,
    });
  };


  useEffect(() => {
    loadingDataProjectsAndFilter();
  }, []);


  return (
    <>
      {loading ? <b style={{ fontSize: "11px" }}>Load</b> : dataProjects.length}
    </>
  );
};


export default ShowCountMyProjects;