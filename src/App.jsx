import Sidebar from "./Components/Sidebar.jsx";
import Mainhome from "./Components/Mainhome.jsx";
import Resume from "./Components/Resume.jsx";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navheader from "./Components/Navheader.jsx";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const openNav = () => setIsOpen(true);
  const closeNav = () => setIsOpen(false);

  const toggleNav = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <Router basename="/Web-Portfolio/">
        <div className="flex flex-row w-full h-screen bg-bodycolor">
          <Sidebar isOpen={isOpen} closeNav={closeNav} />
          <main className="flex flex-col w-full h-full md:px-4 md:pt-4">
            <Navheader openNav={openNav} />
            <Routes>
              <Route path="/" element={<Mainhome/>} />
              <Route path="/resume" element={<Resume/>} />
            </Routes>
          </main>
        </div>
      </Router>
    </>
  );
}

export default App;
