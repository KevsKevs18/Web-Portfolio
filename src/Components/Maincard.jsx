import React from "react";

const Maincard = () => {
  return (
    <>
      <div className="bg-bodycolor h-[8rem] w-full rounded-xl flex flex-col py-4 px-2 items-center">
        <div className="flex flex-col w-[90%] h-full bg-transparent items-center">
          <div className="flex flex-row h-full w-full">
            <div className="grid place-items-center bg-experience w-[3.1rem] h-[3rem] rounded-xl mr-2 border-[2px] border-bgcolor">
              <span className="ri-time-line text-[2rem]"></span>
            </div>
            <h6>
              <span className="text-[2.3rem] mr-2 font-Londrina font-black">
                0
              </span>
              Years
            </h6>
          </div>
          <h6 className="text-[1.2rem] self-start mt-auto">Experience</h6>
        </div>
      </div>

      <div className="bg-bodycolor h-[8rem] w-full rounded-xl flex flex-col py-4 px-2 items-center">
        <div className="flex flex-col w-[90%] h-full bg-transparent items-center">
          <div className="flex flex-row h-full w-full">
            <div className="grid place-items-center bg-certificate w-[3.1rem] h-[3rem] rounded-xl mr-2 border-[2px] border-bgcolor">
              <span className="ri-time-line text-[2rem]"></span>
            </div>
            <h6 className="text-[2.3rem] mr-2 font-Londrina font-black">0</h6>
          </div>
          <h6 className="text-[1.2rem] self-start mt-auto">Certificate</h6>
        </div>
      </div>

      <div className="bg-bodycolor h-[8rem] w-full rounded-xl flex flex-col py-4 px-2 items-center">
        <div className="flex flex-col w-[90%] h-full bg-transparent items-center">
          <div className="flex flex-row h-full w-full">
            <div className="grid place-items-center bg-projects w-[3.1rem] h-[3rem] rounded-xl mr-2 border-[2px] border-bgcolor">
              <span className="ri-time-line text-[2rem]"></span>
            </div>
            <h6 className="text-[2.3rem] mr-2 font-Londrina font-black">0</h6>
          </div>
          <h6 className="text-[1.2rem] self-start mt-auto">Projects</h6>
        </div>
      </div>

      <div className="bg-bodycolor h-[8rem] w-full rounded-xl flex flex-col py-4 px-2 items-center">
        <div className="flex flex-col w-[90%] h-full bg-transparent items-center">
          <div className="flex flex-row h-full w-full">
            <div className="grid place-items-center bg-techno w-[3.1rem] h-[3rem] rounded-xl mr-2 border-[2px] border-bgcolor">
              <span className="ri-time-line text-[2rem]"></span>
            </div>
            <h6 className="text-[2.3rem] mr-2 font-Londrina font-black">0</h6>
          </div>
          <h6 className="text-[1.2rem] self-start mt-auto">Technologies</h6>
        </div>
      </div>
    </>
  );
};

export default Maincard;
