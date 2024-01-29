import React from 'react'
import ProjectItem from './ProjectItem'

const items = [
    {
        image:'src/assets/Weather Wayz.gif',
        title:'Weather Wayz',
        git:'',
    },
    {
        image:'src/assets/sense-2326348_1280.jpg',
        title:'Personality Based Chat',
        git:'',
    },
    {
        image:'src/assets/Horiseon.gif',
        title:'Horiseon',
        git:'',
    },
    {
        image:'src/assets/YouveBeenFrogged.jpg',
        title:'Place Holder',
        git:'',
    },
]

const Projects = () => {
  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='text-4xl font-bold text-center text-gray-800'>Projects</h1>
        <p className='text-center py-8'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error praesentium inventore sapiente nobis dicta alias molestiae, aperiam ipsa, aliquid rerum, obcaecati quaerat voluptatibus debitis sunt minus nam facere consectetur vitae.
        </p>
        <div className='grid sm:grid-cols-2 gap-12'>
            {items.map((items, idx) => (
                <ProjectItem key={idx} image={items.image} title={items.title} git={items.git}/>
            ))}
        </div>
    </div>
  )
}

export default Projects