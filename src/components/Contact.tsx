import React from "react";
import "../css/Contact.css";

const Contact = () => {
  return (
    <div className="contact" id="Contact">
      <div className="icons-container1">
        <div className="icons">
          <img
            src="https://i.postimg.cc/KvYH1Qmr/2.webp"
            height="60"
            alt="my email"
          />
          <h3 className="contactEmail">my email</h3>
          <p>artium20@gmail.com</p>
        </div>

        <div className="icons">
          <img
            src="https://i.postimg.cc/P5pV4xpC/3.webp"
            height="60"
            alt="my number"
          />
          <h3 className="contactPhone">my number</h3>
          <p>+972 542546828</p>
        </div>

        <div className="icons">
          <img
            src="https://i.postimg.cc/vBMPbtPn/1.webp"
            height="60"
            alt="my address"
          />
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

          <div className="btn">
            <a href="#About">Send Message</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
