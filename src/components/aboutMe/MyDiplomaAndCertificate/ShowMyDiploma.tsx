import Swal from "sweetalert2";
import "../AboutMe.css";
import { MyDiploma } from "../../../interface/info.model";
import { FetchData } from "../../../customHook/FetchData";



const ShowMyDiploma = () => {

  // customHook
  const { dataDiploma, loading } = FetchData("Diploma", "");

  
  const showAllDataDiploma = (arr: Array<MyDiploma>) => {
    let optionItems: string = "";

    arr.forEach((item: MyDiploma) => {
      {
        loading
          ? (optionItems = `<div class="center-body">
                <div class="loader-circle-48"></div>
                <p>Loading Diploma</p>
             </div>`)
          : (optionItems += `
          <div class="styleImageMyDiploma">
          <div class="imgDiploma">
            <a aria-label="show my Certificate" href=${item.title}>
            <img src=${item.image.asset.url}/>
            </a>
          </div>
       </div>`);
      }
    });
    return optionItems;
  };


  const showPopUpMyDiploma = () => {
    Swal.fire({
      html: `<div class="styleImageMyDiploma">
      ${showAllDataDiploma(dataDiploma)}
             </div>`,
      confirmButtonText: "Close",
      confirmButtonColor: "green",
    });
  };


  return (
    <div className="styleBtnDiploma">
      <button
        style={loading ? { cursor: "not-allowed" } : {}}
        disabled={loading}
        onClick={showPopUpMyDiploma}
      >
        {loading ? "Loading Diploma" : `Show My Diploma`}
      </button>
    </div>
  );
};


export default ShowMyDiploma;