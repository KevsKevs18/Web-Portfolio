import React from 'react'
import Wrapper from '../Wrapper'
import portfolio from '../../assets/PortfolioSS.JPG'
import samplepic from '../../assets/SVG2.JPG'


const ProjectFeatures = () => {
  return (
    <Wrapper title="Features" iconClass="ri-bard-fill" className='min-h-[13rem] lg:pb-4'>
        <div className='grid grid-cols-1 lg:grid-cols-2 place-items-center w-full h-full px-4 my-2 gap-2'>
            <div className='flex flex-col gap-2 lg:flex-row w-full cursor-pointer border-b-[2px] border-gray-300 pb-4 mb-4 lg:pb-0 lg:mb-0 lg:border-b-0'> 
            <div className='w-full h-[15rem] overflow-hidden rounded-xl'>
                <img src={portfolio} alt="SVG" className='w-full h-full object-fill rounded-xl transform-translate-transform duration-300 hover:scale-110'/>
            </div>
            <div className='flex flex-col w-full py-2 gap-2'>
                <h6 className='font-bold text-[1.1rem]'><span className='ri-dropdown-list mr-3'></span>My Portfolio</h6>
                <small className='font-normal text-[1rem]'>I build My Portfolio from Scratch - A fully responsive personal website designed to showcase my skills.</small>
                <ul className='flex gap-2'>
                    <li className='list-none font-Inter text-[.8rem] font-medium px-3 border-[1px] border-gray-300 rounded-lg'>React</li>
                    <li className='list-none font-Inter text-[.8rem] font-medium px-3 border-[1px] border-gray-300 rounded-lg'>Tailwind</li>
                    <li className='list-none font-Inter text-[.8rem] font-medium px-3 border-[1px] border-gray-300 rounded-lg'>Vite</li>
        
                </ul>
            </div>
            </div>

            <div className='flex flex-col gap-2 lg:flex-row w-full cursor-pointer'> 
            <div className='w-full h-[15rem] overflow-hidden rounded-xl'>
                <img src={samplepic} alt="SVG" className='w-full h-full object-fill rounded-xl transform-translate-transform duration-300 hover:scale-110'/>
            </div>
            <div className='flex flex-col w-full py-2 gap-2'>
                <h6 className='font-bold text-[1.1rem]'><span className='ri-dropdown-list mr-3'></span>My Portfolio</h6>
                <small className='font-normal text-[1rem]'>I build My Portfolio from Scratch - A fully responsive personal website designed to showcase my skills.</small>
                <ul className='flex gap-2'>
                    <li className='list-none font-Inter text-[.8rem] font-medium px-3 border-[1px] border-gray-300 rounded-lg'>React</li>
                    <li className='list-none font-Inter text-[.8rem] font-medium px-3 border-[1px] border-gray-300 rounded-lg'>Tailwind</li>
                    <li className='list-none font-Inter text-[.8rem] font-medium px-3 border-[1px] border-gray-300 rounded-lg'>Vite</li>
        
                </ul>
            </div>
            </div>

        </div>

    </Wrapper>
  )
}

export default ProjectFeatures