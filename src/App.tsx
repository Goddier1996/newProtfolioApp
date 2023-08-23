import "./css/App.css";
import Header from "../src/components/Menu";
import ProfileStart from "../src/components/ProfileStart";
import AboutMe from "./components/AboutMe";

function App() {
  return (
    <div className="ContainerApp">
      <div className="BannerApp">
        <Header />
        <ProfileStart />
      </div>
      <AboutMe />
    </div>
  );
}

export default App;
