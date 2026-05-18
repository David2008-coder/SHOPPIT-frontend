import React from 'react'
import Footer from "../Components/ui/Footer.jsx"
import Navbar from "../Components/ui/Navbar.jsx"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Outlet } from "react-router-dom"

const MainLayout = ({numCartItems}) => {
  return (
    <>
    <Navbar numCartItems={numCartItems}/>
    <ToastContainer/>
    <Outlet/>
    <Footer/>
  </>
  )
}

export default MainLayout