import React, { useEffect, useState } from 'react'
import Wrapper from '../Wrapper'
import css from "../../assets/CssBG.png";
import Github from "../../assets/GithubBG.png";
import tailwind from "../../assets/tailwindBG.png";
import Javascript from "../../assets/JavascriptBG.png"
import ReactBG from "../../assets/ReactBG.png"
import htmlbg from "../../assets/HTMLBG.png"

const Myskills = () => {

    const images = [
       Javascript, ReactBG, htmlbg, tailwind, Github, css

    ];

    const [current, setCurrent] = useState(0);

    useEffect(()=>{
        const interval = setInterval(()=> {
            setCurrent((prev) => (prev + 1) % images.length);
        }, 4000)
        return ()=> clearInterval(interval);
    },[]);


  return (
    <Wrapper
              title="My Skills"
              className="min-h-[9rem] pb-2 px-3 overflow-hidden relative bg-white mt-0 mm:rounded-xl"
              h1Class="mb-4 text-greenFont ml-2"
              iconClass="ri-terminal-line mr-2"
            >
               
                {images.map ((img, index) => (
            <div key={index} className={`absolute right-0 h-1/2 bottom-0 w-1/2 bg-no-repeat bg-bottom transition-opacity duration-1000 ease-in-out ${index === current ? "opacity-100" : "opacity-0"}`}
            style={{backgroundImage: `url(${img})`,
                    backgroundSize: "contain",}}/> ))}
                
            <div className='flex w-full h-full flex-col relative overflow-hidden z-10 '>
                {/* Framework */}
                <div>
                <h4 className='text-greenFont font-bold text-[1rem] mb-2'>
                    Framework/Libraries
                </h4>
                <ul className='flex w-full mb-2 gap-2 flex-wrap'>
                    <li className='px-3 py-1 rounded-md shadow-shadowList text-greenFont font-bold text-[.9rem] lg:text-[.6rem] '><span className='ri-reactjs-line mr-2'></span>React JS</li>
                </ul>
                </div>
                 {/* Front End */}
                <div>
                <h4 className='text-greenFont font-bold text-[1rem] mb-2'>
                    Front End
                </h4>
                <ul className='flex w-full mb-2 gap-2 flex-wrap'>
                    <li className='px-3 py-1 rounded-md text-greenFont font-bold text-[.9rem] lg:text-[.6rem] shadow-shadowList'><span className='ri-html5-line mr-2'></span>HTML</li>
                     <li className='px-3 py-1 rounded-md text-greenFont font-bold text-[.9rem] lg:text-[.6rem] shadow-shadowList'><span className='ri-css3-line mr-2'></span>CSS</li>
                      <li className='px-3 py-1 rounded-md text-greenFont font-bold text-[.9rem] lg:text-[.6rem] shadow-shadowList'><span className='ri-javascript-line mr-2'></span>Javascript</li>
                       <li className='px-3 py-1 rounded-md text-greenFont font-bold text-[.9rem] lg:text-[.6rem] shadow-shadowList'><span className='ri-tailwind-css-fill text-white mr-2'></span>Tailwind</li>
                </ul>
                </div>
                 {/* Backend */}
                <div>
                <h4 className='text-greenFont font-bold text-[1rem] mb-2'>
                    Back End
                </h4>
                <ul className='flex w-full mb-2 gap-2 flex-wrap'>
                    <li className='px-3 py-1 rounded-md text-greenFont font-bold text-[.9rem] lg:text-[.6rem] shadow-shadowList'><span className='ri-npmjs-line mr-2'></span>Node.JS</li>
                     <li className='px-3 py-1 rounded-md text-greenFont font-bold text-[.9rem] lg:text-[.6rem] shadow-shadowList'><span className='ri-database-2-line mr-2'></span>MongoDB</li>
                </ul>
                </div>
                {/* Others */}
                <div>
                <h4 className='text-greenFont font-bold text-[1rem] mb-2'>
                    Others
                </h4>
                <ul className='flex w-full mb-2 gap-2 flex-wrap'>
                    <li className='px-3 py-1 rounded-md text-greenFont font-bold text-[.9rem] lg:text-[.6rem] shadow-shadowList'><span className='ri-git-merge-line mr-2'></span>Git</li>
                    <li className='px-3 py-1 rounded-md text-greenFont font-bold text-[.9rem] lg:text-[.6rem] shadow-shadowList'><span className='ri-github-line mr-2'></span>Github</li>
                </ul>
                </div>
                </div>
            
                    
    </Wrapper>
  )
}

export default Myskills