import img1 from "../../subpages/imagesfem/im1.jpg"
import img2 from "../../subpages/imagesfem/im2.jpg"
import img3 from "../../subpages/imagesmen/im3.jpg"
import img4 from "../../subpages/imagesfem/im4.jpg"
import img5 from "../../subpages/imagesmen/im5.jpg"
import img6 from "../../subpages/imagesfem/im6.jpg"
import img7 from "../../subpages/imagesmen/im7.jpg"
import img8 from "../../subpages/imagesfem/im8.jpg"
import React, { useState } from "react";


const Detail = [
  {
    id: 1,
    Title: "Chudi",
    price: 500,
    img: img1
  },
  {
    id: 2,
    Title: "Shirt",
    price: 2700,
    img: img2
  },
  {
    id: 3,
    Title: "Shirt",
    price: 3800,
    img: img3
  },
  {
    id: 4,
    Title: "Shirt",
    price: 1900,
    img: img4
  },
  {
    id: 5,
    Title: "Shirt",
    price: 1500,
    img: img5
  },
  {
    id: 6,
    Title: "Shirt",
    price: 5200,
    img: img6
  },
  {
    id: 7,
    Title: "Shirt",
    price: 2500,
    img: img7
  },
  {
    id: 8,
    Title: "Shirt",
    price: 2000,
    img: img8
  }
];

function Products() {
  const [selectedProduct,setSelectedProduct]=useState();
  

  return (
    <div>
      <div className=" h-6 rounded-xl bg-zinc-400 mr-4 ml-4">
      </div>
      <div className='ml-5 mt-4 text-lg font-semibold flex flex-row'>New Arrivals !!
        <span className='ml-3 mt-1 text-sm'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
        </svg>
        </span>
      </div>
      <div className="flex flex-wrap justify-center space-x-3">
        {Detail.map((product, index) => (
          <button>
            <div key={product.id} className="max-w-sm rounded space-x-3 overflow-hidden shadow-lg m-4 hover:scale-105">
              <img className=" h-96" src={product.img} alt={product.Title} />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{product.Title}</div>
                <div className="font-medium text-l mb-2">Price : {product.price}</div>
              </div>

            </div>
          </button>
        ))}
      </div>
      <div className=" text-center pt-4 pb-7 text-xl font-semibold text-gray-600">End of Page...</div>


    </div>
  )
}

export default Products