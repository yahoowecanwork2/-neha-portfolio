import React from 'react';
import '../components/Projects.css';

function Projects() {
    return (
        <section className="project" id="projects">
            <h2 className="section-title">Projects</h2>
            <div className="project-container">

                <div className="project-card">
                    <h3>Rock Paper Scissors</h3>
                    <p>Classic game using HTML, CSS, JavaScript</p>
                    <a href="https://your-live-link.com" target="_blank">Live Demo</a>
                    <a href="https://github.com/yahoowecanwork2/rock-paper-scissors" target="_blank">Code</a>
                </div>

                <div className="project-card">
                    <h3>Recipe Website</h3>
                    <p>Static recipe site built with HTML & CSS</p>
                    <a href="https://your-live-link.com" target="_blank">Live Demo</a>
                    <a href="https://github.com/..." target="_blank">Code</a>
                </div>

                <div className="project-card">
                    <h3>HunnyBee Website</h3>
                    <p>Fashion e-commerce site using HTML, CSS, JS</p>
                    <a href="https://your-live-link.com" target="_blank">Live Demo</a>
                    <a href="https://github.com/..." target="_blank">Code</a>
                </div>

                <div className="project-card">
                    <h3>Portfolio Website</h3>
                    <p>Modern portfolio using React.js</p>
                    <a href="https://your-live-link.com" target="_blank">Live Demo</a>
                    <a href="https://github.com/..." target="_blank">Code</a>
                </div>

            </div>
        </section>
    );
}

export default Projects;
