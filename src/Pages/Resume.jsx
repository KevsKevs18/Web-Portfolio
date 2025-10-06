import React, { useState } from 'react'
import Footer from '../Components/Footer';
import { ClipLoader } from "react-spinners";



const Resume = () => {

  const [isLoading, setLoading] = useState(true);

const download = () => {
    const link = document.createElement("a");
    link.href = "./resume.pdf";
    link.download = "Kevin.pdf"
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};


  return (
    
    <div className='flex flex-col w-full min-h-screen mm:mt-4 mm:gap-2 mm:px-2'> 
    <div className='w-full min-h-screen overflow-x-hidden p-2 bg-wrapperColor flex flex-col items-center mm:rounded-xl'>
        <div className='flex justify-between items-center flex-col w-full my-2 px-2'>
        <h4 className="text-[1.44rem] md:text-[1.2rem] ml-4 font-bold w-full justify-center flex">
            My Resume
          </h4>
          <p className='text-[1rem] font-bold text-gray-g mt-2 text-center'>Results-driven professional with experience in technical support, a
             background in computer science degree, and strong skills in web development. 
             Dedicated to delivering quality work and contributing to team successaadsafdsaw. <a  onClick={download} className='text-blue-300 font-bold cursor-pointer underline'>download my resume</a></p>
          
            
             
          
          </div>

          
          
          <div className='pdf-container w-[90%] h-[90%] lg:w-[95%] flex justify-center my-4 pt-2 rounded-xl'>
            
            
            <iframe onLoad={()=> setLoading(false)} src="https://drive.google.com/file/d/1heeeDwyiEhukq4y758JZI989MCsOK-Ay/preview" title="resume" className={`w-full h-full md:w-[90%] rounded-xl ${isLoading ? "hidden" : "block"} `}></iframe>

          </div>
    </div>
    <Footer/>
    </div>
   
  )
}

export default Resume