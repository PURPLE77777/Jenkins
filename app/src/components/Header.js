import React from "react";
import "../styles/header.css";
import { Link } from "react-router-dom";

function Header() {
    return (
        <div className="header-wrap">
            <Link to="/" className="logo"></Link>
            <div className="actions">
                <div className="login">
                    <Link to="/login" className="login-link">
                        Log in
                    </Link>
                </div>
                <div className="username-container">
                    Hello,{" "}
                    <Link to="/profile" className="username">
                        username
                    </Link>
                    !
                </div>
                <div className="menu">
                    <ul className="menu-list">
                        <li className="menu-item">
                            <Link to="/">HOME</Link>
                        </li>
                        <li className="menu-item">
                            <Link to="/table">TABLE</Link>
                        </li>
                        <li className="menu-item">
                            <Link to="/info">ABOUT</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Header;
