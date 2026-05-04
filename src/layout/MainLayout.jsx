import React from 'react'
import Footer from "../Components/ui/Footer.jsx"
import Navbar from "../Components/ui/Navbar.jsx"
import { Outlet } from "react-router-dom"

const MainLayout = ({numCartItems}) => {
  return (
    <>
    <Navbar numCartItems={numCartItems}/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default MainLayout