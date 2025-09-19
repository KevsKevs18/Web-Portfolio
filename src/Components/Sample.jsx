import React from 'react'

const Sample = () => {
  return (
    <>
    {/*Left Container*/}
      <div className="flex flex-col w-full min-h-screen  md:min-h-[300px]">
        <div className="Content flex flex-col md:flex-row w-full min-h-[5rem] bg-wrapperColor md:rounded-xl relative p-2 pt-2 lg:h-[20rem] sm:h-[26rem] md:h-[6rem]">
          <div className="w-full h-full flex justify-between gap-8 items-start">
            <button className='openBtn visible' onClick={openNav}>
                <span className='ri-menu-5-line text-[1.5rem]'></span>
            </button>
          <div className="w-full h-full pt-2">
            <div className="Container for Calendar ml-2">
              <p className="text-blackg text-[.7rem] sm:text-[.9rem] md:text-[.8rem] lg:text-[1rem]">
                <span className="ri-calendar-line mr-2"></span>
                {formattedDate}
              </p>
            </div>
            <div className="Typing Container absolute top-0 left-14 w-full ml-3 mt-12 lg:mt-20">
              <h6 className="text-blackg break-words hyphens-auto leading-none text-[1.2rem] sm:text-[2.5rem] md:text-[1.5rem] lg:text-[2.5rem] font-black">
                {text}
                <span className="color-bgcolor animate-blink">_</span>
              </h6>
            </div>
          </div>
          
          
          </div>
          
        </div>
        
        <Profile profileClass="md:hidden"/>
        <Wrapper
          h1Class="hidden"
          iconClass="ri-line-chart-fill"
          className="h-[20rem] lg:h-[10rem]"
        >
          <div className="grid grid-cols-2 grid-rows-2 gap-4 m-5 lg:grid-cols-4 lg:grid-rows-1">
            <Maincard />
          </div>
        </Wrapper>
       
        <Wrapper
          h1Class="hidden"
          iconClass="ri-pushpin-2-line"
          className="h-[22rem] py-0 md:h-[18rem]"
        >
          <Features />
        </Wrapper>

      
        
      </div>

      {/*Right Container
      
        <Wrapper
          title="Skills"
          iconClass="ri-flashlight-line"
          className="h-[10rem] overflow-hidden relative"
          h1Class="mb-4"
        >
          <div className="animate-scroll-slow  flex my-3 px-5 w-max h-1/2 whitespace-nowrap">
            {doubled.map((skill, index) => (
              <div key={index} className="inline-block mx-6 text-center">
                <img
                  src={skill.src}
                  className="w-[3rem] h-[3rem]"
                  alt={skill.name}
                />
                <span className="font-bold">{skill.name}</span>
              </div>
            ))}
          </div>
        </Wrapper>
      
      */}
      <div className="flex flex-col w-full min-h-[35rem] lg:min-h-screen lg:w-[30rem] lg:ml-4">
        
        <Profile profileClass="lg:mt-0"/>
        <Wrapper
          title="Expertise"
          iconClass="ri-user-follow-line"
          className="min-h-[17rem]"
        >
          <Expertise />
        </Wrapper>
        <Footer />
      </div>
    </>
  )
}

export default Sample