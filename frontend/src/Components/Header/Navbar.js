import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaUser, FaShoppingCart } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../../Actions/userAction';
import { Button, Form } from 'react-bootstrap';
import './navbar.css';

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const dispatch = useDispatch();
  const [keyword, setKeyword] = useState('');
  let navigate = useNavigate();

  const handleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleLogout = () => {
    dispatch(logout());
    setShowDropdown(false);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword) {
      navigate(`/?keyword=${keyword}`);
    } else {
      navigate('/');
    }
  };

  return (
    <nav>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <div className="logo">Home</div>
      </Link>
      <Form onSubmit={submitHandler} className="search">
        <Form.Control
          type="text"
          name="q"
          onChange={(e) => setKeyword(e.target.value)}
          className="mr-sm-2 ml-sm-5"
          placeholder="Search"
        />
        <Button type="submit" variant="outline-success" className="p-2">
          Submit
        </Button>
      </Form>
      <div className="icons">
        <Link to="/cart">
          <FaShoppingCart className="cart-icon" />
        </Link>

        {userInfo ? (
          <div className="user-info" onClick={handleDropdown}>
            {userInfo.name} &#9662;
            {showDropdown && (
              <div className="dropdown">
                <p onClick={handleLogout}>Logout</p>
              </div>
            )}
          </div>
        ) : (
          <div className="user-icon" onClick={handleDropdown}>
            <FaUser />
            {showDropdown && (
              <div className="dropdown">
                <Link style={{ textDecoration: 'none' }} to="/login">
                  Login
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
