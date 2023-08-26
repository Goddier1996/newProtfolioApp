import "./App.css";
import Header from "../src/components/Menu";
import ProfileStart from "../src/components/ProfileStart";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Recommendations from "./components/Recommendations";
import Contact from "./components/Contact";
import ScrollUpButton from "./components/ScrollUpButton";
import Footer from "./components/Footer";

function App() {
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
