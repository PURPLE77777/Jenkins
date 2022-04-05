import React from "react";
import "../styles/footer.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Footer() {
    const username = useSelector((state) => state.loginReducer.userName);

    return (
        <div className='footer-wrap'>
            <div className='footer-menu'>
                <ul className='footer-menu_list'>
                    <li className='footer-menu_item'>
                        <Link to='/'>HOME</Link>
                    </li>
                    {username ? (
                        <>
                            <li className='menu-item'>
                                <Link to='/profile'>PROFILE</Link>
                            </li>
                            <li className='menu-item'>
                                <Link to='/table'>TABLE</Link>
                            </li>
                        </>
                    ) : (
                        <>
                            <li className='menu-item'>
                                <Link to='/login'>PROFILE</Link>
                            </li>
                        </>
                    )}
                    <li className='menu-item'>
                        <Link to='/info'>ABOUT</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Footer;
