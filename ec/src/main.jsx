import React from 'react'
import App from './App'
import Product from './byid/prodmen'
import Productfem from './byid/prodfem'
import Newarival from './byid/newarival'
import {Routes, Route } from "react-router-dom";
function Main() {
  return (
    <div>
        <Routes>
            <Route path="/" element={<App />}/>
            <Route path="/men" element={<Product />}/>
            <Route path="/womens" element={<Productfem />}/>
            <Route path="/newarival" element={<Newarival />}/>

        </Routes>
    </div>
  )
}

export default Main