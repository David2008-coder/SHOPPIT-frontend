// import { FaCartShopping } from 'react-icons/fa6';
// import { Link } from 'react-router-dom';
// import styles from './Navbar.module.css'
// import NavBarLink from './NavBarLink'

// const Navbar = ({numCartItems}) => {
//   return (
//       <nav className={`navbar navbar-expand-lg navbar-light bg-white shadow-sm py-3 ${styles.stickyNavbar}`}>
//         <div className="container">
//           <Link className="navbar-brand fw-bold text-uppercase" to="/">SHOPPIT</Link>
//           <button 
//           className='navbar-toggler'
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarContent"
//           aria-controls="navbarContent"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//           >
//             <span className='navbar-toggler-icon'></span>

//           </button>
//           <div className="collapse navbar-collapse" id="navbarContent">
//             <NavBarLink/>
//             <Link to="/cart" className={`btn btn-dark ms-3 rounded-pill position-relative ${styles.responsiveCart}`}>
//             <FaCartShopping />
//             {numCartItems == 0 || <span 
//               className="position-absolute top-0 start-100 translate-middle badge rounded-pill"
//               style={{ fontSize: "0.85rem", padding: "0.5em 0.65em", backgroundColor: "#6050DC"}}
//             >
//               {numCartItems}
//             </span>}
            
//             </Link>
//           </div>
//         </div>
//       </nav>
//   )
// }

// export default Navbar



import { useState } from 'react';
import { FaCartShopping } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import NavBarLink from './NavBarLink';

const Navbar = ({ numCartItems }) => {
  // State to track if the mobile menu is open or closed
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`navbar navbar-expand-lg navbar-light bg-white shadow-sm py-3 ${styles.stickyNavbar}`}>
      <div className="container">
        {/* Brand Logo */}
        <Link className="navbar-brand fw-bold text-uppercase" to="/" style={{ color: '#6050DC', letterSpacing: '1px' }}>
          SHOPPIT
        </Link>

        {/* Functional Mobile Toggler */}
        <button 
          className={`navbar-toggler border-0 shadow-none ${isOpen ? '' : 'collapsed'}`} 
          type="button"
          onClick={toggleMenu}
          aria-controls="navbarContent"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible Content driven by React State */}
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarContent">
          {/* This renders Login/Register/Profile links */}
          <NavBarLink closeMenu={() => setIsOpen(false)} />
          
          {/* Cart Button inside the menu drawer on mobile */}
          <div className="d-flex align-items-center mt-3 mt-lg-0 justify-content-start justify-content-lg-end">
            <Link 
              to="/cart" 
              className={`btn btn-dark px-4 rounded-pill position-relative d-inline-flex align-items-center ${styles.cartBtn}`}
              onClick={() => setIsOpen(false)} // Closes menu when cart is clicked
            >
              <FaCartShopping />
              <span className="d-lg-none ms-2">View Cart</span>
              
              {numCartItems > 0 && (
                <span 
                  className="position-absolute top-0 start-100 translate-middle badge rounded-pill shadow-sm"
                  style={{ fontSize: "0.75rem", padding: "0.45em 0.6em", backgroundColor: "#6050DC" }}
                >
                  {numCartItems}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;