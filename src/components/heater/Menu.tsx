import { useState } from "react";
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
    </div>
  );
};


export default Header;