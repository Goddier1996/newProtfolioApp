import { useState, useEffect } from "react";
import { FaArrowCircleUp } from "react-icons/fa";
import "../css/ScrollUpButton.css";

const ScrollUpButton:React.FC = () => {

  const [visible, setVisible] = useState<Boolean>(false);


  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;

    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };


  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };


  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
  });

  
  return (
    <>
      <div className="ButtonScroll">
        <FaArrowCircleUp
          onClick={scrollToTop}
          style={{ display: visible ? "inline" : "none" }}
        />
      </div>
    </>
  );
};


export default ScrollUpButton;