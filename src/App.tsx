import "./App.css";
import Header from "./components/heater/Menu";
import ProfileStart from "./components/startPortfolio/ProfileStart";
import AboutMe from "./components/aboutMe/infoAboutMe/AboutMe";
import Projects from "./components/myProjects/Projects";
import Recommendations from "./components/recommendations/Recommendations";
import Contact from "./components/contact/Contact";
import ScrollUpButton from "./components/tools/scrollUp/ScrollUpButton";
import Footer from "./components/footer/Footer";
import { useEffect } from "react";
import { sayShabbatShalom } from "./components/tools/popUpShabbatShalom/SayShabbatShalom"


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
