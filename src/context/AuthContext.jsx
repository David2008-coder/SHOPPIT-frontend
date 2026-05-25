import { createContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

export const AuthContext = createContext(false)


export function AuthProvider({children}) {

  const [isAuthenticated, setISAuthenticated]  = useState(false)

  const handleAuth = () => {
    const token = localStorage.getItem("access")
    if(token){
      const decoded = jwtDeocode(token)
      const expiry_data = decoded.exp
      const current_time = Date.now() / 1000
      if(expiry_date >= current_time) {
        setISAuthenticated(true)
      }
    }
  }

  useEffect(function() {
    handleAuth
  }, [])

  const authValue = {isAuthenticated, setISAuthenticated}
  

  return <AuthContext.Provider value={authValue}>
    {children}
    </AuthContext.Provider>
}