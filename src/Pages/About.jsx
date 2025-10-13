import React, { useState } from "react";
import tcu from "../assets/TCU.png";
import moreh from "../assets/Moreh.png";
import VSSI from "../assets/VSSI.jpg";
import UNO from "../assets/UNO.jpg";
import Education from "../Components/About/Education.jsx";
import Footer from "../Components/Footer.jsx";
import Experience from "../Components/About/Experience.jsx";
import AboutInfo from "../Components/About/AboutInfo.jsx";

const About = () => {
 
  const buttons = [ 
    {label: "My Education", id: "B", icon:"ri-book-open-line", component: <Education/>}, 
    {label: "Work Experience", id: "C", icon:"ri-computer-line", component: <Experience/>}
  ]

  const [active, setIsActive] = useState ("B")

  

  return (
    <>
      <div className="grid grid-cols mm:mt-4 grid-rows-[auto_auto] mm:gap-2 items-center lg:items-start w-full min-h-screen mm:px-2 overflow-hidden">
        <div className="flex h-auto w-full flex-col bg-white mm:rounded-xl">
        <AboutInfo />
        
          <ul className="flex w-full pb-4 mt-4 mm:px-4 lg:hidden">
            {buttons.map ((btn, id)=> (
            <li key={btn.id} onClick={()=> { setIsActive(btn.id)}} className={`mr-2 w-full hover:text-greenFont flex sm:mb-4 cursor-pointer font-medium justify-center text-[1rem] ${active === btn.id ? "underline underline-offset-8 decoration-4 decoration-greenFont" : "none"}`}>{btn.label}</li>
            ))}
          </ul>
        </div>
    

            <div className="flex  lg:gap-2 justify-center w-full rounded-lg h-full">
              <div className="w-full h-full  flex flex-col bg-white rounded-xl pt-2 hidden lg:flex">
                <h6 className="font-bold text-[1.22rem] ml-4 mb-2"><span className="ri-book-open-line mr-2"></span>Education</h6>
             <Education className="" tcuPic={tcu} morehPic={moreh}/>
             </div>

             <div className="w-full h-full  flex flex-col bg-white rounded-xl pt-2 hidden lg:flex">
               <h6 className="font-bold text-[1.22rem] ml-4 mb-2"><span className="ri-computer-line mr-2"></span>Work Experience</h6>
             <Experience className="" work1Pic={VSSI} work2Pic={UNO}/>
             </div>
              <div className="bg-white w-full h-full mm:rounded-xl lg:hidden">
                {active === "B" && <Education className="lg:hidden" tcuPic={tcu} morehPic={moreh}/>}
                {active === "C" && <Experience className="lg:hidden" work1Pic={VSSI} work2Pic={UNO}/>}
                
              </div>

            </div>
            <Footer className="lg:h-[12rem]"/>
      </div>
     
    </>
  );
};

export default About;
