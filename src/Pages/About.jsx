import React from "react";
import Wrapper from "../Components/Wrapper.jsx";
import Profile from "../Components/About/profile.jsx";
import Aboutme from "../Components/About/aboutme.jsx";
import Features from "../Components/Home/Features.jsx";

const About = () => {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <Profile />

      <Wrapper
        title="About"
        iconClass="ri-user-5-line"
        className="min-h-[8rem]"
      >
        <Aboutme />
      </Wrapper>

      <Features />
    </div>
  );
};

export default About;
