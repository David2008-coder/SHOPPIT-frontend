import "./LoginPage.css";
import { useState } from "react"

const LoginPage = () => {
      const [username, setUsername] = useState("")
      const [password, setPassword] = useState("")

  return (
    <div className="login-container my-5">
      <div className="login-card shadow">
        <h2 className="login-title">Welcome Back</h2>
        <p className="login-subtitle">Please login to your account</p>
        
        <form>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">Username</label>
            <input 
              type="username"  value={username}
              onChange{(e) => setUsername(e.target.value)} 
              className="form-control" 
              id="email" 
              placeholder="Enter your username" 
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input 
             value={password}
              onChange{(e) => setPassword(e.target.password)}
              type="password" 
              className="form-control" 
              id="password" 
              placeholder="Enter your password" 
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">Login</button>
        </form>

        <div className="login-footer">
          <p><a href="#">Forgot Password?</a></p>
          <p>Don't have an account? <a href="#">Sign up</a></p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;