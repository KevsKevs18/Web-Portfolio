import React, { useState } from 'react'
import profile from '../../assets/Kevin.JPG'
import Wrapper from '../Wrapper'
import {useNavigate} from 'react-router-dom'


const Profile = ({profileClass="", clickResume}) => {



  const navigate = useNavigate();

  return (
    <>
    <Wrapper className={`mt-0 min-h-[10rem] md:min-h-[10rem] ${profileClass}`} h1Class="hidden">
    <div className={`w-full h-full flex flex-col pb-6  items-center border-t-[1px] border-bodycolor overflow-hidden  justify-center md:pt-5 p-2  bg-white mm:rounded-xl`}>
        <div className='flex justify-center w-full gap-2 mt-4 lg:mt-0 lg:pt-2'>
          <div className='w-[2rem] h-[2rem] mm:w-[1.5rem] mm:h-[1.5rem] flex justify-center items-center rounded-full border-[1px] border-gray-g mb-4 lg:mb-0'>
          <i className='ri-facebook-line'></i>
          </div>
          <div className='w-[2rem] h-[2rem] mm:w-[1.5rem] mm:h-[1.5rem] flex justify-center items-center rounded-full border-[1px] border-gray-g mb-4 lg:mb-0'>
          <i className='ri-instagram-line'></i>
          </div>
          <div className='w-[2rem] h-[2rem] mm:w-[1.5rem] mm:h-[1.5rem] flex justify-center items-center rounded-full border-[1px] border-gray-g mb-4 lg:mb-0'>
          <i className='ri-github-line'></i>
          </div>
          <div className='w-[2rem] h-[2rem] mm:w-[1.5rem] mm:h-[1.5rem] flex justify-center items-center rounded-full border-[1px] border-gray-g mb-4 lg:mb-0'>
          <i className='ri-mail-send-line'></i>
          </div>
        </div>
        <div className='relative flex justify-center h-[3.5rem] mm:h-[3rem] w-full border-t-[1px] border-gray-g mt-12'>
         <img src={profile} alt="Profile Pic" className='mb-2  rounded-full h-[6rem] aboslute top-0 -translate-y-1/2 w-[6rem]  lg:h-[6rem] lg:w-[6rem] border-[12px] border-white' />
         </div>
        <h5 className="text-[1.44rem] font-bold font-Inter text-black-g mm:text-[.9rem]">Kevin A. Olano</h5>
        <p className='text-[1rem] font-Inter font-medium text-black-g mm:text-[.8rem]'>Front-End Developer</p>
        <button className='text-[1rem] md:text-[.7rem] text-[.8rem] mm:text-[.6rem] px-8 mt-2 py-2 rounded-full bg-greenFont text-white font-medium cursor-pointer hover:text-wrapperColor hover:bg-black-g' onClick={clickResume}><span className='ri-article-line mr-3'></span>My Resume</button>
    </div>

   
    </Wrapper>
     
     </>
  )
}

export default Profile