import Swal from "sweetalert2";
import "./popUpStart.css";


export function showPopUpInfoApp() {

  sessionStorage.setItem("startPopUp", "userSeeStartPopUp");

  Swal.fire({
    html: `
    <div class="showPopUpAboutMe">

          <video
            class="videoShowPopUpAboutMe"
            controls
            poster="https://i.postimg.cc/mDzh2Rh7/123.webp"
           >
            <source
            src="https://github.com/Goddier1996/newProtfolioApp/assets/59862302/47c55fde-6e34-47c8-bef5-e58162283bdf"
            type="video/mp4">
            </video>

          <div class="arrowShowPopUp">
            <span></span>
            <span></span>
            <span></span>
          </div>

        </div>`,
    background: "none",
    width: "410px",
    showConfirmButton: false,
    showCloseButton: true,
    allowOutsideClick: false,
    position: "bottom-end"
    // timer: 52000
    // autoplay
    // muted
  });
}