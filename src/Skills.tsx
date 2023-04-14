import React from "react";
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
const Skills = () => {
  return (
    <div className="bg-gray-100 h-screen px-[70px] flex flex-wrap flex-col content-center justify-center w-[99.01vw] select-none">
      <h1 className="flex flex-col justify-self-start self-start text-5xl mt-4">
        Technical Skills
      </h1>
      <div className="flex flex-row h-[500px] w-9/12 border-2 self-center">
        <div className="border-2 p-5">
          <h2>Front-End</h2>
          {frontEnd.map((skill) => {
            return skill;
          })}
        </div>
        <div className="">
          <h2>Back-End</h2>
          {backEnd.map((skill) => {
            return skill;
          })}
        </div>
        <div className="other">
          <h2>Other</h2>
          {other.map((skill) => {
            return skill;
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
