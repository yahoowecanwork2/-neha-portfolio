import React from 'react';
import '../components/service.css';
import { FaCode, FaPaintBrush, FaMobileAlt } from 'react-icons/fa';

function Services() {
    return (
        <section className="services" id="services">
            <h2 className="section-title">My Services</h2>
            <div className="services-container">
                <div className="service-card">
                    <FaCode className="service-icon" />
                    <h3>Frontend Development</h3>
                    <p>Building responsive, modern web interfaces using HTML, CSS, JS, and React.</p>
                </div>
                <div className="service-card">
                    <FaPaintBrush className="service-icon" />
                    <h3>UI/UX Design</h3>
                    <p>Designing user-friendly interfaces with a clean and modern look.</p>
                </div>
                <div className="service-card">
                    <FaMobileAlt className="service-icon" />
                    <h3>Responsive Design</h3>
                    <p>Ensuring your website looks great on all devices — mobile, tablet, and desktop.</p>
                </div>
            </div>
        </section>
    );
}

export default Services;
