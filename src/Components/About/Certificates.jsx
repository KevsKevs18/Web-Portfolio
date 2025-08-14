import React from "react";

const Certificates = ({ certPic }) => {
  return (
    <div className="flex flex-col gap-2 my-3 w-full min-h-[20rem] items-center px-4">
      <div className="flex gap-2 h-[5rem] w-full">
        <img
          src={certPic}
          alt="Cert Pic"
          className="h-[3rem] w-[3rem] rounded-lg"
        />
        <div>
          <h6 className="font-bold text-[18px]">React Basics</h6>
          <p className="font-normal">Hacker Rank</p>
          <h6 className="text-gray-500 mt-1">
            <span className="ri-calendar-2-line mr-2"></span> Issued Aug 2025
          </h6>
        </div>
        <button className="text-[1rem] ml-auto mb-auto px-4 py-1 border-gray-300 border-2 rounded-lg overflow-x-hidden">
          <span className="ri-external-link-line md:hidden text-gray-500"></span>
          <small className="hidden md:flex text-[.9rem] text-gray-500">
            <span className="ri-external-link-line md:mr-2"></span>Show
            Credentials
          </small>
        </button>
      </div>

      <div className="flex gap-2 h-[5rem] w-full">
        <img
          src={certPic}
          alt="Cert Pic"
          className="h-[3rem] w-[3rem] rounded-lg"
        />
        <div>
          <h6 className="font-bold text-[18px]">React Basics</h6>
          <p className="font-normal">Hacker Rank</p>
          <h6 className="text-gray-500 mt-1">
            <span className="ri-calendar-2-line mr-2"></span> Issued Aug 2025
          </h6>
        </div>
        <button className="text-[1rem] ml-auto mb-auto px-4 py-1 border-gray-300 border-2 rounded-lg overflow-x-hidden">
          <span className="ri-external-link-line md:hidden text-gray-500"></span>
          <small className="hidden md:flex text-[.9rem] text-gray-500">
            <span className="ri-external-link-line md:mr-2"></span>Show
            Credentials
          </small>
        </button>
      </div>

      <div className="flex gap-2 h-[5rem] w-full">
        <img
          src={certPic}
          alt="Cert Pic"
          className="h-[3rem] w-[3rem] rounded-lg"
        />
        <div>
          <h6 className="font-bold text-[18px]">React Basics</h6>
          <p className="font-normal">Hacker Rank</p>
          <h6 className="text-gray-500 mt-1">
            <span className="ri-calendar-2-line mr-2"></span> Issued Aug 2025
          </h6>
        </div>
        <button className="text-[1rem] ml-auto mb-auto px-4 py-1 border-gray-300 border-2 rounded-lg overflow-x-hidden">
          <span className="ri-external-link-line md:hidden text-gray-500"></span>
          <small className="hidden md:flex text-[.9rem] text-gray-500">
            <span className="ri-external-link-line md:mr-2"></span>Show
            Credentials
          </small>
        </button>
      </div>

      <div className="flex gap-2 h-[5rem] w-full">
        <img
          src={certPic}
          alt="Cert Pic"
          className="h-[3rem] w-[3rem] rounded-lg"
        />
        <div>
          <h6 className="font-bold text-[18px]">React Basics</h6>
          <p className="font-normal">Hacker Rank</p>
          <h6 className="text-gray-500 mt-1">
            <span className="ri-calendar-2-line mr-2"></span> Issued Aug 2025
          </h6>
        </div>
        <button className="text-[1rem] ml-auto mb-auto px-4 py-1 border-gray-300 border-2 rounded-lg overflow-x-hidden">
          <span className="ri-external-link-line md:hidden text-gray-500"></span>
          <small className="hidden md:flex text-[.9rem] text-gray-500">
            <span className="ri-external-link-line md:mr-2"></span>Show
            Credentials
          </small>
        </button>
      </div>
    </div>
  );
};

export default Certificates;
