import React from 'react';
import '../components/Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <p>© {new Date().getFullYear()} Neha Yadav. All Rights Reserved.</p>
        </footer>
    );
}

export default Footer;
