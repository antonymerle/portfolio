import React from "react";
import Graph from "./Graph";

const Header = () => {
  return (
    <header
      id="welcome"
      className="h-screen flex flex-col justify-start space-y-4  px-6  bg-slate-800 text-center text-slate-300 md:py-48  md:px-24 md:text-left lg:px-64"
    >
      <Graph />
      <div className="flex flex-col justify-start space-y-12 container mx-auto z-10">
        <h1
          className="bg-gradient-to-r
               from-pink-400   to-orange-300 text-transparent bg-clip-text
             flex flex-col mt-44 space-y-4  text-xl font-bold md:text-6xl lg:text-8xl"
        >
          <span className="text-xl text-mint">Hi, my name is </span>
          <span className="text-slate-50">Antony Merle.</span>
          <span>I build apps for today's Internet.</span>
        </h1>
        {/* TODO: make it readable on large screen by narrowing column */}
        <p className="text-2xl">
          I am a fullstack web developer with a passion for crafting intuitive
          and user-friendly web experiences. My main focus is developing
          websites that engage visitors and meet business requirements. With
          three years of experience and a focus on continual learning, I am
          committed to delivering high-quality and maintainable solutions.
        </p>
        {/* <div className="w-full h-96 relative bg-mint">
            </div> */}
      </div>
    </header>
  );
};

export default Header;
