import "./App.css";
import Header from "./components/heater/Menu";
import ProfileStart from "./components/startPortfolio/ProfileStart";
import AboutMe from "./components/aboutMe/infoAboutMe/mainComponent/AboutMe";
import Projects from "./components/myProjects/mainComponent/Projects";
import Recommendations from "./components/recommendations/mainComponent/Recommendations";
import Contact from "./components/contact/mainComponent/Contact";
import ScrollUpButton from "./components/tools/scrollUp/ScrollUpButton";
import Footer from "./components/footer/Footer";
import { useEffect } from "react";
import { sayShabbatShalom } from "./components/tools/popUpShabbatShalom/SayShabbatShalom";



function App() {

  // here show popup animation when friday and saturday
  useEffect(() => {
    sayShabbatShalom();
  });


  return (
    <>
      <ScrollUpButton />
      
      <div className="ContainerApp">

        <div className="LightColor">
          <Header />
        </div>

        <div className="BannerApp bannerMargin">
          <ProfileStart />
        </div>

        <div id="About">
           <AboutMe />
        </div>
        
        <div id="Project's" className="LightColor">
          <Projects />
        </div>

        <div id="Recommendation's">
          <Recommendations />
        </div>
        
        <div id="Contact" className="LightColor">
          <Contact />
        </div>

        <Footer />
      </div>
    </>
  );
}


export default App;