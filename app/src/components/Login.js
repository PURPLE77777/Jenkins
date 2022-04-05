import React, { useState } from "react";
import "../styles/login.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

function Login() {
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);

    const dispatch = useDispatch();

    const checkName = (value) => {
        const regexp = /^[a-zA-Z]{5,12}$/gm;
        if (regexp.test(value)) {
            setUsername(true);
        } else {
            setUsername(false);
        }
    };

    const checkPass = (value) => {
        const regexp = /^[\d]{7,16}$/gm;
        if (regexp.test(value)) {
            setPassword(true);
        } else {
            setPassword(false);
        }
    };
    const logIn = () => {
        const name = document.getElementsByClassName("login_input")[0];
        sessionStorage.setItem("username", name.value);
        dispatch({ type: "login", data: name.value });
    };

    return (
        <div className='login'>
            <h1 className='login-title'>Login</h1>
            <form className='form'>
                <label className='login_label'>Username:</label>
                <input
                    className='login_input'
                    placeholder='Username'
                    name='username'
                    type='text'
                    onChange={(e) => checkName(e.target.value)}></input>
                <span
                    className={
                        username === false ? "error display-error" : "error"
                    }>
                    Username is incorrect (must contain from 5 to 12 letters)
                </span>
                <label className='login_label'>Password:</label>
                <input
                    className='login_input'
                    placeholder='Password'
                    name='password'
                    type='password'
                    onChange={(e) => checkPass(e.target.value)}></input>
                <span
                    className={
                        password === false ? "error display-error" : "error"
                    }>
                    Password is incorrect (must contain from 7 to 16 numbers)
                </span>
                <div className='btn-container'>
                    <button
                        className={
                            !(username && password) ? "btn" : "btn show-btn"
                        }
                        type='submit'>
                        <Link to='/profile' onClick={() => logIn()}>
                            Go!
                        </Link>
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Login;
