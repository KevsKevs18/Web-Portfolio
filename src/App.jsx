import Sidebar from "./Components/Sidebar.jsx";
import Mainhome from "./Pages/Mainhome.jsx";
import Resume from "./Pages/Resume.jsx";
import Projects from "./Pages/Projects.jsx"
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Navheader from "./Components/Navheader.jsx";
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
        <div className="flex flex-row w-full min-h-screen bg-bodycolor">
          <Sidebar isOpen={isOpen} closeNav={closeNav} />
          <main className={`flex flex-col w-full min-h-screen overflow-hidden lg:flex-row flex-1 md:px-4 md:pt-4 ${isOpen ? 'blur-sm' : 'none'}`} onClick={()=>{ if (isOpen) setIsOpen(false);}}>
            <Navheader openNav={openNav} />
            
            <Routes>
              <Route path="/" element={<Mainhome/>}/>
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
