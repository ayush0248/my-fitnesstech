// src/components/Features.js
import React from 'react';
import './Features.css';

const featuresData = [
    {
        icon: '🏋️‍♂️',
        title: 'Personal Training',
        description: 'Get personalized workout plans and guidance from top trainers.'
    },
    {
        icon: '📈',
        title: 'Progress Tracking',
        description: 'Track your fitness progress with detailed analytics and reports.'
    },
    {
        icon: '🧘‍♀️',
        title: 'Wellness Programs',
        description: 'Join various wellness programs to maintain a balanced lifestyle.'
    }
];

const Features = () => {
    return (
        <section className="features">
            <div className="features-content">
                <h2>Our Features</h2>
                <div className="features-grid">
                    {featuresData.map((feature, index) => (
                        <div className="feature-card" key={index}>
                            <div className="feature-icon">{feature.icon}</div>
                            <h3 className="feature-title">{feature.title}</h3>
                            <p className="feature-description">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
