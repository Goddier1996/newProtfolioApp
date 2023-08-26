import React from "react";
import "../css/Contact.css";

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <div className="icons-container1">
        <div className="icons">
          <img src="https://i.postimg.cc/KvYH1Qmr/2.webp" height="60" alt="my email" />
          <h3 className="contactEmail">my email</h3>
          <p>artium20@gmail.com</p>
        </div>

        <div className="icons">
          <img src="https://i.postimg.cc/P5pV4xpC/3.webp" height="60" alt="my number" />
          <h3 className="contactPhone">my number</h3>
          <p>+972 542546828</p>
        </div>

        <div className="icons">
          <img src="https://i.postimg.cc/vBMPbtPn/1.webp" height="60" alt="my address" />
          <h3 className="contactAddress">my address</h3>
          <p className="contactAddressWhere">israel - kfar yona</p>
        </div>
      </div>

      <div className="row1">
        <form action="" method="post">
          <input
            type="text"
            name="inputbox"
            placeholder="your name"
            className="box Name"
            id="fromName"
          />
          <input
            type="email"
            name="inputbox"
            placeholder="your email"
            className="box Email"
            id="fromEmail"
          />
          <input
            type="number"
            name="inputbox"
            placeholder="your phone number"
            className="box PhoneNumber"
            id="fromPhoneNumber"
          />
          <textarea
            name="inputbox"
            placeholder="message"
            className="msg Msg"
            id="msg"
          ></textarea>

          <input
            type="button"
            name="button"
            className="btn Btn"
            value="send message"
          />
        </form>

        <iframe
          className="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26972.47017107631!2d34.90799894402544!3d32.323705741102245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d15ebe4e05e0f%3A0xa110b69ef8e9fec2!2sKfar%20Yona!5e0!3m2!1sen!2sil!4v1659637895009!5m2!1sen!2sil"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
