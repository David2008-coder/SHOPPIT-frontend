// import { useContext } from 'react';
// import { NavLink } from "react-router-dom";
// import { AuthContext } from "../../context/AuthContext"

// const NavBarLink = () => {

//   const { isAuthenticated, setIsAuthenticated, username } = useContext(AuthContext);

//   function logout() {
//     localStorage.removeItem("access")
//     setIsAuthenticated(false)
//   }

//   return (
//     <ul className="navbar-nav ms-auto m-2 mb-lg-0">
//       {isAuthenticated ? 
// (
// <>
              
//       <li className="nav-item">
//         <NavLink
//         to="/profile"
//         className={({ isActive }) =>
//           isActive ? "nav-link active fw-semibold" : "nav-link fw-semibold" 
//       }
//       end
//       >
//         {`Hi ${username}`}
//         </NavLink>
//       </li>
      
      
//       <li className="nav-item" onClick={logout}>
//         <NavLink
//         to="/"
//         className={({ isActive }) =>
//           isActive ? "nav-link active fw-semibold": "nav-link fw-semibold" 
//       }
//       end
//       >
//         Logout
//         </NavLink>
//       </li>
      
//       </>
// )
// :
// (
// <>
//       <li className="nav-item">
//         <NavLink
//         to="/login"
//         className={({ isActive }) =>
//           isActive ? "nav-link active fw-semibold": "nav-link fw-semibold" 
//       }
//       end
//       >
//         Login
//         </NavLink>
//       </li>
      
      
//       <li className="nav-item">
//         <NavLink
//         to="/register"
//         className={({ isActive }) =>
//           isActive ? "nav-link active fw-semibold": "nav-link fw-semibold" 
//       }
//       end
//       >
//         Register
//         </NavLink>
//       </li>
// </>
// )
// }
      
      



//     </ul>
//   )
// }

// export default NavBarLink



import { useContext } from 'react';
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const NavBarLink = ({ closeMenu }) => {
  const { isAuthenticated, setIsAuthenticated, username } = useContext(AuthContext);

  function logout() {
    localStorage.removeItem("access");
    setIsAuthenticated(false);
    if (closeMenu) closeMenu(); // Close mobile menu on logout
  }

  const getLinkClass = ({ isActive }) => 
    `nav-link fw-semibold px-3 py-2 rounded-3 text-start ${
      isActive ? "text-primary bg-light" : "text-secondary"
    }`;

  return (
    <ul className="navbar-nav ms-auto my-2 mb-lg-0 align-items-stretch align-items-lg-center gap-1">
      {isAuthenticated ? (
        <>
          <li className="nav-item" onClick={closeMenu}>
            <NavLink to="/profile" className={getLinkClass} end>
              <span className="text-muted fw-normal me-1">Hi,</span> 
              <span className="text-dark fw-bold">{username}</span>
            </NavLink>
          </li>
          
          <li className="nav-item" onClick={logout}>
            <NavLink to="/" className={getLinkClass} end>
              Logout
            </NavLink>
          </li>
        </>
      ) : (
        <>
          <li className="nav-item" onClick={closeMenu}>
            <NavLink to="/login" className={getLinkClass} end>
              Login
            </NavLink>
          </li>
          
          <li className="nav-item" onClick={closeMenu}>
            <NavLink to="/register" className={getLinkClass} end>
              Register
            </NavLink>
          </li>
        </>
      )}
    </ul>
  );
};

export default NavBarLink;