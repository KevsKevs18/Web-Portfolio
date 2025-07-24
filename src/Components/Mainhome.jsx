import React from "react";
import Navheader from "../Components/Navheader.jsx";
import Maincard from "../Components/Maincard.jsx";
import { useTypewriter } from "react-simple-typewriter";

const Mainhome = ({ openNav }) => {
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
      <div className="flex flex-col w-full h-full ">
        <Navheader openNav={openNav} />

        <div className="w-full h-[45vh] bg-transparent  grid place-items-center p-4 pt-4 lg:h-[26rem] sm:h-[26rem] md:h-[26rem]">
          <div className="w-full h-full bg-svg-comp-guy bg-no-repeat bg-contain bg-right-bottom bg-sidebar rounded-xl overflow-hidden relative">
            <div className="m-3">
              <p className="text-bgcolor text-[.7rem] sm:text-[.9rem] md:text-[1rem] lg:text-[1rem]">
                <span className="ri-calendar-line mr-2"></span>
                {formattedDate}
              </p>
            </div>
            <div className="absolute top-0 left-0 w-[50%] ml-3 mt-12">
              <h6 className="text-bgcolor break-words hyphens-auto leading-none text-[1.2rem] sm:text-[2.5rem] md:text-[2.5rem] lg:text-[3rem] font-Londrina font-black">
                {text}
                <span className="color-bgcolor animate-blink">_</span>
              </h6>
            </div>
          </div>
        </div>
        <di className="w-full h-[60%] bg-bgcolor flex flex-col">
          <h4 className="text-[1.3rem] ml-4 font-Londrina font-black">
            <span className="ri-line-chart-fill mr-3"></span>Career Stats
          </h4>
          <div className="grid grid-cols-2 grid-rows-2 gap-4 m-5">
            <Maincard/>
          </div>
        </di>
      </div>
    </>
  );
};

export default Mainhome;
