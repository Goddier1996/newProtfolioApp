import "../Contact.css";
import { Slide } from "react-awesome-reveal";
import ContactMe from "../InfoContact/ContactMe";
import InputValueSendEmail from "../sendMail/InputValueSendEmail";


const Contact: React.FC = () => {


  return (
    <div className="contact">
      
      <Slide direction="left">
       <ContactMe/>
      </Slide>

      {/* send Email */}
      <InputValueSendEmail/>
      
    </div>
  );
};


export default Contact;