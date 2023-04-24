import React from "react";
import { useSelector } from "react-redux";
import "./index.css";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
const About = () => {
  return (
    <div className="bg-gray-100 h-screen px-[70px] flex flex-wrap flex-col content-center justify-center w-[99.01vw] select-none">
      <h1 className="flex flex-col justify-self-start self-start text-5xl mt-4">
        About Me
      </h1>
      <div className="flex flex-col w-9/12 mt-5 gap-4">
        <p className="flex justify-center self-center">
          I am a full stack developer from California. I first became interested
          in programming in 2021, when I came across some open source resources
          to get started in the web development world. I became fascinated with
          web development, creating responsive applications with HTML and CSS,
          as well as interactive user experiences using JavaScript. This led me
          down a path of seriously considering software development as a career.
        </p>
        <p>
          I began taking courses at a local community college, I took
          introductory courses in Computer Science, Programming concepts, and
          System Design. These courses introduced me to the foundations of
          Computer Programming, where I learned mostly Python.
        </p>
        <p>
          Excited to progress my career in this field, I turned towards{" "}
          <a target="_blank" href="https://www.fullstackacademy.com/">
            Fullstack Academy
          </a>
          . Here I was able to dive completely into the world of creating full
          stack web applications. I learned to create back end database's and
          servers using Express and PostgreSQL and to create interactive and
          responsive front end applications using React and Redux.
        </p>
        <p>
          Aside from software development, I enjoy playing the acoustic and
          electric guitar, reading, and hiking. I was also an NCAA Division 1
          swimmer while pursuing my undergraduate degree. I enjoy giving back to
          the world of swimming, so each summer I coach a recreation swim team.
        </p>
      </div>
      <div className="flex self-center mt-4">
        <button className="flex justify-center flex-col gap-5">
          Check out my projects
          <div className="flex self-center arrow bounce ">
            <a className="fa fa-arrow-down fa-2x text-black" href="#">
              <ExpandMoreIcon fontSize="large" />
            </a>
          </div>
        </button>
      </div>
    </div>
  );
};

export default About;
