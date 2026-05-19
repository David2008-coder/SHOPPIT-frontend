import React from 'react'
import api from '../../api';
import { jwtDecode } from "jwt-decode";
// import Spinner from "../ui/Spinner.jsx";
import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({children}) => {

  const [isAuthorised, setIsAuthorised] = useState(null)

  useEffect(function(){
    auth().catch(() => setIsAuthorised(false))
  },[])

    async function refreshToken() {

      const refreshToken = localStorage.getItem("refresh")

      try {
        const res = await api.post("/token/refresh/", {
          refresh: refreshToken,
        });
        if(res.status === 200) {
          localStorage.setItem("access", res.data.access)
          setIsAuthorised(true)
        }else {
          setIsAuthorised(false)
        }
      } catch(error){
        console.log(error)
        setAuthorised(false)
      }
    }

    async function auth() {

   
    const token = localStorage.getItem("access")
    if(!token) {
      setIsAuthorised(false)
      return;
    }

      const decoded = jwtDecode(token)
      const expiry_date = decoded.exp
      const current_time = Date.now() / 1000

      if( current_time > expiry_date) {
        await refreshToken()
      }
      else {
        setIsAuthorised(true)
      }

    
  }

  // if (isAuthorised === null) {
  //     return <Spinner />
  // }
  

  return (
    <div>
      isAuthorised ? <children /> : <Navigate to="/login" />
    </div>
  )
}

export default ProtectedRoute