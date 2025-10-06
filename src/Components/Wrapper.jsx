import React from 'react'

const Wrapper = ({children, title, className = "", iconClass, h1Class}) => {
  return (
    <div className={`w-full flex flex-col md:rounded-xl ${className}`}>
          <h6 className={`text-[1.44rem] mm:text-[1.2rem] mt-2 font-bold ${h1Class}`}>
            <span className={`mr-3 ${iconClass}`}></span>{title}
          </h6>
        {children}
    </div>
  )
}

export default Wrapper