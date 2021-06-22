import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';

function Navigation({ isLoaded }) {
    const sessionUser = useSelector(state => state.session.user);

    let sessionLinks;
    if (sessionUser) {
        sessionLinks = (
            <ProfileButton user={sessionUser} />
        );
    } else {
        sessionLinks = (
            <>
                <nav className="navbar">
                    <div className="link">
                        <NavLink className="home" to="/">Home</NavLink>
                    </div>
                    <div className="link">
                        <NavLink className="login" to="/login">Log In</NavLink>
                    </div>
                    <div className="link">
                        <NavLink className="signup" to="/signup">Sign Up</NavLink>
                    </div>
                    <div className="link">
                        <NavLink className="songs" to="/songs">Songs</NavLink>
                    </div>
                </nav>
            </>
        );
    }

    return (
        <ul>
            <li>
                <NavLink exact to="/">Home</NavLink>
                {isLoaded && sessionLinks}
            </li>
        </ul>
    );
}

export default Navigation;