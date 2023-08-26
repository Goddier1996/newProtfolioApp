import "../css/Contact.css";
import { Slide } from "react-awesome-reveal";

const Contact = () => {
  return (
    <div className="contact" id="Contact">
      <Slide direction="left">
        <div className="modelIcons">
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
            <p className="contactAddressWhere">israel</p>
          </div>
        </div>
      </Slide>

      <div className="inputValue">
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
            placeholder="Message"
            rows={4}
            cols={40}
            name="message"
            className="msg Msg"
            id="msg"
          ></textarea>
          <Slide direction="up">
            <div className="btnSendMessage">
              <a href="#About">Send Message</a>
            </div>
          </Slide>
        </form>
      </div>
    </div>
  );
};

export default Contact;
