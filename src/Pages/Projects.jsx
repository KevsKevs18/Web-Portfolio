import React from 'react'
import Contribution from '../Components/Projects/Contribution'
import SampleProjects from '../Components/Projects/SampleProjects'
import Footer from '../Components/Footer'
import ProjectFeatures from '../Components/Projects/ProjectFeatures'



const Projects = () => {
  return (
    <div className="flex flex-col w-full min-h-screen">
    <Contribution/>
    <SampleProjects/>
    <ProjectFeatures/>
    <Footer/>
    </div>
  )
}

export default Projects