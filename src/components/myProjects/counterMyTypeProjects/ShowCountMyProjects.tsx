import { FetchData } from "../../../customHook/FetchData";
import { TypeMyProject } from "../../../interface/info.model";


const ShowCountMyProjects: React.FC<TypeMyProject> = ({ typeProject }) => {


  // here use customHook
  const { dataProjects, loading } = FetchData("ProjectsCountFilterTypeProject", typeProject);


  return (
    <>
      {loading ? <b style={{ fontSize: "11px" }}>Load</b> : dataProjects.length}
    </>
  );
};


export default ShowCountMyProjects;