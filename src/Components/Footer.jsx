import React from "react";
import facebook from "../assets/facebook.svg";
import github from "../assets/github.svg";
import email from "../assets/gmail.svg";

const Footer = () => {
  return (
    <div className="w-full min-h-[10rem] md:h-[11rem] bg-wrapperColor flex flex-col mm:rounded-xl">
      <h4 className="text-[1rem] m-2 font-bold w-full flex justify-center">
        <span className="ri-mail-unread-line mr-3"></span>Get in touch
      </h4>
      <div className="flex gap-4 m-3">
        <a href="https://www.facebook.com/kevin.olano.5" target="_blank" rel="noopener noreferrer"><img src={facebook} alt="" className="w-[2rem] h-[2rem] hover:w-[3rem] hover:h-[3rem]" /></a>
        <a href="https://github.com/KevsKevs18" target="_blank" rel="noopener noreferrer"><img src={github} alt="" className="w-[2rem] h-[2rem] hover:w-[3rem] hover:h-[3rem]" /></a>
        <a href="mailto:kevinolano00018@gmail.com" target="_blank" rel="noopener noreferrer"><img src={email} alt="" className="w-[2rem] h-[2rem] hover:w-[3rem] hover:h-[3rem]" /></a>
      </div>

      <small className="mx-4 mt-1 text-gray-g">
        Let’s build something great together — feel free to connect with me
        through any of the platforms above.
      </small>
    </div>
  );
};

export default Footer;
