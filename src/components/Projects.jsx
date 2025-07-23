import React from 'react';
import '../components/Projects.css';

function Projects() {
    return (
        <section className="project" id="projects">
            <h2 className="section-title">🚀 Projects</h2>
            <div className="project-container">

                <div className="project-card">
                    <h3>✊🖐✌ Rock Paper Scissors</h3>
                    <p>🎮 Classic game using HTML, CSS, JavaScript</p>
                    <div className="project-btns">
                        <a href="https://github.com/yahoowecanwork2/rock-paper-scissors" className="btn" target="_blank" rel="noopener noreferrer">💻 Code</a>
                        <a href="https://yahoowecanwork2.github.io/rock-paper-scissors/" className="btn" target="_blank" rel="noopener noreferrer">🌐 Live Demo</a>
                    </div>
                </div>

                <div className="project-card">
                    <h3>🍳 Recipe Website</h3>
                    <p>📘 Static recipe site built with HTML & CSS</p>
                    <div className="project-btns">
                        <a href="https://github.com/yahoowecanwork2/project1-Recipe-" className="btn" target="_blank" rel="noopener noreferrer">💻 Code</a>
                        <a href="https://yahoowecanwork2.github.io/project1-Recipe-/" className="btn" target="_blank" rel="noopener noreferrer">🌐 Live Demo</a>
                    </div>
                </div>

                <div className="project-card">
                    <h3>👗 HunnyBee Website</h3>
                    <p>🛍️ Fashion e-commerce site using HTML, CSS, JS</p>
                    <div className="project-btns">
                        <a href="https://github.com/yahoowecanwork2/hunnyBee" className="btn" target="_blank" rel="noopener noreferrer">💻 Code</a>
                        <a href="https://yahoowecanwork2.github.io/hunnyBee/" className="btn" target="_blank" rel="noopener noreferrer">🌐 Live Demo</a>
                    </div>
                </div>

                <div className="project-card">
                    <h3>🌟 Portfolio Website</h3>
                    <p>🧑‍💻 Modern portfolio using React.js</p>
                    <div className="project-btns">
                        <a href="https://github.com/yahoowecanwork2/-neha-portfolio" className="btn" target="_blank" rel="noopener noreferrer">💻 Code</a>
                        <a href="https://yahoowecanwork2.github.io/-neha-portfolio/" className="btn" target="_blank" rel="noopener noreferrer">🌐 Live Demo</a>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Projects;
