import React from 'react'
import { useTypewriter } from "react-simple-typewriter";


const profile = () => {


  return (
    <div className='relative grid gird-col-3 h-[260px] bg-bgcolor md:rounded-xl'>

        <div className='row-start-1 h-[130px] bg-svg-bg bg-cover bg-center bg-no-repeat border-b-[2px] md:rounded-t-xl'/>
        
        <div className='bg-blue-300 absolute top-1/3 left-5 h-[7rem] w-[7rem] border-4 border-white bg-kevin-profile bg-no-repeat bg-cover bg-center rounded-full z-50'/>
        <div className='bg-black-300 h-[130px] row-start-3 flex justify-center flex'>
            <div className='w-[10rem] ml-16 md:ml-5 md:w-[10rem] md:mr-16 lg:mr-60 h-[90%] pt-6'>
                <p className='font-bold text-[1.2rem]'>Kevin A. Olano</p>
                <p className='text-gray-500'>Front-End Developer</p>
                <button className='border-2 border-bodycolor rounded-lg px-4 mt-2 cursor-pointer'><span className='ri-message-3-line mr-2'></span>Message</button>
            </div>
        </div>

    </div>
  )
}

export default profile