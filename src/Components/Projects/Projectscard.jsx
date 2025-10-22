import React from "react";
import couplepic from "../../assets/couplepicture.jpg";
import porfoliopic from "../../assets/portfoliopicture.jpg";

const Projectscard = () => {
  const projectList = [
    {
      title: "My Portfolio",
      img: porfoliopic,
      description:
        "My portfolio is a fully responsive website built with React, ensuring a smooth and adaptive experience across all devices.",
      link: "https://kevinwebportfolio.vercel.app/",
    },
    {
      title: "Couple Website",
      img: couplepic,
      description: "This couple riding website is built using the MERN stack, offering a seamless and dynamic user experience.",
      link: "https://travel-website-kevin.vercel.app/",
    },
  ];

  const clickProj = (link) => {
    window.open(link, "_blank");
  };

  return (
    <div className="w-full h-auto p-2 gap-2 grid grid-rows-auto mm:grid-cols-2 lg:grid-cols-4 mm:px-0">
      {projectList.map((list, index) => (
        <div
          key={index}
          className="bg-white rounded-xl w-full h-auto px-4 py-2 flex flex-col items-start"
        >
          <div className="flex w-full justify-between items-center">
            <h6 className="text-[1.2rem] font-medium">{list.title}</h6>
            <span className="ri-external-link-line text-[1.2rem]"></span>
          </div>
          <p className="text-gray-g mb-2">
            {list.description}
          </p>
          <div className="w-full h-full overflow-hidden rounded-lg">
            <img
              src={list.img}
              alt="sample"
              onClick={() => clickProj(list.link)}
              className="aspect-[16/9] rounded-lg transition-transform hover:scale-105 duration-300 cursor-pointer"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projectscard;
