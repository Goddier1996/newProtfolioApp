import "./css/App.css";
import Header from "../src/components/Menu";
import ProfileStart from "../src/components/ProfileStart";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";

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
    </div>
  );
}

export default App;
