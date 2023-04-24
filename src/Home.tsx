import React from "react";
import { Link } from "react-scroll";
const Home = () => {
  return (
    <div className="bg-gptDark h-screen px-[70px] flex flex-wrap justify-center flex-col content-center w-[99.01vw] select-none">
      <div className="flex flex-col justify-center content-center">
        <img
          className="w-[175px] h-[175px] object-cover object-center rounded-full border-2 border-white justify-self-center self-center"
          src="/joshHS.PNG"
        />
      </div>
      <div className="flex flex-col justify-center content-center text-white mt-8">
        <p className="flex flex-col justify-self-center self-center text-5xl">
          Hello, I'm
        </p>
        <p className="flex flex-col justify-self-center self-center text-7xl mt-4">
          Josh Owens
        </p>
        <p className="mt-4">
          I build full stack applications using TypeScript, React, and Express.
        </p>
        <Link
          activeClass="active"
          smooth={true}
          spy={true}
          to="About"
          offset={-40}
          duration={750}
          className="flex justify-center content-center mt-12"
        >
          <button className="group text-white transition duration-300">
            Learn more about me &rarr;
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
