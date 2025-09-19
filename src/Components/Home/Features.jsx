import React from "react";

const Features = () => {


  const featureProject = [
    {title: "My Portfolio"},
    {title: "Travel Blog Website"},
  ];

  return (
    <>
      <div className="flex flex-col w-full h-full sm:flex-row md:flex-col">
      {featureProject.map ((blog, index) => (
        <div key={index} className="h-full flex flex-col p-2 rounded-xl justify-center items-center w-full">
         
          <div className="w-full h-full bg-lightblue rounded-lg flex justify-center pt-2">
           <h3 className="font-bold font-Inter text-black-g sm:text-[.8rem]">{blog.title}</h3>
          </div>
          
        </div>
      ))}
      </div>
    </>
  );
};

export default Features;
