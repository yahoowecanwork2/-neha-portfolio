import React, { useState } from "react";
import "../components/navabar.css";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="navbar">
            <div className="logo">Neha Yadav</div>

            <div className="menu-toggle" onClick={toggleMenu}>
                ☰
            </div>

            <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
                <li><a href="#hero">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;
