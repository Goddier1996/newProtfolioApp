import { useState } from "react";
import "../../css/Contact.css";
import { Slide } from "react-awesome-reveal";
import { SendMessage } from "./SendMessage";

const Contact:React.FC = () => {

  const [toSend, setToSend] = useState<{
    from_name: string;
    message: string;
    from_email: string;
    from_number: string;
  }>({
    from_name: "",
    message: "",
    from_email: "",
    from_number: "",
  });


  const handleChange = (e: any) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };


  const sendEmail = (e: any) => {
    e.preventDefault();
    
    // move to this function , and send email , here i use emailjs
    SendMessage(toSend);
  };


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
        <form onSubmit={sendEmail}>
          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            className="box"
            value={toSend.from_name}
            onChange={handleChange}
          />
          <input
            type="number"
            name="from_number"
            placeholder="Your phone number"
            className="box"
            id="fromPhoneNumber"
            value={toSend.from_number}
            onChange={handleChange}
          ></input>
          <input
            type="email"
            name="from_email"
            placeholder="Your Email"
            className="box"
            value={toSend.from_email}
            onChange={handleChange}
          />
          <textarea
            rows={3}
            name="message"
            placeholder="Your Message"
            className="msg"
            value={toSend.message}
            onChange={handleChange}
          ></textarea>
          <Slide direction="up">
            <div className="btnSendMessage">
              <button type="submit">Send Message</button>
            </div>
          </Slide>
        </form>
      </div>

    </div>
  );
};

export default Contact;
