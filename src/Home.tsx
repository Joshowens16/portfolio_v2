import React from "react";

const Home = () => {
  return (
    <div className="bg-gray-700 h-screen px-[70px] flex flex-wrap justify-center flex-col content-center w-[99.01vw]">
      <div className="flex flex-col justify-center content-center">
        <img
          className="w-[150px] h-[150px] object-cover object-center rounded-full border-2 border-black justify-self-center self-center"
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
      </div>
    </div>
  );
};

export default Home;
