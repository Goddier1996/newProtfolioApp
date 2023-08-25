import './App.css';
import Header from "../src/components/Menu";
import ProfileStart from "../src/components/ProfileStart";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Recommendations from "./components/Recommendations";

function App() {
  return (
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
    </div>
  );
}

export default App;
