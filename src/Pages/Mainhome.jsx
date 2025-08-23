import React from "react";
import Maincard from "../Components/Home/Maincard.jsx";
import Features from "../Components/Home/Features.jsx";
import Footer from "../Components/Footer.jsx";
import { useTypewriter } from "react-simple-typewriter";
import Html from "../assets/html5.svg";
import react from "../assets/react.svg";
import mysql from "../assets/mysql.svg";
import express from "../assets/expressdotcom.svg";
import tailwind from "../assets/tailwindcss.svg";
import Expertise from "../Components/Home/Expertise.jsx";
import Wrapper from "../Components/Wrapper.jsx";

const Mainhome = () => {
  const [text] = useTypewriter({
    words: [
      "Welcome to my Codebase",
      "Passionate about clean code",
      "Delivering scalable web solutions",
    ],
    typeSpeed: 100,
    deleteSpeed: 150,
    delaySpeed: 7000,
    cursor: false,
    loop: true,
  });

  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-PH", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const skills = [
    { name: "HTML", src: Html },
    { name: "TAILWIND", src: tailwind },
    { name: "REACT", src: react },
    { name: "DATABASE", src: mysql },
    { name: "EXPRESS JS", src: express },
  ];
  const doubled = [...skills, ...skills];

  return (
    <>
      {/*Left Container*/}
      <div className="flex flex-col w-full min-h-screen md:min-h-[300px]">
        <div className="Content w-full h-[18rem] bg-svg-comp-guy bg-no-repeat bg-contain bg-right-bottom bg-bgcolor md:rounded-xl relative  grid place-items-center p-2 pt-4 lg:h-[20rem] sm:h-[26rem] md:h-[22rem]">
          <div className="w-full h-full ">
            <div className="Container for Calendar ml-2">
              <p className="text-blackg text-[.7rem] sm:text-[.9rem] md:text-[1rem] lg:text-[1rem]">
                <span className="ri-calendar-line mr-2"></span>
                {formattedDate}
              </p>
            </div>
            <div className="Typing Container absolute top-0 left-0 w-[50%] ml-3 mt-12 lg:mt-20">
              <h6 className="text-blackg break-words hyphens-auto leading-none text-[1.2rem] sm:text-[2.5rem] md:text-[2.5rem] lg:text-[2.5rem] font-black">
                {text}
                <span className="color-bgcolor animate-blink">_</span>
              </h6>
            </div>
          </div>
        </div>
        <Wrapper
          title="Career Stats"
          iconClass="ri-line-chart-fill"
          className="h-[22rem] lg:h-[10rem]"
        >
          <div className="grid grid-cols-2 grid-rows-2 gap-4 m-5 lg:grid-cols-4 lg:grid-rows-1">
            <Maincard />
          </div>
        </Wrapper>
        <Wrapper
          title="Featured"
          iconClass="ri-pushpin-2-line"
          className="h-[22rem] md:h-[18rem]"
        >
          <Features />
        </Wrapper>
      </div>

      <div className="flex flex-col w-full min-h-[35rem] lg:min-h-screen lg:w-[23rem] lg:ml-4">
        <Wrapper
          title="Skills"
          iconClass="ri-flashlight-line"
          className="h-[10rem] lg:mt-0 overflow-hidden relative"
          h1Class="mb-4"
        >
          <div className="animate-scroll-slow  flex my-3 px-5 w-max h-1/2 whitespace-nowrap">
            {doubled.map((skill, index) => (
              <div key={index} className="inline-block mx-6 text-center">
                <img
                  src={skill.src}
                  className="w-[3rem] h-[3rem]"
                  alt={skill.name}
                />
                <span className="font-bold">{skill.name}</span>
              </div>
            ))}
          </div>
        </Wrapper>

        <Wrapper
          title="Expertise"
          iconClass="ri-user-follow-line"
          className="min-h-[17rem]"
        >
          <Expertise />
        </Wrapper>
        <Footer />
      </div>
    </>
  );
};

export default Mainhome;
