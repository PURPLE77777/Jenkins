import React from "react";
import "../styles/header.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
    const username = useSelector((state) => state.loginReducer.userName);

    return (
        <div className="header-wrap">
            <Link to="/" className="logo"></Link>
            <div className="actions">
                {username ? (
                    <div className="username-container username-show">
                        Hello,{" "}
                        <Link to="/profile" className="username">
                            {username}
                        </Link>
                        !
                    </div>
                ) : (
                    <div className="login">
                        <Link to="/login" className="login-link">
                            Log in
                        </Link>
                    </div>
                )}
                <div className="menu">
                    <ul className="menu-list">
                        <li className="menu-item">
                            <Link to="/">HOME</Link>
                        </li>
                        {username ? (
                            <>
                                <li className="menu-item">
                                    <Link to="/table">TABLE</Link>
                                </li>
                                <li className="menu-item">
                                    <Link to="/info">ABOUT</Link>
                                </li>
                            </>
                        ) : (
                            <li className="menu-item">
                                <Link to="/info">ABOUT</Link>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Header;
