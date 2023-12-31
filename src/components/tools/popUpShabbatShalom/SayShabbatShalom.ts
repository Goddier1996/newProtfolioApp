import Swal from "sweetalert2";
import "../../../index"


export function sayShabbatShalom() {

  let day: Date = new Date();

  if (day.getDay() + 1 == 6 || (day.getDay() + 1 == 7 && day.getHours() < 18)) {
    Swal.fire({
      title:
        '<img class="popUpShabbatShalom" src="https://i.postimg.cc/L59Hbp5m/image-processing20191022-9183-1x6u2a4.gif" alt="say Shabbat Shalom"/>',
      background: "none",
      showConfirmButton: false,
      timer: 3000
    });
  }
}
