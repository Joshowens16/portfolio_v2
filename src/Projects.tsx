import React from "react";
import projects from "./projectInfo";

const Projects = () => {
  return (
    <div className="bg-gptDark h-screen px-[70px] flex flex-wrap flex-col content-center justify-center w-[99.01vw] select-none text-white">
      <h1 className="flex justify-self-center self-center text-5xl mb-4">
        Projects
      </h1>
      <div className="flex flex-row gap-8">
        {projects.map((project) => {
          return (
            <div className="flex flex-col flex-wrap w-[33.3333%] justify-between justify-self-center gap-4">
              <div className="flex self-center flex-col py-2">
                <h2 className="text-3xl mb-4">{project.title}</h2>
                <img
                  className="flex w-[400px] aspect-video rounded-lg"
                  src={project.image}
                />
              </div>
              <div>
                <p>{project.description}</p>
              </div>
              <div className="flex flex-row gap-4">
                <button className="group text-white transition duration-300">
                  <a target="_blank" href={project.github}>
                    Github &rarr;
                  </a>

                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span>
                </button>
                <button className="group text-white transition duration-300">
                  <a target="_blank" href={project.live}>
                    Site &rarr;
                  </a>
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
