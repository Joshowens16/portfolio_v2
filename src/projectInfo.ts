interface ProjectType {
  title: string;
  description: string;
  image: string;
  github: string;
  live: string;
}

const projects: ProjectType[] = [
  {
    title: "Codenames",
    description:
      "Fast-paced and easy to learn, simply click the 'create room' button, and invite your friends by sending them the URL in your web browser. Everyone should now enter their usernames, assign themselves teams and roles. The host can now setup the game board- and you're ready to play CODENAMES!",
    image: "/CODENAMES.jpg",
    github: "https://github.com/2208-Capstone-Team-2/codenames",
    live: "https://codenames-production.up.railway.app/",
  },
  {
    title: "Comic Overflow",
    description:
      "Comic Overflow is a e-commerce web application built by myself and 3 other developers over the course of 2.5 weeks. It is built with React on the front-end and Express on the back-end and uses a PostgreSQL database to store products and user information.",
    image: "/comicoverflowimg.png",
    github: "https://github.com/2208-GS-Team-1/Comic-Overflow",
    live: "https://comic-overflow-production.up.railway.app/",
  },
  // {
  //   title: "Personal Site",
  //   description: "You're here right now!",
  //   image: "/portfolioLight.png",
  //   github: "https://github.com/Joshowens16/portfolio",
  //   live: "https://joshowens.onrender.com/",
  // },
];

export default projects;
