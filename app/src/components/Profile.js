import React from "react";
import { useSelector } from "react-redux";
import NoAuth from "./NoAuth";
import "../styles/profile.css";

function Profile() {
    const username = useSelector((state) => state.loginReducer.userName);

    return (
        <>
            {username ? (
                <div className='profile'>
                    <h2 className='profile-title'>{username}</h2>
                    <div className='my-info'>
                        <div className='my-img'></div>
                        <div className='my-data'>
                            <ul className='data-list'>
                                About me:
                                <li className='data-item'>
                                    First name - Slava
                                </li>
                                <li className='data-item'>
                                    Last name - Programistov
                                </li>
                                <li className='data-item'>
                                    Birthday - 28.03.2015
                                </li>
                                <li className='data-item'>
                                    Data of registration - 23.12.2021
                                </li>
                                <li className='data-item'>
                                    Time on site - 12843 sec
                                </li>
                                <li className='data-item'>
                                    Favourite computer game - Sea Battle
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            ) : (
                <NoAuth></NoAuth>
            )}
        </>
    );
}

export default Profile;
