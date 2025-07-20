// import './Project.css';
import React from 'react';
import hunnyBeeImg from '../imagines/Screenshot 2025-07-13 194740.png';


function Project() {
    return (
        <section className="projects" id="projects">
            <h2>My Projects</h2>
            <div className="project-list">
                <div className="project-card">
                    <img src={hunnyBeeImg} alt="hunnyBee" />
                    <h3>hunnyBee</h3>
                    <p>An e-commerce fashion website built using HTML and CSS.</p>
                    <a href="https://github.com/yahoowecanwork2/hunnyBee" target="_blank" rel="noreferrer">View Code</a>
                </div>

            </div>
        </section>
    )
}

export default Project;