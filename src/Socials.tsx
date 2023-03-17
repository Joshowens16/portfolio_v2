import React from "react";

const socials: { devicon: string; link: string }[] = [
  {
    devicon: "devicon-linkedin-plain",
    link: "https://www.linkedin.com/in/joshowens97/",
  },
  {
    devicon: "devicon-github-original",
    link: "https://github.com/joshowens16",
  },
  {
    devicon: "devicon-twitter-original",
    link: "",
  },
  {
    devicon: "devicon-facebook-plain",
    link: "",
  },
];
const Socials = () => {
  return (
    <div className="flex flex-col text-black content-center py-2 px-2 text-3xl gap-4 bg-gray-300 rounded-lg fixed bottom-[30vh] left-[10px] bg-opacity-80">
      {socials.map((link) => {
        return (
          <div className="flex justify-center hover:cursor-pointer">
            <a href={link?.link} target="_blank">
              <i className={link.devicon}></i>
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default Socials;
