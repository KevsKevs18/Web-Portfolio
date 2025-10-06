import React, { useState } from 'react'

const Resumemodal = ({openResume, resumeClose}) => {

    const [isLoading, setLoading] = useState(true);

    const download = () => {
    const link = document.createElement("a");
    link.href = "./resume.pdf";
    link.download = "Kevin.pdf"
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};


    if (!openResume) return null;
  return (
    <>
   
    <div className='fixed inset-0 flex p-4 z-50 bg-black/40 backdrop-blur-sm py-4 justify-center items-center'>

    <div className='bg-white flex flex-col items-center w-full h-full rounded-xl relative lg:w-[60%]'>
        <button
          onClick={resumeClose}
          className="absolute top-3 right-3 text-[1rem] text-greenFont hover:text-red-500"
        ><span className='ri-close-fill'></span></button>

        <div className='flex justify-between items-center flex-col w-full mt-8 px-2'>
        <h4 className="text-[1rem] ml-4 font-bold w-full justify-center flex">
            My Resume
          </h4>
          <small className='text-[.8rem] font-bold text-gray-g mt-2 text-center'>Results-driven professional with experience in technical support, a
             background in computer science degree, and strong skills in web development. 
             Dedicated to delivering quality work and contributing to team success. <a  onClick={download} className='text-blue-300 font-bold cursor-pointer underline'>download my resume</a></small>
          </div>

          {isLoading && (
          <div className='flex w-full h-full justify-center items-center'>
     <img src="/loading.gif" alt="Loading...." className="w-16 h-16" />
      </div>
      )}
          

        <div className='pdf-container w-[90%] h-[90%] lg:w-[95%] bg-white flex justify-center items-center my-4 pt-2 rounded-xl'>
          
            <iframe onLoad={()=> setLoading (false)} src="https://drive.google.com/file/d/1heeeDwyiEhukq4y758JZI989MCsOK-Ay/preview" title="resume" className={`w-full h-full md:w-[90%] rounded-xl ${isLoading ? "hidden" : "block"} `}></iframe>
          </div>
        
    </div>
      </div>
  

    </>
  )
}

export default Resumemodal