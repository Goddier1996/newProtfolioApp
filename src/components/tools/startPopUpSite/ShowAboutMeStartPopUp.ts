import Swal from "sweetalert2";
import "./popUpStart.css";


export function showPopUpInfoApp() {

  sessionStorage.setItem("startPopUp", "userSeeStartPopUp");

  Swal.fire({
    html: `<div class="showPopUpAboutMe">
          <video
            class="videoShowPopUpAboutMe"
            controls
            poster="https://i.postimg.cc/NMv6V0J5/12.webp"
           >
            <source
            src="https://github.com/Goddier1996/newProtfolioApp/assets/59862302/5783d19b-7fd8-48bf-b834-c3ef1daf0894"
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