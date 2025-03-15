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
import { showPopUpInfoApp } from "./components/tools/startPopUpSite/ShowAboutMeStartPopUp";
import { useMediaQuery } from "@mui/material";
import TagManager from "react-gtm-module";


function App() {

  const mobileScreen = useMediaQuery("(min-width:768px)", { noSsr: true });

  useEffect(() => {
    // show start popup about me video, show only in desktop screen NO MOBILE
    if (mobileScreen && !sessionStorage.getItem("startPopUp")) {
      showPopUpInfoApp();
    }
  });


  // here show COUNTING THE DAYS war 7.10
  const tagManagerArgs = {
    gtmId: process.env.REACT_APP_GTM || "",
  };
  TagManager.initialize(tagManagerArgs);



  return (
    <>
      <ScrollUpButton />

      <div className="ContainerApp">
        <Header />

        <div className="BannerApp">
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
