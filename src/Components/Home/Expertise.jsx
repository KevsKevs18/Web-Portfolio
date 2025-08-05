import React, { useState } from "react";

const Expertise = () => {
  const [IsOpen, setIsOpen] = useState([false, false, false, false]);

  const openExpert = (index) => {
    console.log("Toggling", index);
    setIsOpen((prev) => prev.map((item, i) => (i === index ? !item : item)));
  };

  return (
    <>
      <div className="Container flex flex-col h-full w-full p-4 mt-2 overflow-hidden">
        {/* List */}
        <div
          className="w-full flex flex-col transition-all duration-300
            max-h-[3rem]"
        >
          <div className="h-[3rem] w-full border-b-[2px] flex justify-between items-center pb-2">
            <h6 className="font-bold">
              <span className="ri-computer-line p-2 mr-2 bg-sidebar text-bgcolor rounded-full"></span>
              Web Development
            </h6>
            <span
              className={
                IsOpen[0] ? "ri-arrow-up-s-line" : "ri-arrow-down-s-line"
              }
              onClick={() => openExpert(0)}
            ></span>
          </div>
        </div>
        <div className={`w-full ${IsOpen[0] ? "h-[7rem] md:h-[4rem] lg:h-[8rem]" : "h-[0rem] hidden"}`}>
          <p className="font-sans mt-1">
            I build web apps from scratch using React. clean, responsive, and
            built to perform. Whether it’s a landing page or a full-scale
            platform, I make sure it looks great and works even better.
          </p>
        </div>

        <div
          className="w-full flex flex-col transition-all duration-300
            max-h-[3rem]"
        >
          <div className="h-[3rem] w-full border-b-[2px] flex justify-between items-center pb-2">
            <h6 className="font-bold">
              <span className="ri-brush-line p-2 mr-2 bg-sidebar text-bgcolor rounded-full"></span>
              Graphic Design
            </h6>
            <span
              className={
                IsOpen[1] ? "ri-arrow-up-s-line" : "ri-arrow-down-s-line"
              }
              onClick={() => openExpert(1)}
            ></span>
          </div>
        </div>
        <div className={`w-full ${IsOpen[1] ? "h-[7rem] md:h-[4rem] lg:h-[8rem]" : "h-[0rem] hidden"}`}>
          <p className="font-sans mt-1">
            Designing eye-catching visuals is my thing. ebooks, posters,
            infographics, you name it. I blend tools like Photoshop and
            Publisher to bring creative ideas to life.
          </p>
        </div>

        <div
          className="w-full flex flex-col transition-all duration-300
            max-h-[3rem]"
        >
          <div className="h-[3rem] w-full border-b-[2px] flex justify-between items-center pb-2">
            <h6 className="font-bold">
              <span className="ri-search-eye-line p-2 mr-2 bg-sidebar text-bgcolor rounded-full"></span>
              Digitan Marketing
            </h6>
            <span
              className={
                IsOpen[2] ? "ri-arrow-up-s-line" : "ri-arrow-down-s-line"
              }
              onClick={() => openExpert(2)}
            ></span>
          </div>
        </div>
        <div className={`w-full ${IsOpen[2] ? "h-[7rem] md:h-[4rem] lg:h-[8rem]" : "h-[0rem] hidden"}`}>
          <p className="font-sans mt-1">
            I’ve been in affiliate marketing for years. running strategic
            campaigns, creating ad content, and promoting products that convert.
            It’s all about smart strategy and solid execution.
          </p>
        </div>

        <div
          className="w-full flex flex-col transition-all duration-300
            max-h-[3rem]"
        >
          <div className="h-[3rem] w-full border-b-[2px] flex justify-between items-center pb-2">
            <h6 className="font-bold">
              <span className="ri-artboard-2-line p-2 mr-2 bg-sidebar text-bgcolor rounded-full"></span>
              UI / UX Design
            </h6>
            <span
              className={
                IsOpen[3] ? "ri-arrow-up-s-line" : "ri-arrow-down-s-line"
              }
              onClick={() => openExpert(3)}
            ></span>
          </div>
        </div>
        <div
          className={`w-full ${IsOpen[3] ? "h-[6rem] md:h-[2.5rem]" : "h-[0rem] hidden"}`}
        >
          <p className="font-sans mt-1">
            Design isn’t just about looks it’s about how it feels. I focus on
            clean, user-friendly interfaces that make sense and look polished on
            any screen.
          </p>
        </div>
      </div>
    </>
  );
};

export default Expertise;
