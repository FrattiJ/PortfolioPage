import React, {useState} from 'react'
import {AiOutlineBook, AiOutlineFolder, AiOutlineHome, AiOutlineMail, AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {

  const [nav, setNav] = useState(false)
  const handleNav = () => {
    setNav(!nav);
    console.log('Navbar state update')
  };

  return (
    <div>
      <AiOutlineMenu onClick={handleNav} className='absolute top-4 right-4 z-[99] md:hidden'/>
      {
        nav ? (
          <div className='fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20'>
            <a onClick={handleNav} href='#main' className='w-[75%] flex justify-center items-center rounded-t-[90px] shadow-lg bg-gray-100 shadow-gray-400 p-4 cursor-poiter hover:scale-110 ease-in duration-200'>
              <AiOutlineHome size={20} />
              <span className='pl-4'>Home</span>
            </a>
            <a onClick={handleNav} href='#resume' className='w-[75%] flex justify-center items-center shadow-lg bg-gray-100 shadow-gray-400  p-4 cursor-poiter hover:scale-110 ease-in duration-200'>
              <AiOutlineBook size={20} />
              <span className='pl-4'>Resume</span>
            </a>
            <a onClick={handleNav} href='#projects' className='w-[75%] flex justify-center items-center shadow-lg bg-gray-100 shadow-gray-400  p-4 cursor-poiter hover:scale-110 ease-in duration-200'>
              <AiOutlineFolder size={20} />
              <span className='pl-4'>Projects</span>
            </a>
            <a onClick={handleNav} href='#contact' className='w-[75%] flex justify-center items-center rounded-b-[90px]  shadow-lg bg-gray-100 shadow-gray-400  p-4 cursor-poiter hover:scale-110 ease-in duration-200'>
              <AiOutlineMail size={20} />
              <span className='pl-4'>Contact</span>
            </a>
          </div>
        ) : (
          ''
        )}
        <div className='md:block hidden fixed top-[25%] z-10'>
          <div className='flex flex-col'>
            <a href='#main' className='rounded-t-[90px] shadow-lg bg-gray-100 shadow-gray-400  p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
              <AiOutlineHome size={20} />
            </a>
            <a href='#resume' className='shadow-lg bg-gray-100 shadow-gray-400  p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
              <AiOutlineBook size={20} />
            </a>
            <a href='#projects' className=' shadow-lg bg-gray-100 shadow-gray-400  p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
              <AiOutlineFolder size={20} />
            </a>
            <a href='#contact' className='rounded-b-[90px] shadow-lg bg-gray-100 shadow-gray-400  p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
              <AiOutlineMail size={20} />
            </a>
          </div>
        </div>
    </div>
  )
}

export default Navbar