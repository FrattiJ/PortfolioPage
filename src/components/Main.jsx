import React from 'react'
import { FaGithub, FaLinkedin, FaTwitch, FaYoutube} from 'react-icons/fa'

const Main = () => {
  return (
    <div id='main'>
        <img className='w-full h-screen object-cover scale-x-[1] z-[-1]' 
        src='src/assets/Volleyball Meme.jpeg'/>
        <div className='w-full h-screen absolute top-0 left-0 bg-white/50'>
            <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center items-center'>
                <h1 className='sm:text-5xl text-4xl font-bold text-gray-800'>Jacob S. Rahmann Fratti</h1>
                {/* Fill in place holder */}
                <h2 className='flex sm:text-3xl text-2xl pt-4 text-gray-600'>Place Holder for a breif cover letter type deal</h2>
                <div className='flex justify-between items-center pt-6 max-w-[200px] w-full'>
                    {/* Need to add the corrisponding anchor links */}
                    <FaLinkedin size={25} className='cursor-pointer' href=''/>
                    <FaGithub size={25} className='cursor-pointer' href=''/>
                    <FaTwitch size={25} className='cursor-pointer' href=''/>
                    <FaYoutube size={25} className='cursor-pointer' href=''/>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Main