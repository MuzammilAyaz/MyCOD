import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="container hero-container">
                <div className="hero-content">
                    <div className="hero-badge">
                        <span className="badge-icon">🌿</span> 100% Plant-Based
                    </div>
                    <h1 className="hero-title">
                        Nature’s Best <br />
                        <span className="highlight">Vitamin D</span>
                    </h1>
                    <p className="hero-subtitle">
                        Sustainably grown in Ireland. Powered by mushrooms.
                        The natural way to boost your immunity and mood.
                    </p>
                    <div className="hero-actions">
                        <button className="btn btn-primary" onClick={(e) => { e.preventDefault(); document.getElementById('products').scrollIntoView({ behavior: 'smooth' }); }}>
                            Shop Collection
                        </button>
                        <button className="btn btn-outline" onClick={(e) => { e.preventDefault(); document.getElementById('about').scrollIntoView({ behavior: 'smooth' }); }}>
                            Our Story
                        </button>
                    </div>
                </div>

                <div className="hero-visual-2d">
                    <div className="blob blob-1"></div>
                    <div className="blob blob-2"></div>
                    <img src="/images/hero_illustration_2d.png" alt="Mushroom Illustration" className="hero-illustration" />

                    {/* Floating Icons */}
                    <div className="float-icon icon-1">🍄</div>
                    <div className="float-icon icon-2">☀️</div>
                    <div className="float-icon icon-3">🍂</div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
