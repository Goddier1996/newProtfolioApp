import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

export function SendMessage(value: any) {

  if (
    value.from_name == "" ||
    value.from_email == "" ||
    value.message == "" ||
    value.from_number == ""
  ) {
    Swal.fire({
      html: "<h4>you can`t send message<br/>please input all value !</h4>",
      icon: "error",
      confirmButtonColor: "green",
    });
  }
  
  else {
    emailjs.send(
      process.env.REACT_APP_SERVICE_KEY || "",
      process.env.REACT_APP_TEMPLATE || "",
      value,
      process.env.REACT_APP_PASSWORD || ""
    );
    Swal.fire({
      html: "<h4>success send your messsage</h4>",
      icon: "success",
      confirmButtonColor: "green",
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.reload();
      }
    });
  }
}
