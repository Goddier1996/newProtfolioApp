import ReCAPTCHA from "react-google-recaptcha";
import { useState } from "react";
import { Slide } from "react-awesome-reveal";
import { SendMessage } from "./SendMessage";



const InputValueSendEmail = () => {


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

    
    
  // check box if user not robot
  const [capVal, setCapVal] = useState<any>(null);

    
    
  const handleChange = (e: any) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

    
    
  const sendEmail = (e: any) => {
    e.preventDefault();

    // move to this function , and send email , here i use emailjs
    SendMessage(toSend);
  };

    
    
    
  return (
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

        {/* check box if user dont robot */}
        <ReCAPTCHA
          className="g-recaptcha"
          sitekey={process.env.REACT_APP_RECAPTCHA || ""}
          onChange={(val) => setCapVal(val)}
        />

        <Slide direction="up">
          <div className="btnSendMessage">
            <button
              style={
                !capVal
                  ? {
                      background: "gray",
                      opacity: "0.7",
                      color: "white",
                      cursor: "not-allowed",
                    }
                  : {}
              }
              disabled={!capVal}
              type="submit"
            >
              Send Message
            </button>
          </div>
        </Slide>
      </form>
    </div>
  );
};


export default InputValueSendEmail;