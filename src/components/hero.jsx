import './hero.css';
import React from 'react';
import image from '../imagines/image.jpg';

function Hero() {
    return (
        <section className='hero'>
            <div className="hero-text">
                <h1>Hi, I'm <span>Neha Yadav</span></h1>
                <h2>Frontend Developer</h2>
                <p>I design and build beautiful, responsive websites using HTML, CSS, JavaScript & React.</p>
                <a href="#projects"><button>View My Work</button></a>
            </div>
            <div className="hero-image">
                <img src={image} alt="Neha Portfolio Banner" />
            </div>
        </section>
    )
}

export default Hero;