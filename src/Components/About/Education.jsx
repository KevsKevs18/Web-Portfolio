import React from "react";
import { useState } from "react";

const Education = ({ tcuPic, morehPic}) => {

    const [isExpanded, setExpanded] = useState([false, false]);

   const openEduc = (index) => {
    console.log("Toggling Educ");
    setExpanded((prev) => prev.map((item, i) => (i === index ? !item : item)));
   };

  return (
    <div className="flex flex-col gap-2 my-3 w-full min-h-[18rem] md:min-h-[16rem] lg:min-h-[18rem] items-center px-4">
      <div className="flex gap-2 min-h-[9rem] w-full">
        <img
          src={tcuPic}
          alt="Cert Pic"
          className="h-[3rem] w-[3rem] rounded-lg"
        />
        <div>
       <div className={`transition-all ${isExpanded[0] ? "" : "line-clamp-5"}`}>
          <h6 className="font-bold">BS Computer Science</h6>
          <p className="font-normal">Taguig City University</p>
          <small className="text-gray-500 mt-1">
            <span className="ri-calendar-2-line mr-2"></span> July 2018 - August
            2022
          </small>
          <h6 className="font-Inter text-[.9rem] font-normal">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi nobis
            amet quis consequuntur ex eaque quam soluta, eveniet dignissimos
            doloribus et, quisquam quasi debitis veritatis quae, facere in
            architecto voluptates!
          </h6>
        </div>
        <button
        className="text-blue-500 cursor-pointer"
        onClick={() => openEduc(0)}
      >
        {isExpanded[0] ? "see less" : "see more.."}
      </button>
      </div>
      </div>

        <div className="flex gap-2 min-h-[9rem] w-full">
        <img
          src={morehPic}
          alt="Cert Pic"
          className="h-[3rem] w-[3rem] rounded-lg"
        />
        <div>
       <div className={`transition-all ${isExpanded[1] ? "" : "line-clamp-5"}`}>
          <h6 className="font-bold">Science Technology Engineering & Mathematics</h6>
          <p className="font-normal">Moreh Academy Inc.</p>
          <small className="text-gray-500 mt-1">
            <span className="ri-calendar-2-line mr-2"></span> July 2016 - July
            2018
          </small>
          <h6 className="font-Inter text-[.9rem] font-normal">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi nobis
            amet quis consequuntur ex eaque quam soluta, eveniet dignissimos
            doloribus et, quisquam quasi debitis veritatis quae, facere in
            architecto voluptates!
          </h6>
        </div>
        <button
        className="text-blue-500 cursor-pointer"
        onClick={() => openEduc(1)}
      >
        {isExpanded[1] ? "see less" : "see more.."}
      </button>
      </div>
      </div>

    </div>
  );
};

export default Education;
