import React, { useState } from "react";
import Maincard from "../Components/Home/Maincard.jsx";
import Features from "../Components/Home/Features.jsx";
import Footer from "../Components/Footer.jsx";

import Wrapper from "../Components/Wrapper.jsx";
import Profile from "../Components/Home/Profile.jsx";
import Navheader from "../Components/Navheader.jsx";
import Contribution from "../Components/Projects/Contribution.jsx";
import Myskills from "../Components/Home/Myskills.jsx";
import Myexpertise from "../Components/Home/Myexpertise.jsx";
import Resumemodal from "../Modal/Resumemodal.jsx";

const Mainhome = ({ openNav }) => {

    const [openResume, setResume] = useState(false);
  
  return (
    <>
      {/* All Component */}
      <div className="w-full h-auto mm:px-2 overflow-hidden">
        {/* Top Content */}
        <div className="grid grid-cols-1 grid-rows-[auto_auto_auto]  mm:gap-2 w-full md:grid-cols-[1fr_250px] h-auto md:grid-rows-[auto_1fr] overflow-hidden grid-areas-layoutMobile mm:grid-areas-tablet lg:grid-areas-layoutDesktop">
          <Navheader
            className="[grid-area:navheader] hidden mm:flex"
            openNav={openNav}
          />
          <Profile clickResume={()=> setResume(true)} profileClass="[grid-area:profile] sm:mt-0 mm:h-[16rem] lg:mt-4 mm:rounded-xl mm:p-0 lg:h-[14rem]" />
          
          <Wrapper
            h1Class="hidden"
            iconClass="ri-line-chart-fill"
            className="bg-white h-auto mt-0 py-2 mm:rounded-xl mm:py-2 mm:mt-0  [grid-area:maincard] px-2 justify-center items-center"
          >
            <div className="grid grid-cols-2  w-full place-items-center grid-rows-[150px_150px] h-full gap-2 sm:grid-cols-4 sm:grid-rows-1  lg:grid-cols-4 lg:grid-rows-1 mm:grid-cols-2 mm:grid-rows-2">
              <Maincard />
            </div>
          </Wrapper>
        </div>

         {/* Bottom part */}
         <div className="w-full grid grid-cols-1 md:mt-2 grid-rows-[auto_auto]  h-auto mm:gap-2 lg:grid-cols-[700px_minmax(0,1fr)]">

        <div className="flex flex-col w-full h-auto">

          {/* Features, Contributions, Skills */}
          
          <div className="grid grid-cols-1  mm:gap-2 overflow-hidden">
         <Wrapper
         title="Features"
         h1Class="text-greenFont ml-2"
          iconClass="ri-pushpin-2-line mr-2"
          className="bg-white h-[30rem] md:h-[18rem] gap-2 sm:h-[12rem] mm:rounded-xl"
        >
          <Features />
        </Wrapper>

        <Contribution/>
        </div>
          <Myexpertise/>
        </div>

        {/* Footer, Expertise */}
      <div className="grid grid-cols-1 w-full lg:grid-rows-[330px_auto] h-auto mm:gap-2 ">
        <Myskills/>
        <Footer />

      </div>
      </div>
      </div>
      <Resumemodal openResume={openResume} resumeClose={()=>setResume(false)}/>
    </>
  );
};

export default Mainhome;
