import React, { useState, useEffect } from "react";
import "./Login.css";
import { useNavigate, Link } from 'react-router-dom'
import { login } from '../../Actions/userAction'
import { useDispatch, useSelector } from 'react-redux'
import Spinner from 'react-bootstrap/Spinner';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch()
    let navigate = useNavigate()

    const userLogin = useSelector(state => state.userLogin)
    const { error, loading, userInfo } = userLogin

    useEffect(() => {
        if (userInfo) {
            navigate('/')
        }
    }, [userInfo])

    const handleEmaileChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(login(email, password))
        console.log(`Username: ${email}, Password: ${password}`);
    };

    return (
        <div className="login-container">
            <h1 className="login-title">Login</h1>
            <form onSubmit={handleSubmit} className="login-form">

                <div className="login-input-group">
                    <label htmlFor="email" className="login-label">
                        email:
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={handleEmaileChange}
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
                {error && (
                    <p className="error-message">{error}</p>
                )}
                {loading ? (
                    <Spinner animation="border" role="status">
                        <span className="sr-only"></span>
                    </Spinner>
                ) : (
                    <button type="submit" className="login-submit-button">
                        Submit
                    </button>
                )}

                <br></br>
                <p style={{ color: 'white', textDecoration: 'none' }}>
                    <Link to='/register' className="link" style={{ color: 'white', textDecoration: 'none' }}>
                        create account
                    </Link>
                </p>
            </form>
        </div>
    );
}

export default Login;
