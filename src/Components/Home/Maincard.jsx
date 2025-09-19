import React from "react";

const Maincard = () => {
  const titleCard = [
    { title: "Experience", count: 0, icon: "ri-time-line" },
    { title: "Certificate", count: 0, icon: "ri-medal-line" },
    { title: "Projects", count: 0, icon: "ri-projector-line" },
    { title: "Technologies", count: 0, icon: "ri-code-box-line" },
  ];

  return (
    <>
      {titleCard.map((card, index) => (
        <div
          key={index}
          className="bg-lightblue h-full overflow-hidden w-full pb-2  rounded-xl flex flex-col px-2 justify-center items-center"
        >
          <div className="flex flex-col w-[90%] h-full bg-transparent items-center">
            <div className="flex flex-row h-full w-full">
              <span className={`${card.icon} text-[1.5rem] sm:text-[1rem] mr-5`}></span>

              <h6
                className="text-[2.3rem] mm:text-[1.5rem] mr-2 text-projects font-medium">
                  {card.count}
                
              </h6>
            </div>
            <h6 className="text-[1rem] mm:text-[.8rem] sm:text-[.8rem] font-bold self-start mt-auto">{card.title}</h6>
          </div>
        </div>
      ))}
      
    </>
  );
};

export default Maincard;
