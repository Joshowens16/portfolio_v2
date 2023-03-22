import React from "react";
import { useSelector } from "react-redux";

const frontEnd: React.ReactElement[] = [
  <i className="devicon-html5-plain-wordmark colored"></i>,
  <i className="devicon-css3-plain-wordmark colored"></i>,
  <i className="devicon-javascript-plain colored"></i>,
  <i className="devicon-typescript-plain colored"></i>,
  <i className="devicon-react-original-wordmark colored"></i>,
  <i className="devicon-redux-original colored"></i>,
  <i className="devicon-materialui-plain colored"></i>,
  <i className="devicon-bootstrap-plain-wordmark colored"></i>,
];
const backEnd: React.ReactElement[] = [
  <i className="devicon-nodejs-plain-wordmark colored"></i>,
  <i className="devicon-express-original-wordmark colored"></i>,
  <i className="devicon-postgresql-plain-wordmark colored"></i>,
  <i className="devicon-sequelize-plain-wordmark colored"></i>,
];
const other: React.ReactElement[] = [
  <i className="devicon-firebase-plain-wordmark colored"></i>,
  <i className="devicon-git-plain-wordmark colored"></i>,
  <i className="devicon-github-original-wordmark colored"></i>,
  <i className="devicon-webpack-plain colored"></i>,
];

const About = () => {
  return (
    <div className="bg-gray-100 h-screen px-[70px] flex flex-wrap flex-col content-center w-[99.01vw] select-none">
      <h1 className="flex flex-col justify-self-center self-center text-5xl mt-4">
        About Me
      </h1>
      <div className="">
        <h2>Hi, I'm Josh Owens</h2>
        <p>
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
      <div className="">
        <h1>Technical Skills</h1>
        <h2>Front-End</h2>
        <div className="frontend">
          {frontEnd.map((skill) => {
            return skill;
          })}
        </div>
        <h2>Back-End</h2>
        <div className="">
          {backEnd.map((skill) => {
            return skill;
          })}
        </div>
        <h2>Other</h2>
        <div className="other">
          {other.map((skill) => {
            return skill;
          })}
        </div>
      </div>
      <div id="">
        <button>Check out my projects &rarr;</button>
      </div>
    </div>
  );
};

export default About;
