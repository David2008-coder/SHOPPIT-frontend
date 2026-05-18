import React from 'react'

const ProtectedRoute = ({children}) => {

  const [isAuthorized, setIsAuthorized] = useState(null)

    async function refreshToken() {

    }

    async function auth() {

   
    const token = localStorage.getItem("access")
    if(!token) {
      setIsAuthorized(false)
      return;
    }
      const decoded = jwtDecode(token)
      const expiry_date = decoded.exp
      const current_time = Date.now() / 1000

      if( current_time > expiry_date) {
        await refreshToken()
      }
      else {
        setIsAuthorized(true)
      }

    
    return config;
  }
  

  return (
    <div>
      
    </div>
  )
}

export default ProtectedRoute