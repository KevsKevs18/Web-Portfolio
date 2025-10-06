import React, { useState } from "react";
import profile from "../assets/Kevin.JPG";
import { NavLink, useNavigate } from "react-router-dom";

const Sidebar = ({ isOpen, closeNav, openNav }) => {
  const navigate = useNavigate();

  const activeClass =
    "hover:text-bgcolor text-white flex transition-colors duration-200 py-2 pl-4 text-blackg cursor-pointer font-medium";

  const normalClass =
    "hover:text-customBlue transition-colors flex duration-200 py-2 pl-4 text-bgcolor cursor-pointer font-medium";

  return (
    <div
      className={`flex flex-col bg-greenFont justify-start fixed w-0 h-[100dvh] shadow-lg py-4  z-[50] shrink-0 top-0 left-0 transition-[0.5s] 
    ${
      isOpen ? "w-[10rem]" : "mm:w-[4rem]"
    }  mm:sticky mm:mt-4 mm:rounded-xl mm:ml-2`}
    >
      <div className="flex flex-col w-full h-[8rem] flex-wrap pl-4 relative">
        <h3 className={`text-white w-full justify-center mt-6 font-bold italic pr-3 ${isOpen ? "text-[2.5rem] flex" : "text-[1.3rem] hidden mm:flex"}`}>
          KVN
        </h3>
        <button
          className="closeBtn hidden mm:flex mm:justify-center mm:items-center mm:text-blackg mm:absolute mm:w-6 mm:h-6 mm:border-2 mm:border-blackg mm:right-0 mm:top-32 mm:rounded-full mm:bg-white mm:-translate-y-1/2 mm:translate-x-1/2"
          onClick={() => {
            if (isOpen) {
              closeNav();
            } else {
              openNav();
            }
          }}
        >
          <span className={`${isOpen ? "ri-arrow-left-double-line" : "ri-arrow-right-double-line"} text-[1rem] hover:text-blue-100`}></span>
        </button>
      </div>

      <div className={`flex flex-col w-full mt-7 ${isOpen ? "none" : "items-center"}`}>
        <ul className="flex flex-col relative">
          <NavLink
            className={({ isActive }) => (isActive ? activeClass : normalClass) }
            onClick={({ isActive }) => {
              if (isActive) return;
              closeNav();
            }}
            to="/"
          >
            {({ isActive }) => (
              <>
                {isActive && <span className="absolute left-0 ri-arrow-drop-right-line mr-2"></span>}
                <span className={`ri-home-3-line mr-4 text-white ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none mm:opacity-100"}`}></span><h1 className={isOpen ? "flex text-white" : "hidden"}>Home</h1>
                

              </>
            )}
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? activeClass : normalClass)}
            onClick={({ isActive }) => {
              if (isActive) return;
              closeNav();
            }}
            to="/about"
          >
            {({ isActive }) => (
              <>
              {isActive && <span className="absolute left-0 ri-arrow-drop-right-line mr-2"></span>}
                <span className={`ri-user-line mr-4 text-white ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none mm:opacity-100"}`}></span><h1 className={isOpen ? "flex text-white" : "hidden"}>About</h1>
                
              </>
            )}
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? activeClass : normalClass)}
            onClick={({ isActive }) => {
              if (isActive) return;
              closeNav();
            }}
            to="/projects"
          >
            {({ isActive }) => (
              <>
              {isActive && <span className="absolute left-0 ri-arrow-drop-right-line mr-2"></span>}
                <span className={`ri-folder-2-line mr-4 text-white ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none mm:opacity-100"}`}></span><h1 className={isOpen ? "flex text-white" : "hidden"}>Projects</h1>
              
              </>
            )}
          </NavLink>
        </ul>
      </div>

      <div className="flex flex-col mt-auto font-mono justify-center items-center w-full flex-wrap transition-ease-in-out">
         <span className={`${isOpen ? "hidden" : "ri-copyright-line hidden mm:flex text-[1rem] text-white"}`}></span>
        <p className={`font-sans text-[.7rem] text-white ${isOpen ? "flex" : "hidden"}`}>
          Design & Built by Kevin Olano
        </p>
        <p className={`font-sans text-[.7rem] text-white ${isOpen ? "flex" : "hidden"}`}>
          '&copy; {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
