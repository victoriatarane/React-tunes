import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Navigation.css';

function SideNav({ isLoaded }) {
    const sessionUser = useSelector(state => state.session.user);

    let sessionLinks;
    if (sessionUser) {
        sessionLinks = (
            <>
                <nav className="side-nav">
                    <div className="sidebarlink">
                        <i className="fas fa-headphones">
                            <NavLink className="sidebarlink" to="/login">Browse Music</NavLink>
                        </i>
                    </div>
                    <div className="sidebarlink">
                        <i className="far fa-play-circle">
                            <NavLink className="sidebarlink" to="/playlists">My Playlists</NavLink>
                        </i>
                    </div>
                </nav>
            </>
        );
    } else {
        sessionLinks = (
            <>
                <nav className="side-nav">
                    <h1>Welcome!</h1>
                    {isLoaded && sessionLinks}
                </nav>
            </>

        )
    }

    return sessionLinks;
}

export default SideNav;