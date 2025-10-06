import React from "react";

const Features = () => {


  const featureProject = [
    {title: "My Portfolio"},
    {title: "Travel Blog Website"},
  ];

  return (
    <>
      <div className="flex flex-col w-full h-full sm:flex-row md:flex-row">
      {featureProject.map ((blog, index) => (
        <div key={index} className="h-full flex flex-col p-2 rounded-xl justify-center items-center w-full">
         
          <div className="w-full h-full bg-greenFont rounded-lg flex justify-center pt-2">
           <p className="font-bold font-Inter text-white text-[1rem]">{blog.title}</p>
          </div>
          
        </div>
      ))}
      </div>
    </>
  );
};

export default Features;
