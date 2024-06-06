import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import img from './images/img1.jpg';

const BackgroundImageWithText = () => {
    useEffect(() => {
        AOS.init({
            duration: 500,
        });
    }, []);

    return (
        <div>
            <div
                className="relative bg-cover bg-center h-64 md:h-80 lg:h-96 xl:h-128 rounded-b-lg"
                style={{ backgroundImage: `url(${img})` }}
                data-aos="fade-left" // Add AOS animation attribute here
            >
                <div className="pl-16 pt-64">
                    <h2 className="text-white font-bold text-3xl tracking-normal">New <br />Arrivals !!</h2>
                </div>
            </div>
            <div className='flex flex-row flex space-x-2' data-aos="fade-up"> {/* Add AOS animation attribute here */}
                <h1 className='pl-5 pt-4 pb-2 text-2xl font-bold'>Products</h1>
                <div className='pt-6'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default BackgroundImageWithText;
