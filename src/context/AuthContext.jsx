import { createContext } from "react";
import {}

const AuthProvider = createContext(false)


function AuthProvider() {
  const [isAuthenticated, setIsAuthenticated]  = useState(false)

  cons handleAuth = () => {
    const token = localStorage.getItem("access")
    if(token){
      const decoded = jwtDeocode(token)
      const expiry_data = decoded.exp
      const current_time = Date.now() / 100
      if(expiry_date >= current_time) {
        setISAuthenticated(true)
      }
    }
  }

  useEffect(() => {
    first
  
    return () => {
      second
    }
  }, [third])
  

  return <div></div>
}