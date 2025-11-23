import React from 'react';
import './AboutSection.css';

const AboutSection = () => {
    return (
        <section id="about" className="section about-section">
            <div className="container">
                <div className="about-grid">
                    <div className="about-content">
                        <h2 className="section-title">Science Meets Nature</h2>
                        <p className="about-text">
                            MycoD Biotech Ltd is an Irish student-founded nutraceutical start-up developing
                            plant-based Vitamin D₂ supplements using UV-enhanced mushrooms.
                        </p>
                        <p className="about-text">
                            Our controlled UV-bioactivation process creates a sustainable, vegan alternative
                            to traditional supplements. We are committed to ethical sourcing and scientific verification.
                        </p>
                        <ul className="feature-list">
                            <li className="feature-item">
                                <span className="feature-icon">🌱</span>
                                <span>Fully Plant-Based & Vegan</span>
                            </li>
                            <li className="feature-item">
                                <span className="feature-icon">🇮🇪</span>
                                <span>Sustainably Grown in Ireland</span>
                            </li>
                            <li className="feature-item">
                                <span className="feature-icon">🔬</span>
                                <span>Scientifically Verified</span>
                            </li>
                        </ul>
                    </div>
                    <div className="about-image-wrapper">
                        <img src="/images/product-sunshine.png" alt="MycoD Vitamin D" className="about-image" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
