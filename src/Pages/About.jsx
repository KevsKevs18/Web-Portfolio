import React, { useState } from "react";
import Wrapper from "../Components/Wrapper.jsx";
import Profile from "../Components/About/profile.jsx";
import Aboutme from "../Components/About/aboutme.jsx";
import Features from "../Components/Home/Features.jsx";
import Certificates from "../Components/About/Certificates.jsx";
import profile from "../assets/Kevin.JPG";
import tcu from "../assets/TCU.png";
import moreh from "../assets/Moreh.png";
import VSSI from "../assets/VSSI.jpg";
import UNO from "../assets/UNO.jpg";
import Education from "../Components/About/Education.jsx";
import Footer from "../Components/Footer.jsx";
import Experience from "../Components/About/Experience.jsx";
import Aboutbanner from "../Components/About/Aboutbanner.jsx";
import { NavLink } from "react-router-dom";

const About = () => {
 
  const buttons = [ 
    {label: "My Education", id: "B", icon:"ri-book-open-line", component: <Education/>}, 
    {label: "Work Experience", id: "C", icon:"ri-computer-line", component: <Experience/>}
  ]

  const [active, setIsActive] = useState ("B")

  

  return (
    <>
      <div className="flex flex-col items-center w-full min-h-screen mm:px-2">
        <Aboutbanner />
        <div className="grid grid-cols-1 grid-rows-auto w-full mm:mt-2 h-auto bg-white mm:rounded-xl">
          <Aboutme/>
          <ul className="flex w-full pb-4 mt-4 mm:px-4 lg:hidden">
            {buttons.map ((btn, id)=> (
            <li key={btn.id} onClick={()=> { setIsActive(btn.id)}} className={`mr-2 w-full hover:text-greenFont flex sm:mb-4 cursor-pointer font-medium justify-center text-[1rem] ${active === btn.id ? "border-b-[2px] border-black pb-2" : "none"}`}><span className={`mr-2 ${btn.icon}`}></span>{btn.label}</li>
            ))}
          </ul>
        </div>

            <div className="flex lg:gap-2 justify-center w-full mm:mt-2 rounded-lg h-full">
              <div className="bg-white rounded-xl">
             <Education className="hidden lg:flex" tcuPic={tcu} morehPic={moreh}/>
             </div>
             <div className="bg-white rounded-xl">
             <Experience className="hidden lg:flex" work1Pic={VSSI} work2Pic={UNO}/>
             </div>
              <div className="bg-white w-full h-full rounded-xl lg:hidden">
                {active === "B" && <Education className="lg:hidden" tcuPic={tcu} morehPic={moreh}/>}
                {active === "C" && <Experience className="lg:hidden" work1Pic={VSSI} work2Pic={UNO}/>}
                
              </div>

            </div>

      </div>
      {/* 

         <Wrapper
          title="Certificates"
          iconClass="ri-medal-line"
          className="min-h-[22rem] md:min-h-[18rem]"
        >
          <Certificates certPic={profile} />
        </Wrapper>


      <div className="flex flex-col w-full min-h-[35rem] lg:min-h-screen lg:w-[45rem] lg:ml-4">
        <Wrapper
          title="Education"
          iconClass="ri-book-open-line"
          className="min-h-[22rem] md:min-h-[18rem] lg:mt-0"
        >
          <Education tcuPic={tcu} morehPic={moreh} />
        </Wrapper>
        
        <Wrapper
          title="Experience"
          iconClass="ri-user-follow-line"
          className="min-h-[22rem] md:min-h-[18rem]"
        >
          
          <Experience work1Pic={VSSI} work2Pic={UNO}/>
        </Wrapper>
        <Footer />
      </div>
      */}
    </>
  );
};

export default About;
