import Swal from "sweetalert2";
import "../AboutMe.css";
import { MyCertificate } from "../../../interface/info.model";
import { FetchData } from "../../../customHook/FetchData";



const ShowMyCertificate = () => {


  // customHook
  const { dataCertificates, loading } = FetchData("Certificates", "");

  
  const showAllDataMyCertificate = (arr: Array<MyCertificate>) => {
    let optionItems: string = "";

    arr.forEach((item: MyCertificate) => {
      {
        loading
          ? (optionItems = `<div class="center-body">
                <div class="loader-circle-48"></div>
                <p>Loading Certificate's</p>
             </div>`)
          : (optionItems += `
        <div class="positionImgCertificate">
           <div class="imgCertificate">
             <a aria-label="show my Certificate" href=${item.title}>
             <img src=${item.image.asset.url}/>
             </a>
           </div>
        </div>`);
      }
    });

    return optionItems;
  };


  const showPopUpMyCertificates = () => {
    Swal.fire({
      html: `
      <div class="positionCertificate">
         <h6>Select Certificate to See
            <span class="green">More info</span>
         </h6>
          ${showAllDataMyCertificate(dataCertificates)}
      </div>`,
      confirmButtonColor: "green",
      confirmButtonText: "Close",
    });
  };



  return (
    <div className="styleBtnDiploma">
      <button
        style={loading ? { cursor: "not-allowed" } : {}}
        disabled={loading}
        onClick={showPopUpMyCertificates}
      >
        {loading
          ? "Loading Certificate's"
          : `Show My ${dataCertificates.length} Certificate's`}
      </button>
    </div>
  );
};


export default ShowMyCertificate;