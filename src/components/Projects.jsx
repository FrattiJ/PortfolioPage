import React from 'react'
import ProjectItem from './ProjectItem'
// import images from assets for projects
import Vm from '../assets/Volleyball Meme.jpeg'

const Projects = () => {
  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='text-4xl font-bold text-center text-gray-800'>Projects</h1>
        <p className='text-center py-8'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error praesentium inventore sapiente nobis dicta alias molestiae, aperiam ipsa, aliquid rerum, obcaecati quaerat voluptatibus debitis sunt minus nam facere consectetur vitae.
        </p>
        <div className='grid sm:grid-col-2 gap-12'>
            <ProjectItem img={Vm} title='Test' />
            {/* <ProjectItem img={} title='' />
            <ProjectItem img={} title='' />
            <ProjectItem img={} title='' />
            <ProjectItem img={} title='' /> */}
        </div>
    </div>
  )
}

export default Projects