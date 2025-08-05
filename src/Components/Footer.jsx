import React from "react";
import facebook from "../assets/facebook.svg";
import github from "../assets/github.svg";
import email from "../assets/gmail.svg";

const Footer = () => {
  return (
    <div className="Card Stats  w-full min-h-[10rem] lg:h-[11rem] bg-bgcolor flex flex-col mt-2 md:rounded-xl">
      <h4 className="text-[1.3rem] ml-4 mt-2 font-Londrina font-black">
        <span className="ri-mail-unread-line mr-3"></span>Get in touch
      </h4>
      <div className="flex gap-4 m-3">
        <a href="https://www.facebook.com/kevin.olano.5" target="_blank" rel="noopener noreferrer"><img src={facebook} alt="" className="w-[2.5rem] h-[2.5rem] hover:w-[3rem] hover:h-[3rem]" /></a>
        <a href="https://github.com/KevsKevs18" target="_blank" rel="noopener noreferrer"><img src={github} alt="" className="w-[2.5rem] h-[2.5rem] hover:w-[3rem] hover:h-[3rem]" /></a>
        <a href="mailto:kevinolano00018@gmail.com" target="_blank" rel="noopener noreferrer"><img src={email} alt="" className="w-[2.5rem] h-[2.5rem] hover:w-[3rem] hover:h-[3rem]" /></a>
      </div>

      <small className="mx-4 mt-1 text-gray-g">
        Let’s build something great together — feel free to connect with me
        through any of the platforms above.
      </small>
    </div>
  );
};

export default Footer;
