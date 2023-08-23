import "./css/App.css";
import Header from "../src/components/Menu";
import ProfileStart from "../src/components/ProfileStart";

function App() {
  return (
    <div className="ContainerApp">
      <div className="BannerApp">
        <Header />
        <ProfileStart />
      </div>
    </div>
  );
}

export default App;
