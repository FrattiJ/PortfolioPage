import React from 'react'
import { FaGithub, FaLinkedin, FaTwitch, FaYoutube} from 'react-icons/fa'
import volleyballImage from '../assets/VolleyballMeme.jpeg';

const Main = () => {
  return (
    <div id='main'>
        <img className='w-full h-screen object-cover scale-x-[1] z-[-1]' 
        src={volleyballImage}/>
        <div className='w-full h-screen absolute top-0 left-0 bg-white/80'>
            <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center items-center'>
                <h1 className='sm:text-5xl text-4xl font-bold text-gray-800'>Jacob S. Rahmann Fratti</h1>
                {/* Fill in place holder */}
                <h2 className='flex sm:text-3xl text-2xl pt-4 text-gray-600'>Place Holder for a breif cover letter type deal </h2>
                <div className='flex justify-between items-center pt-6 max-w-[200px] w-full'>
                    <a href='https://www.linkedin.com/in/jacob-fratti/'><FaLinkedin size={25} className='cursor-pointer' /> </a>
                    <a href='https://github.com/FrattiJ'><FaGithub size={25} className='cursor-pointer' /> </a>
                    <a href='https://www.twitch.tv/frattiyt'><FaTwitch size={25} className='cursor-pointer' /> </a>
                    {/* <FaYoutube size={25} className='cursor-pointer' href=''/> */}

                </div>
            </div>
        </div>
    </div>
  )
}

export default Main