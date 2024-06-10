//prodmen.jsx

import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from '../components/navbar/navbar'
import Detailmen from "./Detailsmen";
import { useAuth } from "../AuthContext/AuthContext";
const Product = () => {
  const {isLoggedIn, setIsLoggedIn, username, setUsername, logout } = useAuth();
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleClick = (product) => {
    setSelectedProduct(product);
  };
  console.log(isLoggedIn);
  return (
    <div>
      <Navbar/>
      <div className='ml-5 mt-4 text-lg font-semibold flex flex-row'>Exclusive of Men
        <span className='ml-3 mt-1 text-sm'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
        </svg>
        </span>
      </div>
      <div className="flex flex-wrap justify-center">
        {Detailmen.map((product, index) => (
          <Link to={`/details/${product.id}`} key={product.id}>
            <button onClick={() => handleClick(product)}>
              <div className="w-64 rounded overflow-hidden shadow-lg m-4 hover:scale-105">
                <img className="h-72 w-52 ml-6 self-center" src={product.img} alt={product.Title} />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{product.Title}</div>
                  <div className="font-medium text-l mb-2">Price : {product.price}</div>
                </div>
              </div>
            </button>
          </Link>
        ))}
      </div>
      <div className="text-center pt-4 pb-7 text-xl font-semibold text-gray-600">End of Page...</div>
    </div>
  );
};

export default Product;