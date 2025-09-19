import React from 'react'
import Html from "../../assets/html5.svg";
import react from "../../assets/react.svg";
import mysql from "../../assets/mysql.svg";
import express from "../../assets/expressdotcom.svg";
import tailwind from "../../assets/tailwindcss.svg";
import Wrapper from "../../Components/Wrapper.jsx"

const Skills = () => {

    const skills = [
    { name: "HTML", src: Html },
    { name: "TAILWIND", src: tailwind },
    { name: "REACT", src: react },
    { name: "DATABASE", src: mysql },
    { name: "EXPRESS JS", src: express },
  ];
  const doubled = [...skills, ...skills, ...skills];

  return (
     <Wrapper
          title="My Skills"
          iconClass="ri-flashlight-line"
          className="h-[9rem] overflow-hidden items-center relative mm:mt-2 mm:rounded-xl"
          h1Class="mb-4"
        >
          <div className="animate-scroll-slow  flex justify-start my-3 px-5 w-max h-1/2 whitespace-nowrap">
            {doubled.map((skill, index) => (
              <div key={index} className="inline-block mx-6 text-center">
                <img
                  src={skill.src}
                  className="w-[3rem] h-[3rem] sm:w-[2rem] sm:h-[2rem]"
                  alt={skill.name}
                />
                <span className="font-bold sm:text-[.8rem]">{skill.name}</span>
              </div>
            ))}
          </div>
        </Wrapper>
  )
}

export default Skills