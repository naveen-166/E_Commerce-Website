import React from 'react'
import App from './App'
import Product from './byid/prodmen'
import Productfem from './byid/prodfem'
import Newarival from './byid/newarival'
import Login from './components/login/Login'
import {Routes, Route } from "react-router-dom";
import DetailsPage from './byid/redict'
import { AuthProvider } from './AuthContext/AuthContext';

function Main() {
  return (
    <div>
              <AuthProvider>
        <Routes>
            <Route path="/" element={<App />}/>
            <Route path="/men" element={<Product />}/>
            <Route path="/womens" element={<Productfem />}/>
            <Route path="/newarival" element={<Newarival />}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/details/:id" element={<DetailsPage/>} />
        </Routes>
        </AuthProvider>

    </div>
  )
}

export default Main