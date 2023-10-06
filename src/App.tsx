import "./App.css";
import Header from "../src/components/Menu";
import ProfileStart from "./components/startPortfolio/ProfileStart";
import AboutMe from "./components/aboutMe/AboutMe";
import Projects from "./components/myProjects/Projects";
import Recommendations from "./components/recommendations/Recommendations";
import Contact from "./components/contact/Contact";
import ScrollUpButton from "./components/ScrollUpButton";
import Footer from "./components/Footer";
import { useEffect } from "react";
import { sayShabbatShalom } from "./components/SayShabbatShalom";


function App() {


  // here show popup animation when friday and saturday
  useEffect(() => {

    sayShabbatShalom();
})


  return (
    <>
      <ScrollUpButton />
      <div className="ContainerApp">
        <div className="BannerApp">
          <Header />
          <ProfileStart />
        </div>
        <AboutMe />
        <div className="LightColor">
          <Projects />
        </div>
        <Recommendations />
        <div className="LightColor">
          <Contact />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
