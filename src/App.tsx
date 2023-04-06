import Nav from "./Nav";
import Socials from "./Socials";
import "./app.css";
import SocialMediaBar from "react-social-media-bar";
function App() {
  return (
    <div className="home">
      <Nav />
      <div className="linkTree">
        <Socials />
      </div>
    </div>
  );
}

export default App;
