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
// import { sayShabbatShalom } from "./components/tools/popUpShabbatShalom/SayShabbatShalom";
import { showPopUpInfoApp } from "./components/tools/startPopUpSite/ShowAboutMeStartPopUp";
import { useMediaQuery } from "@mui/material";
import TagManager from 'react-gtm-module'


function App() {


  const mobileScreen = useMediaQuery("(min-width:768px)", { noSsr: true });

  useEffect(() => {
    // show start popup about me video, show only in desktop screen NO MOBILE
    if (mobileScreen && !sessionStorage.getItem("startPopUp")) {
      showPopUpInfoApp();
    }

    // here show popup animation when friday and saturday
    // sayShabbatShalom();
  });


  
  // here show COUNTING THE DAYS war 7.10
  const tagManagerArgs = {
    gtmId: 'GTM-KTL44Q68'
  }
  TagManager.initialize(tagManagerArgs)



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