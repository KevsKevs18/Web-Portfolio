import React, { useState } from "react";

const Experience = ({ work1Pic, work2Pic, className="" }) => {
  const [isExpanded, setExpanded] = useState([false, false]);

  const openExperience = (index) => {
    setExpanded((prev) => prev.map((item, i) => (i === index ? !item : item)));
  };

  return (
    <div className={`flex flex-col  gap-2 my-3 w-full min-h-[18rem] md:min-h-[16rem] lg:min-h-[18rem] items-center px-4 ${className}`}>
      <div className="flex gap-2 min-h-[9rem] w-full">
        <img
          src={work1Pic}
          alt="Cert Pic"
          className="h-[3rem] w-[3rem] mr-2 rounded-lg"
        />
        <div>
          <div
            className={`transition-[0.5s] ${
              isExpanded[0] ? "" : "line-clamp-6"
            }`}
          >
            <h3 className="font-bold">
              Client Service Executive / Implant Technical Support
            </h3>
            <p className="font-normal">Vanguard Screening Solution Inc.</p>
            <small className="text-gray-500 mt-1">
              <span className="ri-calendar-2-line mr-2"></span> October 2022 -
              Present
            </small>
            <p className="font-Inter text-[1rem] font-normal">
              Technical Support –{" "}
              <strong>Vanguard Screening Solutions Inc.</strong>
            </p>
            <p className="font-Inter text-[1rem] font-normal mt-2">
              Provided end-to-end technical assistance for candidates completing
              onboarding forms through the <strong>TYDY platform</strong>,
              ensuring a smooth and efficient user experience.
            </p>
            <p className="font-Inter text-[1rem] font-normal mt-2">
              <strong>Key Contributions & Achievements:</strong>
            </p>
            <ul className="font-Inter text-[1rem] font-normal mt-2">
              <li className="mb-2">
                Assisted candidates in troubleshooting technical issues.
              </li>
              <li className="mb-2">
                Coordinated with internal teams to escalate and resolve
                platform-related concerns.
              </li>
              <li className="mb-2">
                Ensuring candidate satisfaction and compliance with company
                standards.
              </li>
              <li className="mb-2">
                Developed clear communication skills by interacting with
                diverse candidates from different backgrounds and time zones.
              </li>
              <li className="mb-2"> 
                Demonstrated adaptability in handling multiple support
                requests while meeting tight deadlines.
              </li>
            </ul>
          </div>
          <button
            className="text-blue-500 cursor-pointer"
            onClick={() => openExperience(0)}
          >
            {isExpanded[0] ? "see less" : "see more.."}
          </button>
        </div>
      </div>

      <div className="flex gap-2 min-h-[9rem] w-full">
        <img
          src={work2Pic}
          alt="Cert Pic"
          className="h-[3rem] w-[3rem] rounded-lg"
        />
        <div>
          <div
            className={`transition-[0.5s] ${
              isExpanded[1] ? "" : "line-clamp-6"
            }`}
          >
            <h3 className="font-bold">Sales Clerk / Stock Crew</h3>
            <p className="font-normal">Uno Factory Outlet</p>
            <small className="text-gray-500 mt-1">
              <span className="ri-calendar-2-line mr-2"></span> April 2017 -
              July 2017
            </small>
            <p className="font-Inter text-[1rem] font-normal">
              Sales Clerk –<strong>Uno Factory Outlet</strong>
            </p>
            <p className="font-Inter text-[1rem] font-normal mt-2">
              Delivered excellent customer service while leveraging
              point-of-sale (POS) systems and inventory management tools to
              ensure smooth retail operations.
            </p>
            <p className="font-Inter text-[1rem] font-normal mt-2">
              <strong>Key Contributions & Achievements:</strong>
            </p>
            <ul className="font-Inter text-[1rem] font-normal mt-2 gap-2">
              <li className="mb-2">
                Assisted customers in finding products by utilizing digital
                catalog systems.
              </li>
              <li className="mb-2">
                Maintained accurate records of daily sales, showcasing strong
                attention to detail and data accuracy.
              </li>
              <li className="mb-2">
                Applied problem-solving skills to resolve customer concerns
                quickly, improving satisfaction and retention.
              </li>
            </ul>
          </div>
          <button
            className="text-blue-500 cursor-pointer"
            onClick={() => openExperience(1)}
          >
            {isExpanded[1] ? "see less" : "see more.."}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Experience;
