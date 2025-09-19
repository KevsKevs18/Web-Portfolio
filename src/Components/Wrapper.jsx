import React from 'react'

const Wrapper = ({children, title, className = "", iconClass, h1Class}) => {
  return (
    <div className={`w-full bg-wrapperColor flex flex-col md:rounded-xl ${className}`}>
          <h4 className={`text-[1rem] mt-2 font-bold ${h1Class}`}>
            <span className={`mr-3 ${iconClass}`}></span>{title}
          </h4>
        {children}
    </div>
  )
}

export default Wrapper