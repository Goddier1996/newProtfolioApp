import LazyImage from "../../tools/LazyLoadImage/LazyImage";



const ContactMe: React.FC = () => {

  return (
    <>
      <div className="modelIcons">
        <div className="icons">
          <LazyImage
            src="https://i.postimg.cc/KvYH1Qmr/2.webp"
            width={NaN}
            height={60}
            alt="my email"
          />
          <h3 className="contactEmail">my email</h3>
          <p>artium20@gmail.com</p>
        </div>

        <div className="icons">
          <LazyImage
            src="https://i.postimg.cc/P5pV4xpC/3.webp"
            width={NaN}
            height={60}
            alt="my number"
          />
          <h3 className="contactPhone">my number</h3>
          <p>+972 542546828</p>
        </div>

        <div className="icons">
          <LazyImage
            src="https://i.postimg.cc/vBMPbtPn/1.webp"
            width={NaN}
            height={60}
            alt="my address"
          />
          <h3 className="contactAddress">my address</h3>
          <p className="contactAddressWhere">israel</p>
        </div>
      </div>
    </>
  );
};


export default ContactMe;