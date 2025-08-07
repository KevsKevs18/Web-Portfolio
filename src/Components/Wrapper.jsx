import React from 'react'

const Wrapper = ({children, title, className = "", iconClass}) => {
  return (
    <div className={`Card Stats  w-full min-h-[17rem] lg:min-h-[13rem] bg-bgcolor flex flex-col mt-2 md:rounded-xl ${className}`}>
          <h4 className="text-[1.3rem] ml-4 mt-2 font-Londrina font-bold">
            <span className={`mr-3 ${iconClass}`}></span>{title}
          </h4>
        {children}
    </div>
  )
}

export default Wrapper