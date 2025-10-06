import React from 'react'
import { useTypewriter } from "react-simple-typewriter";



const Navheader = ({openNav, className=""}) => {

  const [text] = useTypewriter({
    words: [
      "Good day, Everyone",
      "Welcome to my Codebase",
      "Thanks for Visiting",
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
    <div className={`mt-0 flex flex-col mm:flex-row w-full min-h-[5rem] bg-white mm:mt-4 mm:rounded-xl relative p-2 pt-2 lg:h-[5rem] mm:h-[6rem] ${className}`}>
          <div className="w-full h-full flex justify-between gap-8 items-start">
            <button className='openBtn visible mm:hidden' onClick={openNav}>
                <span className='ri-menu-5-line text-[1.5rem]'></span>
            </button>
          <div className="w-full h-full pt-2">
            <div className="Container for Calendar ml-2">
              <p className="text-greenFont text-[.7rem] mm:text-[.8rem] lg:text-[.8rem]">
                <span className="ri-calendar-line mr-2 text-greenFont"></span>
                {formattedDate}
              </p>
            </div>
            <div className="Typing Container absolute top-0 mm:left-0 left-14 w-full ml-4 mt-12 lg:mt-2 lg:top-1/2">
              <h6 className="text-greenFont break-words hyphens-auto leading-none text-[1.2rem] mm:text-[1.5rem] lg:text-[1rem] font-black">
                {text}
                <span className="color-bgcolor animate-blink">_</span>
              </h6>
            </div>
          </div>
          
          
          </div>
          
        </div>
  )
}

export default Navheader