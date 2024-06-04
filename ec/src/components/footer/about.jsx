import React from 'react'

function About() {
  return (
    <div>
      <div className=" h-6 rounded-xl bg-zinc-400 mr-4 ml-4 mt-1"></div>
        <div className=' mt-2 rounded-2xl w-full h-48 bg-gray-700'>
        <div >
            <div className=' flex justify-center text-3xl font-bold text-white'> About us.</div>
            <ul className='m-7 mb-4 text-gray-200'>
                <li className='mt-3 '><span className=' font-semibold'>Email :</span> abc@gmail.com</li>
                <li className='mt-3'><span className=' font-semibold'>Contact :</span> 1234567890</li>
                <li className='mt-3'> <span className=' font-semibold'>Feedback : </span><input className=' border border-black border-2 hover:border border-black' type='text' placeholder='Tell Us..'/></li>

            </ul>
            
        </div>
        </div>
    </div>
  )
}

export default About