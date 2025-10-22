import React from "react";
import couplepic from '../../assets/couplepicture.jpg'
import porfoliopic from '../../assets/portfoliopicture.jpg'

const Features = () => {


  const featureProject = [
    {title: "My Portfolio", img: porfoliopic, link: "https://kevinwebportfolio.vercel.app/"},
    {title: "Travel Blog Website", img: couplepic, link: "https://travel-website-kevin.vercel.app/"},
  ];

  const clickProj = (link) => {

    window.open(link, "_blank");
  }

  return (
    <>
      <div className="flex flex-col w-full h-full sm:flex-row md:flex-row">
      {featureProject.map ((proj, index) => (
      
        <div key={index} onClick={()=> clickProj(proj.link)} className="h-full flex flex-col p-2 rounded-xl justify-center items-center w-full">
         <p className="font-bold font-Inter mb-2 text-black text-[1rem]">{proj.title}</p>
          <div className="w-full h-full rounded-lg overflow-hidden">
          <div className="aspect-[16/9]  rounded-lg flex bg-center bg-no-repeat justify-center transition-transfrom hover:scale-105 duration-300 cursor-pointer"
          style={{backgroundImage: `url(${proj.img})`,
                  backgroundSize: "100% 100%"
                 }}
         >
          </div>

          </div>
         
          
          
        </div>
      
      ))}
      </div>
    </>
  );
};

export default Features;
