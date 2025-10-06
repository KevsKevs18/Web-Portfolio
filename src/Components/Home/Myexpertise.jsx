import React from "react";
import Wrapper from "../Wrapper";

const Myexpertise = () => {
  const expertiseCard = [
    {
      title: "Web Development",
      description:
        "I build web apps from scratch using React. clean, responsive, and built to perform. Whether it's a landing page or a full-scale platform, I make sure it looks great and works even better.",
      icon: "ri-computer-line"
    },
     {
      title: "UI / UX Design",
      description:
        "Design isn’t just about looks it’s about how it feels. I focus on clean, user-friendly interfaces that make sense and look polished on any screen.",
      icon: "ri-computer-line"
    },
     {
      title: "Graphic Design",
      description:
        "Designing eye-catching visuals is my thing. ebooks, posters, infographics, you name it. I blend tools like Photoshop and Publisher to bring creative ideas to life.",
      icon: "ri-computer-line"
    },
  ];

  return (
    <Wrapper
      title="Our Expertise"
      h1Class=" text-greenFont w-full flex ml-2"
      iconClass="ri-microscope-line mr-2"
      className="min-h-[10rem] bg-white mm:rounded-xl mm:mt-2"
    >
      <div className="flex flex-col items-center w-full h-full">
        {/* cards */}
        <div className="grid p-4 gap-4 grid-cols-1 mt-2 grid-rows-[auto_auto_auto] md:grid-cols-3 md:grid-rows-1 h-full w-full">
            {expertiseCard.map ((expert, index) => (
          <div key={index} className="flex flex-col items-start w-full p-8 bg-greenFont shadow-shadowList rounded-xl min-h-[11rem] md:px-5">
            <h3 className="w-full flex font-bold text-white text-[1rem] md:text-[.9rem]"><span className={`${expert.icon} mr-2`}></span>
              {expert.title}
            </h3>
            <small className="mt-1 font-normal text-[.9rem] md:text-[.8rem] text-white">
             {expert.description}
            </small>
            <button className="text-[.9rem] md:text-[.8rem] cursor-pointer font-bold mt-2 text-yellowFont border-b-[2px] border-white pb-[1px]">
              View Sample <span className="ri-arrow-right-s-fill"></span>
            </button>
          </div>))}
        </div>
      </div>
    </Wrapper>
  );
};

export default Myexpertise;
