import '../components/Contact.css';
import React from 'react';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';


function Contact() {

    return (
        <section className="contact" id="contact">
            <h2>Contact me</h2>
            <p>Feel free to reach out for job opportunities, collaborations, or questions!</p>
            <div className="contact-links">
                <a href="mailto:ny663922@gmail.com" target="_blank" rel="noreferrer">
                    <FaEnvelope /> ny663922@gmail.com
                </a>
                <a href="https://www.linkedin.com/in/neha-yadav-89b5262a7/" target="_blank" rel="noreferrer">
                    <FaLinkedin /> LinkedIn
                </a>
                <a href="https://github.com/yahoowecanwork2" target="_blank" rel="noreferrer">
                    <FaGithub /> GitHub
                </a>
            </div>

        </section>
    )
}

export default Contact;