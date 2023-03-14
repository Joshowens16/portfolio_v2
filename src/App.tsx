import { useState } from "react";
import About from "./About";
import reactLogo from "./assets/react.svg";
import ComponentRouter from "./ComponentRouter";
import Home from "./Home";
import Nav from "./Nav";
import Socials from "./socials/Socials";
import "./socials/socials.css";
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
