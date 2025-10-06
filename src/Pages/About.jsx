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
    {label: "About Me", id: "A", icon:"ri-user-3-line", component: <Aboutme/>}, 
    {label: "My Education", id: "B", icon:"ri-book-open-line", component: <Education/>}, 
    {label: "Work Experience", id: "C", icon:"ri-computer-line", component: <Experience/>}
  ]

  const [active, setIsActive] = useState ("A")

  

  return (
    <>
      <div className="flex flex-col bg-white items-center w-full min-h-screen">
        <Aboutbanner />
        <div className="grid grid-cols-1 w-full h-auto px-4 ">
          <h3 className="w-full flex text-[.9rem] text-gray-g font-bold justify-center text-center">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis
            consequatur quos hic, exercitationem cumque, dolore quia totam{" "}
          </h3>
          <ul className="flex flex-col justify-between items-center w-300  gap-2 mt-2 mm:flex-row  mm:px-4">
            {buttons.map ((btn, id)=> (
            <button key={btn.id} onClick={()=> { setIsActive(btn.id)}} className={` py-1 border-[2px] border-black-g w-1/2 rounded-xl flex justify-center font-bold text-[.9rem] mm:text-[.8rem] ${active === btn.id ? "bg-greenFont text-white border-white" : "none"}`}><span className={`mr-3 ${btn.icon}`}></span>{btn.label}</button>
            ))}
          </ul>
        </div>

            <div className="bg-white  w-full mt-4 rounded-lg min-h-[10rem]">

              <div>
                {active === "A" && <Aboutme/>}
                {active === "B" && <Education tcuPic={tcu} morehPic={moreh}/>}
                {active === "C" && <Experience work1Pic={VSSI} work2Pic={UNO}/>}
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
