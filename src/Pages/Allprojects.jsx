import React from 'react'
import Wrapper from '../Components/Wrapper'

const Allprojects = () => {
  return (
    <div className='mm:px-2 flex flex-col w-full h-full mm:pt-4'>
   <Wrapper
   title="Project List"
   iconClass="ri-pushpin-line"
   h1Class="ml-2"
   className='bg-white pb-4'
   >
    <small className='ml-2 font-medium text-gray-g'>Here is a list of projects that i have created</small>
   </Wrapper>
   </div>
  )
}

export default Allprojects