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
    <div>
      <div className="flex flex-col h-screen p-4">
        <h1>Technical Skills</h1>
        <div className="flex flex-row h-[500px]">
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
    </div>
  );
};

export default Skills;
