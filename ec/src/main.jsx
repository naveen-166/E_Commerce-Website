import React from 'react'
import App from './App'
import Product from './subpages/prodmen'
import Productfem from './subpages/prodfem'
import Newarival from './subpages/newarival'
import Login from './components/login/Login'
import { Routes, Route } from "react-router-dom";
import DetailsPage from './subpages/redirect'
import { AuthProvider } from './Context/AuthContext';
import CartPage from './subpages/cart'
import { CartProvider } from './Context/CartContext'

function Main() {
  return (
    <div>

      <AuthProvider>
        <CartProvider>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/men" element={<Product />} />
            <Route path="/womens" element={<Productfem />} />
            <Route path="/newarival" element={<Newarival />} />
            <Route path="/login" element={<Login />} />
            <Route path="/details/:id" element={<DetailsPage />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </CartProvider>
      </AuthProvider>

    </div>
  )
}

export default Main