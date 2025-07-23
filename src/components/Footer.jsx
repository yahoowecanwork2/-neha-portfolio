import React from 'react';
import '../components/Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <p className="footer-text">
                &copy; {new Date().getFullYear()} Neha Yadav. All rights reserved.
            </p>
            <div className="footer-links">
                <a href="https://github.com/yahoowecanwork2" target="_blank" rel="noopener noreferrer">
                    GitHub
                </a>
                <a href="https://www.linkedin.com/in/neha-yadav-89b5262a7/" target="_blank" rel="noopener noreferrer">
                    LinkedIn
                </a>
                <a href="#contact">Contact</a>
            </div>
        </footer>
    );
}

export default Footer;
