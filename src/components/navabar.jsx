import './navabar.css';
import React from 'react';

function Navbar() {
    return (
        <nav className="navbar">
            <h1 className="logo">Neha-Portfolio</h1>
            <ul className="nav-links">
                <li>Home</li>
                <li>About</li>
                <li>Projects</li>
                <li>Contact</li>
            </ul>

        </nav>
    )
}

export default Navbar;