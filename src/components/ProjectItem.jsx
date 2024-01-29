import React from 'react'
import { FaDesktop, FaGithub } from 'react-icons/fa'

const ProjectItem = ({img, title}) => {
  return (
    <div className='relative flex items-center justify-center h-auto w-full shadow-lg shadow-gray-400 rounded-xl group hover:bg-gradient-to-b from-gray-200 to-gray-400/80'>
        <img src={img} alt={title} className="rounded-xl group-hover:opacity-10" />
        <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] traslate-y-[-50%]'>
            <h3 className='text-3xl font-bold text-white tracking-wider text-center'>
                {title}
            </h3>
            <div className='relative flex justify-between items-center cursor-pointer p-6 w-full'>
                <a href='' className='p-3'>
                    <FaGithub size={25} />
                </a>
                <a href='' className='p-3'>
                    <FaDesktop size={25} />
                </a>
            </div>
        </div>
    </div>
  )
}

export default ProjectItem