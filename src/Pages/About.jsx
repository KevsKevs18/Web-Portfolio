import React from "react";
import Wrapper from "../Components/Wrapper.jsx";
import Profile from "../Components/About/profile.jsx";
import Aboutme from "../Components/About/aboutme.jsx";
import Features from "../Components/Home/Features.jsx";
import Certificates from "../Components/About/Certificates.jsx";
import profile from "../assets/Kevin.JPG";
import tcu from "../assets/TCU.PNG";
import moreh from "../assets/Moreh.PNG";
import VSSI from "../assets/VSSI.JPG";
import UNO from "../assets/UNO.JPG";
import Education from "../Components/About/Education.jsx";
import Footer from "../Components/Footer.jsx";
import Experience from "../Components/About/Experience.jsx";

const About = () => {
  return (
    <>
      <div className="flex flex-col w-full min-h-screen">
        <Profile />
        <Wrapper
          title="About"
          iconClass="ri-user-5-line"
          className="min-h-[8rem] lg:min-h-[6rem]"
        >
          <Aboutme />
        </Wrapper>
        <Wrapper
          title="Featured"
          iconClass="ri-pushpin-2-line"
          className="h-[22rem] md:h-[18rem]"
        >
          <Features />
        </Wrapper>
        <Wrapper
          title="Certificates"
          iconClass="ri-medal-line"
          className="min-h-[22rem] md:min-h-[18rem]"
        >
          <Certificates certPic={profile} />
        </Wrapper>
      </div>

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
    </>
  );
};

export default About;
