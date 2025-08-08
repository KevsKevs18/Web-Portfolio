import React from "react";
import Wrapper from "../Components/Wrapper.jsx";
import Profile from "../Components/About/profile.jsx";
import Aboutme from "../Components/About/aboutme.jsx";
import Features from "../Components/Home/Features.jsx";
import Certificates from "../Components/About/Certificates.jsx";
import profile from '../assets/Kevin.JPG'

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
       <Wrapper 
          title="Featured"
          iconClass="ri-pushpin-2-line"
          className="h-[22rem] md:h-[18rem]">
        <Features />
        </Wrapper>
        <Wrapper 
          title="Certificates"
          iconClass="ri-medal-line"
          className="min-h-[22rem] md:min-h-[18rem]">
        <Certificates certPic={profile}/>
        </Wrapper>
    </div>
  );
};

export default About;
