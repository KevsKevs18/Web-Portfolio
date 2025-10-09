import React from 'react'
import Wrapper from '../Wrapper'
import vssione from '../../assets/VSSIOne.jpg'
import aboutBG from '../../assets/aboutBG.jpg'
import tcubg from '../../assets/TCUBG.jpg'
import vssitwoo from '../../assets/VSSITwo.jpg'
import {useState, useEffect} from 'react'

const Aboutbanner = () => {

  const images = [
         tcubg, vssitwoo, vssione,
  
      ];
  
      const [current, setCurrent] = useState(0);
  
      useEffect(()=>{
          const interval = setInterval(()=> {
              setCurrent((prev) => (prev + 1) % images.length);
          }, 8000)
          return ()=> clearInterval(interval);
      },[]);


  return (
    <Wrapper className='h-[205px] mm:h-[300px] w-full px-2 mm:px-0 mm:mt-4 relative bg-white mm:rounded-xl' h1Class="hidden">

          {images.map ((img, index) => (
            <div key={index} className={`absolute mx-2 mm:mx-0 right-0 inset-0 bottom-0 rounded-xl bg-no-repeat bg-center transition-opacity duration-1000 ease-in-out ${index === current ? "opacity-100" : "opacity-0"}`}
            style={{backgroundImage: `url(${img})`,
                    backgroundSize: "100% 100%",
                    backgroundAttachment: "scroll",
                    }}/> ))}
        


    </Wrapper>
  )
}

export default Aboutbanner