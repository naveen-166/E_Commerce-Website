import React ,{useEffect, useState}from 'react'
import {useNavigate} from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Navbar() {
    const usenav = useNavigate()
    const [seletedPage, setSelectedPage] = useState("/")
    useEffect(() => {
        AOS.init({
            duration: 400, // Change the animation duration as needed
            easing: 'ease-in-out', // Change the animation easing as needed
        });
    }, []);

    const click = (e) =>{
        usenav(e.target.getAttribute('id'));
        setSelectedPage(e.target.getAttribute('id'));
    }

    return (
        <div className='flex flex-row  bg-slate-100'>
            <div className=' bg-slate-100 flex flex-row w-[30%]'>
                <div className=' text-black h-[8vh]'>
                    <ul className='flex flex-row p-3 ' data-aos="fade-down">
                        <li className="{selectedPage=='/'? 'text-lg font-bold ' :'text-center mx-2 p-1 pl-3 hover:text-lg hover:font-bold hover:duration-100'} "><button id='/' onClick={click}>Home</button></li>
                        <li className="{selectedPage=='/men'? 'text-lg font-bold' :} text-center mx-2 p-1 pl-3 hover:text-lg hover:font-bold hover:duration-100"><button id='/men' onClick={click}>Men</button></li>
                        <li className="{selectedPage=='/women'? 'text-lg font-bold' :} text-center mx-2 p-1 pl-3 hover:text-lg hover:font-bold hover:duration-100"><button id='/womens' onClick={click}>Women</button></li>
                        <li className="{selectedPage=='/newarival'? 'text-lg font-bold' :} text-center mx-2 p-1 pl-3 hover:text-lg hover:font-bold hover:duration-100"><button id='/newarival' onClick={click}>New Arrivals</button></li>
                    </ul>
                </div>
            </div>
            <div className='flex justify-start m-2 justify-items-center ml-auto space-x-5 mr-10 p-3' data-aos="fade-up">
                <p className=' text-l font-bold text-vlack'>Naw</p>
            </div>
            <div className='flex justify-start m-2 justify-items-end ml-auto flex space-x-5 mr-10' data-aos="fade-up">
                <input type='text' className="block w-full rounded-lg border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder='Search Here ..!' />
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-11">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
            </div>
        </div>

    )
}

export default Navbar