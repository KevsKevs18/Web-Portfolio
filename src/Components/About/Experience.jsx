import React, { useState } from 'react'

const Experience = ({work1Pic, work2Pic}) => {

    const [isExpanded, setExpanded] = useState([false, false]);

    const openExperience = (index) => {
        setExpanded((prev => prev.map((item,i) => (i === index ? !item : item))));
    };




  return (
     <div className="flex flex-col gap-2 my-3 w-full min-h-[18rem] md:min-h-[16rem] lg:min-h-[18rem] items-center px-4">
      <div className="flex gap-2 min-h-[9rem] w-full">
        <img
          src={work1Pic}
          alt="Cert Pic"
          className="h-[3rem] w-[3rem] mr-2 rounded-lg"
        />
        <div>
       <div className={`transition-all ${isExpanded[0] ? "" : "line-clamp-5"}`}>
          <h6 className="font-bold">Client Service Executive / Implant Technical Support</h6>
          <p className="font-normal">Vanguard Screening Solution Inc.</p>
          <small className="text-gray-500 mt-1">
            <span className="ri-calendar-2-line mr-2"></span> October 2022 - Present
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
       <div className={`transition-all ${isExpanded[1] ? "" : "line-clamp-5"}`}>
          <h6 className="font-bold">Sales Clerk / Stock Crew</h6>
          <p className="font-normal">Uno Factory Outlet</p>
          <small className="text-gray-500 mt-1">
            <span className="ri-calendar-2-line mr-2"></span> April 2017 - July
            2017
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
        onClick={() => openExperience(1)}
      >
        {isExpanded[1] ? "see less" : "see more.."}
      </button>
      </div>
      </div>

    </div>
  )
}

export default Experience