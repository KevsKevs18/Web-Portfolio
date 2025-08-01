import React, { useState } from 'react'
import profile from '../assets/Kevin.JPG'
import { useNavigate } from 'react-router-dom'


const Sidebar = ({isOpen, closeNav}) => {

const  navigate = useNavigate();
const [active , setActive] = useState(false);

const clickactive = () => {
  setActive(!active);
};




  return (
    <div className={`flex flex-col bg-bgcolor justify-start fixed w-0 h-[100dvh] shadow-lg py-4 fixed z-[9999] shrink-0 top-0 left-0 overflow-hidden transition-[0.5s] 
    ${isOpen ? 'w-[13rem]' : 'w-0'} md:w-[13rem] md:z-[0] md:sticky md:mt-4 md:rounded-xl md:ml-2`}>

        <div className="flex flex-col w-full h-[15rem] flex-wrap pl-4 border-b-[2px]">
        <button className='closeBtn ml-auto mr-2 text-blackg md:hidden' onClick={closeNav}><span className='ri-close-line text-[1.5rem] hover:text-blue-100'></span></button>
        <img src={profile} alt="" className="h-[6rem] w-[6rem] rounded-full border-[4px] border-blackg mb-4"/>
        <h6 className="font-bold text-xl text-blackg">Kevin A. Olano</h6>
        <p className='text-blackg text-[.8rem]'>Front-End Developer</p>
        <button className="w-[90%] border-gray-300 border-2 rounded mt-2 text-blackg" onClick={()=>{clickactive(); closeNav(); navigate("/resume")}}><span className={`ri-file-download-line pr-2 ${active ? 'text-blackg' : 'text-blackg'}`}></span>Resume</button>
        </div>

        <div className='flex flex-col mt-7'>
            <ul className='flex flex-col'>
                <li className={`hover:bg-customBlue hover:text-bgcolor transition-colors duration-200 py-2 pl-4 text-blackg cursor-pointer ${active ? 'none' : 'bg-customBlue'}`} onClick={()=>{ clickactive(); closeNav(); navigate("/")}}><span className='ri-home-3-line mr-4'></span>Home</li>
                <li className='hover:bg-customBlue hover:text-bgcolor transition-colors duration-200 py-2 pl-4 text-blackg cursor-pointer'><span className='ri-user-line mr-4'></span>About</li>
                <li className='hover:bg-customBlue hover:text-bgcolor transition-colors duration-200 py-2 pl-4 text-blackg cursor-pointer'><span className='ri-folder-2-line mr-4'></span>Projects</li>
            </ul>

        </div>

        <div className='flex flex-col mt-auto font-mono justify-center items-center w-full flex-wrap'>
          <p className='font-sans text-[.7rem] text-blackg'>Design & Built by Kevin Olano </p>
          <p className='font-sans text-[.7rem] text-blackg'>'&copy; {new Date().getFullYear()} All rights reserved. </p>
        </div>
    
    
    
    
    </div>
  )
}

export default Sidebar