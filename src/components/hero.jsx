import '../components/hero.css';
import React from 'react';
import image from '../imagines/portofilo.avif';
import { motion } from 'framer-motion';

function Hero() {
    return (
        <section className='hero'>

            <motion.div
                className="hero-content"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.2 }}
            >
                <h3>Hi, I'm</h3>
                <h1>Neha Yadav</h1>
                <h2>Frontend Developer</h2>
                <p>I design and build beautiful,
                    responsive websites using HTML, CSS, JavaScript & React.
                </p>
                <a href="#contact" className='hero-button'>Hire me</a>
            </motion.div>

            <motion.div
                className="hero-image"
                initial={{ opacity: 0, x: 100 }}
                animate={{
                    opacity: 1,
                    x: [0, 10, -10, 10, -10, 0]  // left-right move
                }}
                transition={{
                    duration: 2,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "loop"
                }}
            >
                <img src={image} alt="Neha Yadav" />
            </motion.div>



        </section>
    );
}

export default Hero;
