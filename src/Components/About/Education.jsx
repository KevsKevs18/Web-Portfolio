import React from "react";
import { useState } from "react";

const Education = ({ tcuPic, morehPic }) => {
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
          <div
            className={`transition-all ${isExpanded[0] ? "" : "line-clamp-5"}`}
          >
            <h6 className="font-bold text-[18px]">BS Computer Science</h6>
            <p className="font-normal">Taguig City University</p>
            <small className="text-gray-500 mt-1">
              <span className="ri-calendar-2-line mr-2"></span> July 2018 -
              August 2022
            </small>
            <h6 className="font-Inter text-[1rem] mt-2 font-normal">
              I am a graduate of Taguig City University with a Bachelor of
              Science in Computer Science, equipped with a strong foundation in
              programming, web development, and problem-solving. During my
              academic journey, I consistently demonstrated initiative,
              leadership, and creativity both inside and outside the classroom.
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
          <div
            className={`transition-all ${isExpanded[1] ? "" : "line-clamp-5"}`}
          >
            <h6 className="font-bold text-[18px]">
              Science Technology Engineering & Mathematics
            </h6>
            <p className="font-normal">Moreh Academy Inc.</p>
            <small className="text-gray-500 mt-1">
              <span className="ri-calendar-2-line mr-2"></span> July 2016 - July
              2018
            </small>
            <h6 className="font-Inter text-[1rem] mt-2 font-normal">
              I graduated from Moreh Academy Inc. under the STEM strand
              (Science, Technology, Engineering, and Mathematics), where I
              developed a strong analytical mindset and a passion for
              innovation. My SHS years were filled with hands-on projects,
              science fairs, and technology-driven activities that sharpened my
              problem-solving and research skills.
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
