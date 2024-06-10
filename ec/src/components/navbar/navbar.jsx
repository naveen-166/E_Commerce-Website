import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Navbar() {
    const usenav = useNavigate()
    const [selectedPage, setSelectedPage] = useState("/")
    useEffect(() => {
        AOS.init({
            duration: 200, // Change the animation duration as needed
            easing: 'ease-in-out', // Change the animation easing as needed
        });
    }, []);

    const click = (e) => {
        usenav(e.target.getAttribute('id'));
        setSelectedPage(e.target.getAttribute('id'));
    }

    return (
        <div>
        <div className='flex flex-row  bg-slate-100'>
            <div className=' bg-slate-100 flex flex-row w-[30%]'>
                <div className=' text-black h-[8vh]'>
                    <ul className='flex flex-row p-3 '>
                        <li className="text-center mx-2 p-1 pl-3 hover:text-lg hover:font-bold hover:duration-100 focus:text-lg"><button id='/' onClick={click}>Home</button></li>
                        <li className="text-center mx-2 p-1 pl-3 hover:text-lg hover:font-bold hover:duration-100 focus:text-lg"><button id='/men' onClick={click}>Men</button></li>
                        <li className="text-center mx-2 p-1 pl-3 hover:text-lg hover:font-bold hover:duration-100 focus:text-lg"><button id='/womens' onClick={click}>Women</button></li>
                        <li className="text-center mx-2 p-1 pl-3 hover:text-lg hover:font-bold hover:duration-100 focus:text-lg"><button id='/newarival' onClick={click}>New Arrivals</button></li>
                    </ul>
                </div>
            </div>
            <div className='flex justify-start m-2 justify-items-center ml-auto space-x-5 mr-10 p-3' data-aos="fade-up">
                <p className=' text-l font-bold text-vlack'>SUPS</p>
            </div>
            <div className='flex justify-start m-2 justify-items-end ml-auto flex space-x-5 mr-10' data-aos="fade-up">
                <input type='text' className="block w-full rounded-lg border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder='Search Here ..!' />
                <div className=' flex flex-row'>
                        <button onClick={()=>{usenav('/login')}}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-9 mt-1">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg></button>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 ml-4 mt-1">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                    </svg>


                </div>
            </div>
            
        </div>
        <div className=" w-full h-0.5 bg-black"></div>
        </div>

    )
}

export default Navbar