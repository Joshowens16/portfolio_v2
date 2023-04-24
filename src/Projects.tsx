import React from "react";
import projects from "./projectInfo";

const Projects = () => {
  return (
    <div className="bg-gptDark h-screen px-[70px] flex flex-wrap flex-col content-center w-[99.01vw] select-none text-white">
      <h1 className="flex flex- justify-self-center self-center text-5xl mt-4">
        Projects
      </h1>
      <div className="flex flex-row gap-8">
        {projects.map((project) => {
          return (
            <div className="flex flex-col flex-wrap w-[33.3333%] justify-between justify-self-center gap-4">
              <div className="flex self-center flex-col">
                <h2>{project.title}</h2>
                <img
                  className="flex w-[400px] aspect-video rounded-lg"
                  src={project.image}
                />
              </div>
              <div>
                <p>{project.description}</p>
              </div>
              <div className="flex flex-col">
                <a target="_blank" href={project.github}>
                  Github &rarr;
                </a>
                <a target="_blank" href={project.live}>
                  Site &rarr;
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
