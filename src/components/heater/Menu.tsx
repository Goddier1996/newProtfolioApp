import { useState } from "react";
import styled from "styled-components";
import "./Menu.css";
import { ObjectMenuOptions } from "../../interface/info.model";
import LazyImage from "../tools/LazyLoadImage/LazyImage";



const Header: React.FC = () => {


  const [bar, setBar] = useState<Boolean>(false);

  const arrayMenuOptions: Array<ObjectMenuOptions> = [
    { id: 1, type: "About" },
    { id: 2, type: "Project's" },
    { id: 3, type: "Recommendation's" },
    { id: 4, type: "Contact" },
  ];



  return (
    <Container bar={bar}>
      <div className="ContainerMenu">
          <div className="Logo">
            <LazyImage
              src="https://i.postimg.cc/QN7XRWh6/qa.webp"
              width={NaN}
              height={50}
              alt="Logo"
            />
          </div>

        <div className="Nav" style={bar ? { height: "100vh" } : { height: 0 }}>
          {arrayMenuOptions.map((value: ObjectMenuOptions) => (
            <span key={value.id}>
              <a
                aria-label={value.type}
                href={"#" + value.type}
                onClick={() => {
                  bar ? setBar(!bar) : setBar(bar);
                }}
              >
                {value.type}
              </a>
            </span>
          ))}
        </div>

        <div
          onClick={() => setBar(!bar)}
          className="bars"
          style={
            !bar
              ? { backgroundColor: "#82b5bd" }
              : { backgroundColor: "#8B0000", color: "white" }
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
