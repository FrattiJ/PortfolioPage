import React from 'react'

// No clue how to actually connect this form without a backend or API

const Contact = () => {
  return (
    <div id='contact' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1  className='text-4xl font-bold text-center text-gray-800'>Contact Me</h1>
        <form action="">
            <div className='grid md:grid-col-2 gap-4 w-full py-2'>
                <div className='flex flex-col'>
                    <input type="text"  name='Full name' placeholder='Full Name' className='border-2 rounded-lg p-3 flex border-gray-300'/>
                </div>
                <div className='flex flex-col'>
                    <input type="Email" name='Email' placeholder='Email' className='border-2 rounded-lg p-3 flex border-gray-300'/>
                </div>
                <div className='flex flex-col'>
                    <input type="text" name='Phone Number' placeholder='Phone Number' className='border-2 rounded-lg p-3 flex border-gray-300'/>
                </div>
                <div className='flex flex-col'>
                    <input type="text" name='Subject' placeholder='Subject' className='border-2 rounded-lg p-3 flex border-gray-300'/>
                </div>
                <div className='flex flex-col'>
                    <textarea rows={10} name='Message' placeholder='Message' className='border-2 rounded-lg p-3 flex border-gray-300'/>
                </div>
                <input type="submit" value="Submit" className='border-2 rounded-lg p-3 border-gray-300 cursor-pointer' />
            </div>
        </form>
    </div>
  )
}

export default Contact