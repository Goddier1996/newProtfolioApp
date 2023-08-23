import { useState } from "react";
import styled from "styled-components";
import { FaCode } from "react-icons/fa";
import "../css/Menu.css";

const Header = () => {
  const [bar, setBar] = useState<any>(false);

  return (
    <Container bar={bar}>
      <div className="Container">
        <div className="Logo">
          <span className="green">
            <FaCode />
          </span>
          <h1>Hello World</h1>
        </div>

        <div className="Nav" style={bar ? { height: "100vh" } : { height: 0 }}>
          <span>
            <a href="#Home" onClick={() => setBar(!bar)}>
              Home
            </a>
          </span>
          <span>
            <a href="#About" onClick={() => setBar(!bar)}>
              About
            </a>
          </span>
          <span>
            <a href="#project" onClick={() => setBar(!bar)}>
              Projects
            </a>
          </span>
          <span>
            <a href="#client" onClick={() => setBar(!bar)}>
              Contact
            </a>
          </span>
        </div>

        <div
          onClick={() => setBar(!bar)}
          className="bars"
          style={
            !bar
              ? { backgroundColor: "#01be96" }
              : { backgroundColor: "#8B0000		" }
          }
        >
          <div className="bar">{!bar ? <p>Menu</p> : <p>Close</p>}</div>
        </div>
      </div>
    </Container>
  );
};

export default Header;

const Container = styled.div<any>`
  @media (max-width: 640px) {
    :before {
      transform: ${(props) =>
        props.bar ? "rotate(45deg)" : "translateY(10px)"};
      transition: all 400ms ease-in-out;
    }

    :after {
      transform: ${(props) =>
        props.bar ? "rotate(-45deg)" : "translateY(-10px)"};
      transition: all 400ms ease-in-out;
    }
  }
`;
