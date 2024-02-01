import React from 'react'
import ProjectItem from './ProjectItem'
import WeatherWayz from '../assets/Weather Wayz.gif'
import Personality from '../assets/sense-2326348_1280.jpg'
import Horiseon from '../assets/Horiseon.gif'
import Frog from '../assets/YouveBeenFrogged.jpg'

const items = [
    {
        image: {WeatherWayz},
        title:'Weather Wayz',
        git:'https://github.com/lewiscornelius/Group-1-shared-repo',
    },
    {
        image: Personality,
        title:'Personality Based Chat',
        git:'https://github.com/cliffordrouzeau/Project-2',
    },
    {
        image:{Horiseon},
        title:'Horiseon',
        git:'https://github.com/FrattiJ/Horiseon',
    },
    {
        image: {Frog},
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