import React from 'react'
import Wrapper from '../Wrapper'
import CardProjects from './CardProjects'


const SampleProjects = () => {



  return (
   <Wrapper title="Projects" iconClass="ri-folder-open-line" className='min-h-[13rem] lg:min-h-[8rem]'>
    <div className='grid grid-cols-1 lg:grid-cols-4  md:grid-cols-2 place-items-center gap-2 p-4 w-full h-full'>
    <CardProjects/>
    </div>
   </Wrapper>
  )
}

export default SampleProjects