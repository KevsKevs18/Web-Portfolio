import React, { useState } from "react";

const Expertise = () => {
  const [IsOpen, setIsOpen] = useState([false, false, false, false]);

  const openExpert = (index) => {
    console.log("Toggling", index)
    setIsOpen(prev => prev.map((item, i) => i === index ? !item : item));
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
            <h6>
              <span className="ri-computer-line p-2 mr-2 bg-customBlue rounded"></span>
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
          <div className={`w-full ${IsOpen[0] ? "h-[10rem]" : "h-[0rem] hidden"}`}>
          <p className="">
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
            <h6>
              <span className="ri-computer-line p-2 mr-2 bg-customBlue rounded"></span>
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
          <div className={`w-full ${IsOpen[1] ? "h-[10rem]" : "h-[0rem] hidden"}`}>
          <p className="">
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
            <h6>
              <span className="ri-computer-line p-2 mr-2 bg-customBlue rounded"></span>
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
          <div className={`w-full ${IsOpen[2] ? "h-[10rem]" : "h-[0rem] hidden"}`}>
          <p className="">
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
            <h6>
              <span className="ri-computer-line p-2 mr-2 bg-customBlue rounded"></span>
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
          <div className={`w-full ${IsOpen[3] ? "h-[10rem]" : "h-[0rem] hidden"}`}>
          <p className="">
            I build web apps from scratch using React. clean, responsive, and
            built to perform. Whether it’s a landing page or a full-scale
            platform, I make sure it looks great and works even better.
          </p>
          </div>
      </div>
    </>
  );
};

export default Expertise;
