import Swal from "sweetalert2";
import "./popUpStart.css";


export function showPopUpInfoApp() {

  sessionStorage.setItem("startPopUp", "userSeeStartPopUp");

  Swal.fire({
    html: `<div class="showPopUpAboutMe">
          <video
            class="videoShowPopUpAboutMe"
            controls
            poster="https://i.postimg.cc/4ymvK455/12.webp"
           >
            <source
            src="https://github.com/Goddier1996/newProtfolioApp/assets/59862302/35a1a473-2795-4ed8-9ce6-2ec780fb70ab"
            type="video/mp4">
            </video>
        </div>`,
    background: "none",
    width: "800px",
    showConfirmButton: false,
    showCloseButton: true,
    // timer: 52000
    // autoplay
    // muted
  });
}