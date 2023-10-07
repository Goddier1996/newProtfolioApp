import Swal from "sweetalert2";
import "../../css/AboutMe.css";
import { MyCertificate } from "../../interface/info.model";



const ShowMyCertificate = () => {


  const arrCertificate: Array<MyCertificate> = [
    {
      link: process.env.REACT_APP_MY_LINK_DIPLOMA1 || "",
      image:  process.env.REACT_APP_URL_MY_IMG_CERTIFICATE1 || "",
    },
    {
      link: process.env.REACT_APP_MY_LINK_DIPLOMA2 || "",
      image:  process.env.REACT_APP_URL_MY_IMG_CERTIFICATE2 || "",
    },
  ];



  const showAllDataMyCertificate = (arr: Array<MyCertificate>) => {

    let optionItems: string = "";

    arr.forEach((item: MyCertificate) => {

      optionItems += `
      <div class="positionImgCertificate">
         <div class="imgCertificate">
           <a href=${item.link}>
           <img src=${item.image}/>
           </a>
         </div>
      </div>`;
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
          ${showAllDataMyCertificate(arrCertificate)}
      </div>`,
      confirmButtonColor: "green",
      confirmButtonText: "Close",
    });
  };


  return (
    <div className="styleBtnDiploma">
      <button onClick={showPopUpMyCertificates}>Show My Certificate's</button>
    </div>
  );
};

export default ShowMyCertificate;