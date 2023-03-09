import React from "react";
import { Link } from "react-router-dom";

const nav = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Projects",
    link: "/projects",
  },
  {
    name: "Resume",
    link: "/resume",
  },
];

const Nav = () => {
  return (
    <nav className="flex flex-row justify-between p-5 shadow-xl bg-gray-300">
      <div className="flex justify-self-center self-center xl:ml-20 sm:ml-2">
        <p>Josh Owens</p>
      </div>
      <div className="flex gap-6 xl:mr-20 sm:mr-2">
        {nav.map((section) => {
          return (
            <Link to={section.link}>
              <button className="bg-sky-900 p-1 text-white rounded hover:ring-1 ring-white">
                {section.name}
              </button>
            </Link>
          );
        })}
      </div>
      <div className="flex justify-self-center self-center xl:mr-20 sm:mr-2">
        <button>Let's Connect</button>
      </div>
    </nav>
  );
};

export default Nav;
