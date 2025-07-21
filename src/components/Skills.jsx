import '../components/Skills.css';
import React from 'react';


function Skill() {
    const skills = ['HTML5', 'CSS3', 'JavaScript',
        'React JS', 'Git & GitHub',
        'Responsive Design', 'VS Code',];
    return (
        <section className="skills" id="skills">
            <h2>My Skills</h2>
            <div className="skills-list">
                {
                    skills.map((skill, item) => (
                        <div className="skill-card" key={item}>{skill}</div>
                    ))
                }
            </div>

        </section>
    )
}

export default Skill;