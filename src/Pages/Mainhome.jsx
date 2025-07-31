import React from "react";
import Maincard from "../Components/Home/Maincard.jsx";
import Features from "../Components/Home/Features.jsx";
import { useTypewriter } from "react-simple-typewriter";

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

  return (
    <>
      <div className="flex flex-col w-full h-full lg:flex-row">
        {/*Whole-container*/}
        <div className="flex flex-col w-full h-full">
          {/*Left Container*/}
          <div className="Content w-full h-[45vh] bg-svg-comp-guy bg-no-repeat bg-contain bg-right-bottom bg-bgcolor rounded-b-xl md:rounded-xl overflow-hidden relative  grid place-items-center p-2 pt-4 lg:h-[35rem] sm:h-[26rem] md:h-[26rem]">
            <div className="w-full h-full ">
              <div className="Container for Calendar ml-2">
                <p className="text-blackg text-[.7rem] sm:text-[.9rem] md:text-[1rem] lg:text-[1rem]">
                  <span className="ri-calendar-line mr-2"></span>
                  {formattedDate}
                </p>
              </div>
              <div className="Typing Container absolute top-0 left-0 w-[50%] ml-3 mt-12 lg:mt-20">
                <h6 className="text-blackg break-words hyphens-auto leading-none text-[1.2rem] sm:text-[2.5rem] md:text-[2.5rem] lg:text-[2.5rem] font-Londrina font-black">
                  {text}
                  <span className="color-bgcolor animate-blink">_</span>
                </h6>
              </div>
            </div>
          </div>
          <div className="Card Stats w-full h-[60%] bg-bgcolor flex flex-col mt-2 rounded-xl">
            <h4 className="text-[1.3rem] ml-4 font-Londrina font-black">
              <span className="ri-line-chart-fill mr-3"></span>Career Stats
            </h4>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 m-5 lg:grid-cols-4 lg:grid-rows-1">
              <Maincard />
            </div>
          </div>

          <div className="Card Stats w-full h-full bg-bgcolor flex flex-col mt-2 rounded-xl">
            <h4 className="text-[1.3rem] ml-4 font-Londrina font-black">
              <span className="ri-pushpin-2-line mr-3"></span>Featured
            </h4>
            <div className="overflow-x-auto scrollbar-hide snap-x snap-mandatory scroll-smooth my-5 px-5 w-full h-full">
              <div className="flex w-full h-[70%] gap-4 md:w-[50%]">
                <Features />
              </div>
            </div>
          </div>
        </div>
        <div className="Right flex flex-col w-full h-full lg:w-[40%]">
          Right Div in LG
        </div>
      </div>
    </>
  );
};

export default Mainhome;
