import React from 'react';
import '../components/Skills.css';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaGithub } from 'react-icons/fa';

function Skill() {
    return (
        <section className="skills" id="skills">
            <h2 className="section-title">My Skills 💡</h2>
            <div className="skills-container">

                <div className="skill-card">
                    <FaHtml5 className="skill-icon html" />
                    <p>HTML5</p>
                </div>

                <div className="skill-card">
                    <FaCss3Alt className="skill-icon css" />
                    <p>CSS3</p>
                </div>

                <div className="skill-card">
                    <FaJsSquare className="skill-icon js" />
                    <p>JavaScript</p>
                </div>

                <div className="skill-card">
                    <FaReact className="skill-icon react" />
                    <p>React</p>
                </div>

                <div className="skill-card">
                    <FaGithub className="skill-icon github" />
                    <p>GitHub</p>
                </div>

            </div>
        </section>
    );
}

export default Skill;
