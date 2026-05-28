import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'
import MainLayout from './layout/MainLayout'
import HomePage from "./Components/home/HomePage"
import NotFoundPage from "./Components/ui/NotFoundPage"
import ProductPage from './Components/Product/ProductPage'
import { useEffect } from "react";
import api from "./api"
import CartPage from './Components/Cart/CartPage'
import CheckoutPage from './Components/Checkout/CheckoutPage'
import ProtectedRoute from "./Components/ui/ProtectedRoute"
import LoginPage from "./Components/user/LoginPage"
import UserProfilePage from "./Components/user/UserProfilePage"
import { AuthProvider } from "./context/AuthContext.jsx"


function App() {

  const [numCartItems, setNumberCartItems ] = useState(0);
  const cart_code = localStorage.getItem("cart_code")

  useEffect(function() {
    if(cart_code){
      api.get(`get_cart_stat?cart_code=${cart_code}`)
      .then(res => {
        console.log(res.data)
        setNumberCartItems(res.data.num_of_items)
      })

      .catch(err => {
        console.log(err.message)
      })
    }
  }, [])

  return (
    <AuthProvider>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<MainLayout numCartItems={numCartItems} />}>
      <Route index element={<HomePage />}/>
      <Route path="products/:slug"  element={<ProductPage setNumberCartItems={setNumberCartItems} />}/>
      <Route path="cart" element={<CartPage setNumberCartItems={setNumberCartItems} />} />
      <Route path="checkout" element={
        <ProtectedRoute>
          <CheckoutPage/>
        </ProtectedRoute>}/>
      <Route path="login" element={<LoginPage />}/>
      <Route path="profile" element={<UserProfilePage/>}/>
      <Route path="*" element={<NotFoundPage />}/>
      </Route>
    </Routes>
    </BrowserRouter>
    </AuthProvider>
  )
} 

export default App
