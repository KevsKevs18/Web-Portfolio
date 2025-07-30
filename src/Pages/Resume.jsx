import React from 'react'
import resume from '../assets/Resume.jpg'

const Resume = () => {

const download = () => {
    const link = document.createElement("a");
    link.href = "./resume.pdf";
    link.download = "Kevin.pdf"
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};


  return (
    <div className='w-full h-full p-2 bg-bgcolor flex flex-col items-center md:md:rounded-xl'>
        <div className='flex justify-between items-center flex-row w-full my-2 px-2'>
        <h4 className="text-[1.3rem] ml-4 font-Londrina font-bold">
            <span className="ri-file-list-3-line mr-3"></span>Resume
          </h4>
          <button className='text-[1rem] px-4 font-Londrina font-bold border rounded-lg border-blackg' onClick={download}><span className='ri-file-download-line mr-2'></span>Download</button>
          </div>
          <div className='pdf-container w-[90%] h-[70%] bg-sidebar flex justify-center overflow-y-auto mt-4 pt-2 rounded-xl'>
            <img src={resume} className='w-[80%] h-[500px] md:w-[60%] block'/>
          </div>
    </div>
  )
}

export default Resume