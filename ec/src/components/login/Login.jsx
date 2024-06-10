import React, { useState, useEffect } from 'react';
import { useAuth } from '../../AuthContext/AuthContext';
import Navbar from "../navbar/navbar";
import img from "./images/im1.jpg";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Login() {
    const { isLoggedIn, setIsLoggedIn, setUsername } = useAuth();
    const [error, setError] = useState('');

    useEffect(() => {
        AOS.init({
            duration: 500,
            easing: 'ease-in-out',
        });
    }, []);

    const handleLogin = (e) => {
        e.preventDefault();
        const sampleUsername = 'admin';
        const samplePassword = 'admin';

        const usernameInput = document.getElementById('user').value;
        const passwordInput = document.getElementById('pwd').value;

        if (usernameInput === sampleUsername && passwordInput === samplePassword) {
            setIsLoggedIn(true);
            setUsername(sampleUsername);
        } else {
            setError('Invalid username or password.');
        }
    };

    return (
        <>
            <Navbar />
            <div className="bg-cover" style={{ backgroundImage: `url(${img})`, height: '91vh', width: '100vw' }}>
                <div className="place-content-center flex">
                    <div className="box-border mt-40 w-[45%] bg-gray-200 rounded-2xl shadow-2xl" data-aos="fade-left">
                        <div className="flex justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-32">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            </svg>
                        </div>
                        {isLoggedIn ? (
                            <>
                                <h1 className="flex justify-center ml-2 mt-2 text-2xl font-serif"> Hi, admin</h1>
                                <div className="flex justify-center">
                                    <div className="w-[24%] h-1 ml-2 bg-black "></div>
                                </div>
                                <div className='flex justify-center mt-6 mb-6' ><span className=' text-xl'>Name :</span> <span className=' text-xl'>admin</span></div>
                            </>
                        ) : (
                            <>
                                <h1 className="flex justify-center ml-2 mt-2 text-2xl font-serif">USER LOGIN</h1>
                                <div className="flex justify-center">
                                    <div className="w-[24%] h-1 ml-2 bg-black "></div>
                                </div>
                                <form className="ml-48 mt-3" onSubmit={handleLogin}>
                                    Username :
                                    <input type="text" placeholder="Username" id='user' className="ml-3 mt-3 w-[40%] rounded-lg text-gray-700 text-center" />
                                    <br />
                                    Password :
                                    <input type="password" placeholder="Password" id='pwd' className="ml-4 mt-7 w-[40%] rounded-lg text-gray-700 text-center" />
                                    {error && <p className="text-red-500 mt-2">{error}</p>}
                                    <div className="flex justify-end mr-16 mt-5">
                                        <button type="submit" className="bg-gray-300 hover:bg-gradient-to-r from-cyan-200 to-blue-200 w-20 h-14 rounded-2xl mb-2 hover:font-bold hover:font-mono">Login</button>
                                    </div>
                                </form>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;
