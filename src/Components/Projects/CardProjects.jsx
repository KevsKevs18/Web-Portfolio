import React from 'react'
import { useNavigate } from 'react-router-dom';

const CardProjects = () => {

    const navigate = useNavigate();

    const cardlist = [
        {name: "Project1", created:"Created on Aug 2025", path: "/"},
        {name: "Project2", created:"Created on Aug 2025", path: "/about"},
        {name: "Project3", created:"Created on Aug 2025", path: "/project"},
        {name: "Project4", created:"Created on Aug 2025", path: "/projects"}
    ];

    const clickToNavigate = (event) => {
      const path = event.currentTarget.dataset.path;
      navigate(path);
    }
    
  return (
    <>
    {cardlist.map((card) => (
    <div className='flex w-full h-full shadow-shadowLight rounded-lg p-2' key={card.path} onClick={clickToNavigate} data-path={card.path}>
        <div className='flex flex-col h-full w-full gap-2 hover:text-customBlue cursor-pointer'>
            <h6 className='font-bold text-[1.1rem]'><span className='ri-dropdown-list mr-3'></span>{card.name}<span className='text-experience font-bold ml-2 md:ml-4 px-1 rounded-lg text-[.6rem] md:text-[.8rem] border-[2px] border-experience'>Public</span></h6>
            <small className='font-medium text-gray-500'>{card.created}</small>
        </div>
    </div>
  ))}
  </>
  )
}

export default CardProjects