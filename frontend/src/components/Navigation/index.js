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
            <>
                <nav className="navbar">
                    <div className="link">
                        <i className="fas fa-home">
                        <NavLink className="navlink home" to="/">Home</NavLink>
                        </i>
                    </div>
                    <ProfileButton user={sessionUser} />
                    <div className="link">
                        <i className="fas fa-cog">
                        <NavLink className="navlink signup" to="/signup">Settings</NavLink>
                        </i>
                    </div>
                    <div className="link">
                        <i className="fas fa-music">
                        <NavLink className="navlink songs" to="/songs">Songs</NavLink>
                        </i>
                    </div>
                </nav>
            </>
            
        );
    } else {
        sessionLinks = (
            <>
                <nav className="navbar">
                    <div className="link">
                        <i className="fas fa-home">
                        <NavLink className="navlink home" to="/">Home</NavLink>
                        </i>
                    </div>
                    <div className="link">
                        <i className="fas fa-theater-masks">
                        <NavLink className="navlink navlink" to="/login">Log In</NavLink>
                        </i>
                    </div>
                    <div className="link">
                        <i className="fas fa-file-signature">
                        <NavLink className="navlink signup" to="/signup">Sign Up</NavLink>
                        </i>
                    </div>
                    <div className="link">
                        <i className="fas fa-music">
                        <NavLink className="navlink songs" to="/songs">Songs</NavLink>
                        </i>
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