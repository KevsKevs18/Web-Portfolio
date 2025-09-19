import React from 'react'
import profile from '../../assets/Kevin.JPG'
import Wrapper from '../Wrapper'
import {useNavigate} from 'react-router-dom'

const Profile = ({profileClass=""}) => {

  const navigate = useNavigate();

  return (
    <Wrapper className={`mt-0 min-h-[10rem] p-3 md:min-h-[5rem] ${profileClass}`} h1Class="hidden">
    <div className={`w-full h-full flex flex-col items-center justify-center md:pt-5 p-2 bg-black-g rounded-xl `}>
        <img src={profile} alt="Profile Pic" className='mb-2 rounded-full h-[4rem] w-[4rem] mm:h-[9rem] mm:w-[9rem] lg:h-[6rem] lg:w-[6rem] border-[2px] border-lightblue' />
        <h3 className="text-[1rem] font-bold font-Inter text-white">Kevin A. Olano</h3>
        <small className='text-[.8rem] font-Inter text-bodycolor'>Front-End Developer</small>
        <button className='md:text-[.7rem] text-[.8rem] mm:text-[.6rem] px-8 mt-2 py-1 rounded-lg bg-wrapperColor text-black-g font-bold cursor-pointer hover:text-wrapperColor hover:bg-sidebar' onClick={()=> navigate("/resume")}><span className='ri-article-line mr-3'></span>View My Resume</button>
    </div>
    </Wrapper>
  )
}

export default Profile