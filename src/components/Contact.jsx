import React from 'react';
import '../components/Contact.css';

function Contact() {
    return (
        <section className="contact" id="contact">
            <h2 className="section-title">Contact Me 💬</h2>
            <p className="contact-text">
                I’d love to hear from you! Whether you have a question, a project idea, or just want to say hello — feel free to reach out.
            </p>

            <div className="contact-info">
                <p><strong>Email:</strong> <a href="mailto:ny663922@gmail.com">ny663922@gmail.com</a></p>
                <p><strong>Phone:</strong> <a href="tel:+919311836217">+91 9311836217</a></p>
                <p><strong>Location:</strong> Gurugram, Haryana</p>
            </div>

            <a href="mailto:ny663922@gmail.com" className="contact-button">📧 Say Hello</a>
        </section>
    );
}

export default Contact;
