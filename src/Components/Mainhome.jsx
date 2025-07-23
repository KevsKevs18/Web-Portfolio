import React from 'react'
import Navheader from '../Components/Navheader.jsx'
import codingart from '../assets/codingart.PNG'
import { useTypewriter } from "react-simple-typewriter";


const Mainhome = ({openNav}) => {

const [text] = useTypewriter({
    words: ["Welcome to my Codebase", "Passionate about clean code", "Delivering scalable web solutions"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 3000,
    loop: true,
  });


  return (
    <>
    <div className='flex flex-col w-full h-full '>
    <Navheader openNav={openNav}/>

    <div className='w-full h-[50vh] bg-transparent  grid place-items-center p-4 pt-4 lg:h-[26rem] sm:h-[26rem] md:h-[26rem]'>
        <div className='w-full h-full bg-svg-comp-guy bg-no-repeat bg-contain bg-right bg-bgcolor rounded-xl overflow-hidden relative'>
            <div className='absolute bottom-0 left-0 w-full ml-2 space-y-1'>
            <h6 className='text-black-g text-[1.5rem] sm:text-[2.5rem] md:text-[2.5rem] lg:text-[3rem] font-Gothic font-bold'>{text}</h6>
            </div>
        </div>

        
    </div>
    </div>
    </>
  )
}

export default Mainhome