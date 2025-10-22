import React from "react";
import Wrapper from "../Wrapper";

const Myexpertise = () => {
  const expertiseCard = [
    {
      title: "Web Development",
      description:
        "I create web applications from the ground up using React — clean, responsive, and optimized for performance. From sleek landing pages to full-scale platforms, I ensure every project looks exceptional and functions flawlessly.",
      icon: "ri-computer-line"
    },
     {
      title: "UI / UX Design",
      description:
        "Design goes beyond visuals. it’s about usability and experience. I build clean, responsive interfaces that work seamlessly across all devices.",
      icon: "ri-computer-line"
    },
     {
      title: "Graphic Design",
      description:
        "I specialize in crafting striking visual designs — whether it’s eBooks, posters, or infographics. I transform concepts into compelling visuals.",
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
            
          </div>))}
        </div>
      </div>
    </Wrapper>
  );
};

export default Myexpertise;
