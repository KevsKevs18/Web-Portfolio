import React from 'react'
import Wrapper from '../Wrapper'
import studying from '../../assets/studying.png'
import aboutBG from '../../assets/aboutBG.jpg'
import working from '../../assets/working.png'

const Aboutbanner = () => {
  return (
    <Wrapper className='h-[13rem] px-2 pb-2 mm:mt-4' h1Class="hidden">

        <div className='bg-center bg-no-repeat bg-cover relative h-full w-full rounded-xl' style={{backgroundImage: `url(${aboutBG})`}}>

       </div>


    </Wrapper>
  )
}

export default Aboutbanner