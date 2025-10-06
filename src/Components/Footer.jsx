import React from "react";
import facebook from "../assets/facebook.svg";
import github from "../assets/github.svg";
import email from "../assets/gmail.svg";

const Footer = () => {
  return (
    <div className="w-full min-h-[10rem] lg:h-[15rem] bg-white pt-4 md:pt-0 flex flex-col mm:rounded-xl">
      <h6 className="text-[1.5rem] text-greenFont m-2 font-bold w-full flex">
        Get in touch
      </h6>
      <h3 className="word-break text-[1rem] text-black-g font-bold ml-2 w-[80%]">Hey! We are looking forward to start working with you</h3>
      <div className="flex gap-3 items-center mt-2 border-l-[4px] border-blue-200 ml-2">
        <small className="mx-4 mt-1 text-[1rem] text-gray-g">
        Let’s build something great together — feel free to connect with me
        through any of the platforms above.
      </small>
      </div>
      <div className="flex gap-4 m-3 ">
        <a href="https://www.facebook.com/kevin.olano.5" target="_blank" rel="noopener noreferrer"><img src={facebook} alt="" className="w-[2rem] h-[2rem] hover:w-[3rem] hover:h-[3rem]" /></a>
        <a href="https://github.com/KevsKevs18" target="_blank" rel="noopener noreferrer"><img src={github} alt="" className="w-[2rem] h-[2rem] hover:w-[3rem] hover:h-[3rem]" /></a>
        <a href="mailto:kevinolano00018@gmail.com" target="_blank" rel="noopener noreferrer"><img src={email} alt="" className="w-[2rem] h-[2rem] hover:w-[3rem] hover:h-[3rem]" /></a>
      </div>

      
    </div>
  );
};

export default Footer;
