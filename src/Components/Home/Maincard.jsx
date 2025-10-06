import React from "react";
import comps from "../../assets/comps.png"
import folder from "../../assets/folder.png"
import trophy from "../../assets/trophy.png"
import wifi from "../../assets/wifi.png"

const Maincard = () => {
  const titleCard = [
    { title: "Experience", count: 3, icon: comps },
    { title: "Certificate", count: 6, icon: trophy },
    { title: "Projects", count: 3, icon: folder },
    { title: "Technologies", count: 10, icon: wifi },
  ];

  return (
    <>
      {titleCard.map((card, index) => (
        <div
          key={index}
          className="bg-white shadow-shadowLight mb-2 h-full overflow-hidden w-full pb-2   rounded-xl flex flex-col px-2 justify-center items-center"
        >
          <div className="flex flex-col w-[90%] h-auto  bg-transparent items-center">
            <div className="flex flex-row h-full w-full mb-2 justify-center">

              <h6
                className="text-[2.3rem] text-greenFont mm:text-[1.5rem] mr-2 font-bold">
                  {card.count}
                
              </h6>
              <img src={card.icon} alt="" className="w-[4rem] h-[4rem]"/>
            </div>
            <p className="text-[1rem] text-greenFont font-bold">{card.title}</p>
          </div>
        </div>
      ))}
      
    </>
  );
};

export default Maincard;
