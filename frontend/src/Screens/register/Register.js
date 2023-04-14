import React, { useState, useEffect } from "react";
import "./register.css";
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { register } from '../../Actions/userAction'
import Spinner from 'react-bootstrap/Spinner';

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState('')
  const dispatch = useDispatch()
  let navigate = useNavigate()
  const userRegister = useSelector((state) => state.userRegister)

  const { loading, userInfo, error } = userRegister

  useEffect(() => {
    if (userInfo) {
      navigate('/home')
    }
  }, [userInfo, navigate])

  const handleUsernameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setMessage('Passwords do not match')
    } else {
      dispatch(register(name, email, password))
    }
  };

  return (
    <div className="login-container">
      <h1 className="login-title">Register</h1>
      <form onSubmit={handleSubmit} className="login-form">
        <div className="login-input-group">
          <label htmlFor="username" className="login-label">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={handleUsernameChange}
            className="login-input"
          />
        </div>
        <div className="login-input-group">
          <label htmlFor="email" className="login-label">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            className="login-input"
          />
        </div>
        <div className="login-input-group">
          <label htmlFor="password" className="login-label">
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
            className="login-input"
          />
        </div>
        <div className="login-input-group">
          <label htmlFor="confirm-password" className="login-label">
            Confirm Password:
          </label>
          <input
            type="password"
            id="confirm-password"
            name="confirm-password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            className="login-input"
          />
          {message && (
            <div className={message.includes('success') ? 'success-message' : 'error-message'}>
              {message}
            </div>
          )}
        </div>
        {loading ? (
          <Spinner animation="border" role="status">
            <span className="sr-only"></span>
          </Spinner>
        ) : (
          <button type="submit" className="login-submit-button">
            Submit
          </button>
        )}
      </form>
    </div>
  );
}

export default Register;
