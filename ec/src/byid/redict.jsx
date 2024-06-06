// redirect.js
import React from "react";
import { useParams } from "react-router-dom";
import Detail from "./Details";
import Navbar from "../components/navbar/navbar";
import { useState } from "react";

const DetailsPage = () => {
    const [quant, setquant] = useState(1);
    const [size, setsize] = useState("Please select the size.");
    const [cart,setcart] = useState(false);

    function handleclickc()
    {
        setcart(true);

    }

    function handleClickp() {
        setquant(quant => quant + 1)
    }
    function handleClickm() {
        if (quant === 0) {
            return <div>Quantity is already zero</div>
        }
        setquant(quant => quant - 1)
    }
    const handleClick = size => {
        console.log(size.currentTarget.id);
        setsize(size.currentTarget.id);


    };


    const { id } = useParams();
    console.log(id);

    const product = Detail.find((item) => item.id === parseInt(id));

    if (!product) {
        return <div>Product not found</div>;
    }
    return (
        <div className=" bg-slate-100" style={{ height: '100vh' }}>
            <Navbar />
            <div className=" text-lg font-semibold ml-16 mt-4"> Product Details</div>

            {/* <div className=" text-xl font-extrabold pl-16 pt-7">SUPS</div> */}
            <div className="flex flex-row">
                <div className=" flex justify-center  w-[30%]">
                    <img className=" mt-10 rounded-lg" style={{ height: '65vh' }} src={product.img} alt="" />
                </div>
                <div className=" w-[10%]"></div>
                <div className=" w-[30%]">
                    <div className=" flex flex-col">
                        <div className=" mt-20"><span className=" text-2xl font-bold">Product Name </span><br /><br /><span className="text-lg">{product.Name}</span></div>
                        <div><span className="text-xl font-semibold"><br />Price </span><br /><br /><span className="text-lg">₹{product.price}</span></div>
                        <br />
                    </div>
                    <div className="flex flex-row">
                        <p>Quantity </p>
                        <div className=" space-x-3 flex flex-row">
                            <button className="ml-3 bg-slate-900 w-7 h-7 text-slate-100 rounded-full" onClick={handleClickm}>-</button><div className=" border border-slate-950 w-6 text-center">{quant}</div><button className="bg-slate-900 w-7 h-7 text-slate-100 rounded-full" onClick={handleClickp}>+</button>
                        </div>
                    </div>
                    <div>
                        <br />
                        <p>Size</p>
                        <br />
                        <div className="space-x-2">
                            <button onClick={handleClick} id="XS" className=" border border-slate-950 h-7 w-[10%] hover:bg-black hover:text-white hover:text-lg transform duration-500  focus:bg-black focus:text-white focus:text-sm">XS</button>
                            <button onClick={handleClick} id="S" className=" border border-slate-950 h-7 w-[10%] hover:bg-black hover:text-white hover:text-lg transform duration-500   focus:bg-black focus:text-white focus:text-sm">S</button>
                            <button onClick={handleClick} id="M" className="border border-slate-950 h-7 w-[10%] hover:bg-black hover:text-white hover:text-lg transform duration-500    focus:bg-black focus:text-white focus:text-sm" >M</button>
                            <button onClick={handleClick} id="L" className="border border-slate-950 h-7 w-[10%] hover:bg-black hover:text-white hover:text-lg transform duration-500    focus:bg-black focus:text-white focus:text-sm">L</button>
                            <button onClick={handleClick} id="XL" className=" border border-slate-950 h-7 w-[10%] hover:bg-black hover:text-white hover:text-lg transform duration-500  focus:bg-black focus:text-white focus:text-sm">XL</button>
                        </div>
                    </div>
                </div>

                <div className="w-[30%] flex justify-center mt-9">
                    <div className=" box-border h-96 w-72 ml-7 mt-5 bg-gray-200 shadow-xl rounded-lg">
                        <div>
                            <div className=" mt-3 text-lg font-semibold flex justify-center"> Selected Details</div>
                            <div className="ml-6 mt-4">Quantity : {quant}</div>
                            <div className="ml-6 mt-2">Size : {size}</div>
                            <p className="ml-6 mt-2">Pincode </p>
                            <div className="flex justify-center">
                                <input type="number" placeholder="Enter your pincode.." className=" text-center mt-2 w-[80%]"></input></div>
                            <div className="flex justify-center">
                                <button className="mt-3 flex flex-row w-auto h-auto rounded-lg border border-slate-950 hover:bg-black hover:text-white  ">Check
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=" mt-0.5 ml-2 size-5 animate-spin">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                                    </svg>
                                </button>

                            </div>
                            <div className=" mt-24 " >
                                <div className="flex justify-center">
                                    <button className="h-auto w-44 bg-black text-white text-lg rounded-xl" >Add to cart</button>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

        </div>
    );
};

export default DetailsPage;
