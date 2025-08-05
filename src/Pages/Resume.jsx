import React from 'react'
import resume from '../assets/Resume.jpg'
import Footer from '../Components/Footer';

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
    
    <div className='flex flex-col w-full min-h-screen'> 
    <div className='w-full min-h-screen  overflow-x-hidden p-2 bg-bgcolor mt-1 flex flex-col items-center md:md:rounded-xl'>
        <div className='flex justify-between items-center flex-row w-full my-2 px-2'>
        <h4 className="text-[1.3rem] ml-4 font-Londrina font-bold">
            <span className="ri-file-list-3-line mr-3"></span>Resume
          </h4>
          <button className='text-[1rem] px-4 font-Londrina font-bold border rounded-lg border-blackg' onClick={download}><span className='ri-file-download-line mr-2'></span>Download</button>
          </div>
          <div className='pdf-container w-[90%] h-[90%] lg:w-[95%] md:h-full bg-sidebar flex justify-center my-4 pt-2 rounded-xl'>
            <iframe src="https://drive.google.com/file/d/1heeeDwyiEhukq4y758JZI989MCsOK-Ay/preview" title="resume" className='w-full h-full md:w-[90%]'></iframe>
          </div>
    </div>
    <Footer/>
    </div>
   
  )
}

export default Resume