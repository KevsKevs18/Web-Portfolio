import React from "react";
import Maincard from "../Components/Home/Maincard.jsx";
import Features from "../Components/Home/Features.jsx";
import Footer from "../Components/Footer.jsx";
import { useTypewriter } from "react-simple-typewriter";
import Expertise from "../Components/Home/Expertise.jsx";
import Wrapper from "../Components/Wrapper.jsx";
import Profile from "../Components/Home/Profile.jsx";
import Navheader from "../Components/Navheader.jsx";
import Contribution from "../Components/Projects/Contribution.jsx";
import Skills from "../Components/Home/Skills.jsx"

const Mainhome = ({ openNav }) => {
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
    <>
      {/* All Component */}
      <div className="w-full h-auto mm:px-2 overflow-hidden">
        {/* Top Content */}
        <div className="grid grid-cols-1 grid-rows-[auto_auto_auto]  mm:gap-2 w-full md:grid-cols-[1fr_250px] h-auto md:grid-rows-[auto_1fr] overflow-hidden grid-areas-layoutMobile mm:grid-areas-layoutDesktop">
          <Navheader
            className="[grid-area:navheader]"
            formattedDate={formattedDate}
            openNav={openNav}
            text={text}
          />
          <Profile profileClass="[grid-area:profile] sm:mt-0 mm:h-[16rem] mm:mt-4 mm:rounded-xl mm:p-0 lg:h-[13rem]" />
          <Wrapper
            h1Class="hidden"
            iconClass="ri-line-chart-fill"
            className="h-auto mt-0 py-2 mm:rounded-xl mm:py-2 mm:mt-0  [grid-area:maincard] px-2 justify-center items-center"
          >
            <div className="grid grid-cols-2 w-full place-items-center grid-rows-2 h-full gap-2 sm:grid-cols-4 sm:grid-rows-1  lg:grid-cols-4 lg:grid-rows-1 mm:grid-cols-2 mm:grid-rows-2">
              <Maincard />
            </div>
          </Wrapper>
        </div>

         {/* Bottom part */}
         <div className="w-full grid grid-cols-1 h-auto mm:gap-2 lg:grid-cols-[700px_minmax(0,1fr)]">

        <div className="flex flex-col w-fuil h-auto md:py-2">

          {/* Features, Contributions, Skills */}
          
          <div className="grid grid-cols-1 md:grid-cols-[210px_minmax(0,1fr)] mm:gap-2 overflow-hidden">
         <Wrapper
         title="My Featured Projects"
         h1Class=""
          iconClass="ri-pushpin-2-line"
          className="h-[30rem] items-center p-2 md:h-[18rem] gap-2 sm:h-[12rem] mm:rounded-xl md:flex-col"
        >
          <Features />
        </Wrapper>

        <Contribution/>
        </div>
          <Skills/>
        </div>

        {/* Footer, Expertise */}
      <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] lg:grid-cols-1 lg:mt-2 w-full h-auto mm:gap-2 ">
        <Wrapper
          title="Expertise"
          iconClass="ri-user-follow-line"
          className="min-h-[17rem] items-center mm:rounded-xl"
        >
          <Expertise />
        </Wrapper>
        <Footer />

      </div>
      </div>
      </div>
    </>
  );
};

export default Mainhome;
