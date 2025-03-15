import "../Contact.css";
import ContactMe from "../InfoContact/ContactMe";
import InputValueSendEmail from "../sendMail/InputValueSendEmail";


const Contact: React.FC = () => {
  
  return (
    <div className="contact">
      <div>
        <ContactMe />
      </div>

      {/* send Email */}
      <InputValueSendEmail />
    </div>
  );
};

export default Contact;
