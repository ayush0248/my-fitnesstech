// src/components/Home.js
import React from 'react';
import './Home.css';

import Features from './Features';
import Footer from './Footer';

const Home = () => {
    return (
        <div className="home">
    
            <section id="home" className="hero">
                <div className="hero-content">
                    <h1>Welcome to Fitness Tech</h1>
                    <p>Your journey to a healthier life starts here</p>
                    <button className="cta-button">Get Started</button>
                </div>
            </section>
            <Features />
            <Footer />
            
        </div>
    );
};

export default Home;
