import Swal from "sweetalert2";
import "../../css/AboutMe.css";


const ShowMyDiploma = () => {


  const showPopUpMyDiploma = () => {

    Swal.fire({
      html: `<div class="styleImageMyDiploma">
                       <img src=${
                         process.env.REACT_APP_URL_MY_DIPLOMA || ""
                       } alt="my diploma" />
                   </div>`,
      confirmButtonText: "Close",
      confirmButtonColor: "green",
    });
  };


  return (
    <div className="styleBtnDiploma">
      <button onClick={showPopUpMyDiploma}>Show My Diploma</button>
    </div>
  );
};

export default ShowMyDiploma;
