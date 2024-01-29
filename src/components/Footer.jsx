import React from 'react'
import { FaGithub, FaLinkedin, FaTwitch, FaYoutube} from 'react-icons/fa'

const Footer = () => {
  return (
    <div>
        <footer className='w-full m-auto h-full w-full flex flex-col justify-center items-center bg-gray-200'>
             <h3 className='flex sm:text-3xl text-2xl pt-4 text-gray-600'>JacobRFratti@gmail.com</h3>
            <div className='flex justify-around items-center max-w-[200px] w-full pb-4'>
                    {/* Need to add the corrisponding anchor links */}
                    <FaLinkedin size={25} className='cursor-pointer' href=''/>
                    <FaGithub size={25} className='cursor-pointer' href=''/>
                    <FaTwitch size={25} className='cursor-pointer' href=''/>
                    <FaYoutube size={25} className='cursor-pointer' href=''/>

                </div>
        </footer>
    </div>
  )
}

export default Footer