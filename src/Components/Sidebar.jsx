import React from 'react'
import profile from '../assets/Kevin.JPG'


const Sidebar = ({isOpen, closeNav}) => {

  return (
    <div className={`flex flex-col bg-sidebar justify-start fixed w-0 h-full shadow-lg rounded py-4 fixed z-[9999] top-0 left-0 overflow-hidden transition-[0.5s] 
    ${isOpen ? 'w-[13rem]' : 'w-0'} lg:w-[13rem] lg:z-[0] lg:sticky lg:mt-4 lg:rounded-xl`}>

        <div className="flex flex-col w-full h-[15rem] flex-wrap pl-4">
        <button className='closeBtn ml-auto mr-2 text-bgcolor lg:hidden' onClick={closeNav}><span className='ri-close-line text-[1.5rem] hover:text-blue-100'></span></button>
        <img src={profile} alt="" className="h-[6rem] w-[6rem] rounded-full border-[2px] border-bgcolor mb-4"/>
        <h6 className="font-medium text-xl text-bgcolor">Kevin A. Olano</h6>
        <p className='text-bgcolor'>Front-End Developer</p>
        <button className='w-[90%] border-gray-300 border-2 rounded mt-2 text-bgcolor'><span className="ri-file-download-line pr-2"></span>Resume</button>
        </div>

        <div className='flex flex-col mt-7'>
            <ul className='flex flex-col'>
                <li className='hover:bg-blue-100 hover:text-sidebar transition-colors duration-200 py-2 pl-4 text-bgcolor'><span className='ri-home-3-line mr-4'></span>Home</li>
                <li className='hover:bg-blue-100 hover:text-sidebar transition-colors duration-200 py-2 pl-4 text-bgcolor'><span className='ri-user-line mr-4'></span>About</li>
                <li className='hover:bg-blue-100 hover:text-sidebar transition-colors duration-200 py-2 pl-4 text-bgcolor'><span className='ri-folder-2-line mr-4'></span>Projects</li>
            </ul>

        </div>

        <div className='flex flex-col mt-auto font-mono justify-center items-center w-full flex-wrap'>
          <p className='font-sans text-[.7rem] text-bgcolor'>Design & Built by Kevin Olano </p>
          <p className='font-sans text-[.7rem] text-bgcolor'>'&copy; {new Date().getFullYear()} All rights reserved. </p>
        </div>
    
    
    
    
    </div>
  )
}

export default Sidebar