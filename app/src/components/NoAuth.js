import React from "react";
import "../styles/no-auth.css";
import { Link } from "react-router-dom";

function NoAuth() {
    return (
        <div className='no-auth'>
            <h2 className='no-auth-h2'>
                Please,{" "}
                <Link to='/login' className='no-auth_log-in'>
                    log in
                </Link>{" "}
                to the site
            </h2>
        </div>
    );
}

export default NoAuth;
