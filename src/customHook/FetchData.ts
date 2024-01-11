import { useEffect, useState } from 'react';
import { GetCertificate, GetInfoAboutMe, GetMySkills, GetProjects, GetRecommends, GetDiploma } from "../Sanity/functionsFetchData";
import { InfoAboutMe, ObjectCustomHook, MySkills, ShowMyProjects, Recommends, MyCertificate, MyDiploma } from "../interface/info.model";

  
export const FetchData = (funcFetchData:ObjectCustomHook) => {


    const [dataAboutMe, setDataAboutMe] = useState<InfoAboutMe[]>([]);
    const [dataCarouselMySkills, setDataCarouselMySkills] = useState<MySkills[]>([]);
    const [dataProjects, setDataProjects] = useState<ShowMyProjects[]>([]);
    const [dataRecommendations, setDataRecommendations] = useState<Recommends[]>([]);
    const [dataCertificates, setDataCertificates] = useState<MyCertificate[]>([]);
    const [dataDiploma, setDataDiploma] = useState<MyDiploma[]>([]);

    
    const [loading, setLoading] = useState<boolean>(false);
    // const [error, setError] = useState(null);


    const fetchData = () => {

        setLoading(true);

        switch (funcFetchData.typeFetchData) {
      
            case "AboutMe":
                GetInfoAboutMe()
                    .then((data) => setDataAboutMe(data))
                    .then(() => setLoading(false))
                    .catch((err) => setLoading(true))
                break;
            
            case "CarouselMySkills":
                GetMySkills()
                    .then((data) => setDataCarouselMySkills(data))
                    .then(() => setLoading(false))
                    .catch((err) => setLoading(true))
                break;
                       
            case "Projects":
                GetProjects()
                    .then((data) => setDataProjects(data))
                    .then(() => setLoading(false))
                    .catch((err) => setLoading(true))
                break;
            
            case "ProjectsCountFilterTypeProject":
                GetProjects()
                    .then((data) => setDataProjects(data.filter((user: any) =>
                        user.type.includes(funcFetchData.typeProject)
                    )))
                    .then(() => setLoading(false))
                    .catch((err) => setLoading(true))
                break;
            
            case "Recommendations":
                GetRecommends()
                    .then((data) => setDataRecommendations(data))
                    .then(() => setLoading(false))
                    .catch((err) => setLoading(true))
                break;
            
            case "Certificates":
                GetCertificate()
                    .then((data) => setDataCertificates(data))
                    .then(() => setLoading(false))
                    .catch((err) => setLoading(true))
                break;
            
            
            case "Diploma":
                GetDiploma()
                    .then((data) => setDataDiploma(data))
                    .then(() => setLoading(false))
                    .catch((err) => setLoading(true))
                break;
            
          default:
            // setError(`${error} Could not Fetch Data `);
            setLoading(true);
        }
      };

    useEffect(() => {
        
        fetchData();
    },[funcFetchData])

    return { dataAboutMe, dataCarouselMySkills, dataProjects, dataRecommendations, dataCertificates, dataDiploma, loading };
}