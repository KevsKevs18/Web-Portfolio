import Sidebar from "./Components/Sidebar.jsx";
import Mainhome from "./Pages/Mainhome.jsx";
import Resume from "./Pages/Resume.jsx";
import Projects from "./Pages/Projects.jsx"
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import About from "./Pages/About.jsx"
import RedirectOnRefresh from "./Components/RedirectOnRefresh.jsx";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const openNav = () => setIsOpen(true);
  const closeNav = () => setIsOpen(false);

  

  return (
    <>
      <Router>
        <RedirectOnRefresh/>
        <div className="flex flex-row w-full min-h-screen bg-lightblue lg:px-24 lg:py-2">
          <Sidebar isOpen={isOpen} closeNav={closeNav} openNav={openNav}/>
          <main className={`flex flex-col w-full min-h-screen overflow-hidden flex-1 ${isOpen ? 'blur-sm' : 'none'}`} onClick={()=>{ if (isOpen) setIsOpen(false);}}>
            
            
            <Routes>
              <Route path="/" element={<Mainhome openNav={openNav}/>}/>
              <Route path="/resume" element={<Resume/>} />
              <Route path="/about" element={<About/>} />
              <Route path="/projects" element={<Projects/>} />
            </Routes>
          </main>
        </div>
      </Router>
    </>
  );
}

export default App;
