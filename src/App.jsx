import Sidebar from './Components/Sidebar.jsx'
import Mainhome from './Components/Mainhome.jsx'
import { useState } from 'react'


function App() {
 
  const [isOpen, setIsOpen] = useState(false);
 
  const openNav = () => setIsOpen(true);
   const closeNav = () => setIsOpen(false);
 

  const toggleNav = () => {
    setIsOpen(prev => !prev);

  };


  return (
    <>
      <div className="flex flex-row w-full h-screen bg-bodycolor">

      <Sidebar isOpen={isOpen} closeNav={closeNav}/>
      <Mainhome openNav={openNav}/>

      </div>
    </>
  )
}

export default App
