import React from "react";

const Features = () => {
  return (
    <>
    
        <div className="overflow-x-auto overflow-y-hidden scrollbar-hide snap-x snap-mandatory scroll-smooth my-3 px-5 w-full h-full">
          <div className="flex w-full h-[73%] gap-4 md:w-[50%] items-center">
            <div className="snap-center shrink-0 w-full h-full rounded-xl">
              <div className="Card bg-sidebar w-full h-full rounded-xl" />
              <div className="Card-Info flex flex-col p-3">
                <h5 className="font-bold mb-2">My First Ever Project</h5>
                <p className="text-[.9rem] text-gray-400">
                  <span className="ri-time-line mr-2"></span>July 30, 2025
                </p>
              </div>
            </div>

            <div className="snap-center shrink-0 w-full h-full rounded-xl">
              <div className="Card bg-sidebar w-full h-full rounded-xl" />
              <div className="Card-Info flex flex-col p-3">
                <h5 className="font-bold mb-2">My First Ever Project</h5>
                <p className="text-[.9rem] text-gray-400">
                  <span className="ri-time-line mr-2"></span>July 30, 2025
                </p>
              </div>
            </div>

            <div className="snap-center shrink-0 w-full h-full rounded-xl">
              <div className="Card bg-sidebar w-full h-full rounded-xl" />
              <div className="Card-Info flex flex-col p-3">
                <h5 className="font-bold mb-2">My First Ever Project</h5>
                <p className="text-[.9rem] text-gray-400">
                  <span className="ri-time-line mr-2"></span>July 30, 2025
                </p>
              </div>
            </div>
          </div>
        </div>
  
    </>
  );
};

export default Features;
