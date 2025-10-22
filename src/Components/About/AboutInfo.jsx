import React from "react";
import Wrapper from "../Wrapper";
import Kevin2 from "../../assets/Kevin2.jpg";

const AboutInfo = () => {
  return (
    <Wrapper className="p-4 gap-4 mm:flex-row mm:items-center" h1Class="hidden">
      <div className="w-full h-full flex justify-center rounded-xl">
        <img
          src={Kevin2}
          alt="My Picture"
          className="max-h-[25rem] w-auto shadow-shadowLight rounded-[0.5rem_50%_0.5rem_0.5rem] hover:rounded-[50%_0.5rem_0.5rem_0.5rem] transition-all duration-[400ms] ease-in"
        />
      </div>
      <div className="w-full h-full flex justify-center mm:items-center text-center">
        <p>
          {" "}
          I’m a Front-End Developer passionate about building clean, responsive,
          and user-friendly web applications. I love turning ideas into
          interactive experiences using modern tools like React, Tailwind CSS,
          and JavaScript. My focus is on creating smooth, visually appealing
          interfaces that work seamlessly across all devices. I’m always
          exploring new technologies to improve performance and enhance user
          experience.
        </p>
      </div>
    </Wrapper>
  );
};

export default AboutInfo;
