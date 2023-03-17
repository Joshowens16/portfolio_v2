import React from "react";
import About from "./About";
import Home from "./Home";
import { Link } from "react-scroll";
import Projects from "./Projects";

const nav = [
  {
    name: "Home",
  },
  {
    name: "About",
  },
  {
    name: "Projects",
  },
  {
    name: "Let's Connect",
  },
];

const Nav = () => {
  return (
    <>
      <nav className="flex flex-row justify-between p-1 shadow-xl bg-gray-300 sticky top-0 z-50 lg:w-1000">
        <div className="flex justify-self-center self-center xl:ml-20 sm:ml-2">
          <p>Josh Owens</p>
        </div>
        <div className="flex gap-6 xl:mr-20 sm:mr-2">
          {nav.map((section) => {
            return (
              <Link
                activeClass="active"
                smooth={true}
                spy={true}
                to={section.name}
                offset={-40}
                duration={750}
              >
                <button className="bg-sky-900 p-1 text-white rounded hover:ring-1 ring-white">
                  {section.name}
                </button>
              </Link>
            );
          })}
        </div>
        <div className="flex justify-self-center self-center xl:mr-20 sm:mr-2">
          <button>Resume</button>
        </div>
      </nav>
      <div className="static">
        <section className="w-screen" id="Home">
          <Home />
        </section>
        <section className="w-screen" id="About">
          <About />
        </section>
        <section className="w-screen" id="Projects">
          <Projects />
        </section>
      </div>
    </>
  );
};

export default Nav;
