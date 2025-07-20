import '../components/Projects.css';
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
                <div className="project-card">
                    {/* <img src={portfolioImg} alt="Portfolio" /> */}
                    <h3>React Portfolio</h3>
                    <p>Personal portfolio website made with React and styled with CSS.</p>
                    <a href="https://github.com/yahoowecanwork2/neha-portfolio" target="_blank" rel="noreferrer">View Code</a>
                </div>
                <div className="project-card">
                    {/* <img src={recipeBookImg} alt="Recipe Book" /> */}
                    <h3>Recipe Book</h3>
                    <p>A simple recipe book web app built with React. You can add or view recipe cards.</p>
                    <a href="https://github.com/yahoowecanwork2" target="_blank" rel="noreferrer">View Code</a>
                </div>
                <div className="project-card">
                    {/* <img src={rpsImg} alt="Rock Paper Scissors" /> */}
                    <h3>Rock Paper Scissors</h3>
                    <p>Interactive game built using HTML, CSS, and JavaScript where you play against the computer.</p>
                    <a href="https://github.com/yahoowecanwork2" target="_blank" rel="noreferrer">View Code</a>
                </div>

            </div>
        </section>
    )
}

export default Project;