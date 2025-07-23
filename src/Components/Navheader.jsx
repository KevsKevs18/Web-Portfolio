import React from 'react'
import profile from '../assets/Kevin.JPG'

const Navheader = ({openNav}) => {
  return (
    <div className='h-[4rem] w-full p-2 border-b border-gray-300 sticky top-0 bg-bgcolor lg:hidden'>
        <div className='flex flex-row justify-between w-full h-full items-center'>
            <button className='openBtn visible' onClick={openNav}>
                <span className='ri-menu-5-line text-[1.5rem]'></span>
            </button>
            <img src={profile} alt="Profile Pic" className='rounded-full h-[2.5rem] w-[2.5rem]' />
        </div>
    </div>
  )
}

export default Navheader