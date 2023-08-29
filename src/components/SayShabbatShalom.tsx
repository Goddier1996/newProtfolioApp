import Swal from "sweetalert2";
import "../index.css"


export function sayShabbatShalom() {

  let day: Date = new Date();

  if (day.getDay() + 1 == 6 || (day.getDay() + 1 == 7 && day.getHours() < 18)) {
    Swal.fire({
      title:
        '<img class="popUpShabbatShalom" src="https://i.postimg.cc/L59Hbp5m/image-processing20191022-9183-1x6u2a4.gif"></img>',
      background: "none",
      showConfirmButton: false,
      timer: 4000
    });
  }
}
