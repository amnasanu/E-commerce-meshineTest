import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { FaUser, FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const handleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <nav>
      <div className="logo">Logo</div>
      <div className="search">
        <input type="text" placeholder="Search" />
        <button type="submit">Search</button>
      </div>
      <div className="icons">
      <FaShoppingCart className="cart-icon" />
        {userInfo ? (
          <div className="user-info" onClick={handleDropdown}>
            {userInfo.name} &#9662;
            {showDropdown && (
              <div className="dropdown">
                <p>Logout</p>
              </div>
            )}
          </div>
          
        ) : (
          <div className="user-icon" onClick={handleDropdown}>
            <FaUser />
            {showDropdown && (
              <div className="dropdown">
                <Link style={{ textDecoration: 'none' }}to="/login">Login</Link>
              </div>
            )}
          </div>
        )}
       
      </div>
    </nav>
  );
};

export default Navbar;
