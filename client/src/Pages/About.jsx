import React from "react";
import { motion } from "framer-motion";
import "./About.css";

// Import images (replace with your actual images)
import AboutHero from "../assets/plywood.jpg";
import TeamImage from "../assets/plywood.jpg";
import MaterialsImage from "../assets/plywood.jpg";
import SustainabilityImage from "../assets/plywood.jpg";
import FounderImage from "../assets/plywood.jpg";
import ValuesImage from "../assets/plywood.jpg";

const About = () => {
    const milestones = [
        {
            year: "2005",
            title: "Company Founded",
            description:
                "Started as a small material supplier in San Francisco",
        },
        {
            year: "2010",
            title: "First Major Project",
            description:
                "Supplied materials for the Oceanview Tower development",
        },
        {
            year: "2014",
            title: "Sustainability Initiative",
            description: "Launched our green materials certification program",
        },
        {
            year: "2018",
            title: "International Expansion",
            description: "Opened offices in Europe and Asia",
        },
        {
            year: "2022",
            title: "Innovation Lab",
            description:
                "Established our material research and development center",
        },
    ];

    const values = [
        {
            title: "Quality",
            description:
                "We source only the finest materials that meet rigorous quality standards",
            icon: "M12 2L4 12l8 10 8-10z",
        },
        {
            title: "Innovation",
            description:
                "Constantly exploring new materials and technologies to push boundaries",
            icon: "M13 2v6h6l-8 8-8-8h6V2h4z",
        },
        {
            title: "Sustainability",
            description:
                "Committed to environmentally responsible sourcing and practices",
            icon: "M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1 5-5 8 8 0 0 0-8-8z",
        },
        {
            title: "Integrity",
            description:
                "Building trust through transparency and ethical business practices",
            icon: "M4 4h16v16H4z",
        },
    ];

    return (
        <div className="about-page">
            {/* Hero Section */}
            <section className="about-hero">
                <div className="hero-content">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="hero-title">
                        Building the Future with <span>Quality Materials</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.8 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="hero-subtitle">
                        For over 15 years, ING Construction Materials has been
                        the trusted partner for architects and builders seeking
                        exceptional materials
                    </motion.p>
                </div>
            </section>

            {/* About Intro */}
            <section className="about-intro">
                <div className="intro-container">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="intro-text">
                        <h2>Our Story</h2>
                        <p>
                            Founded in 2005, ING Construction Materials began
                            with a simple mission: to provide architects and
                            builders with access to the world's finest
                            construction materials. What started as a small
                            warehouse in San Francisco has grown into an
                            international network of material experts and
                            suppliers.
                        </p>
                        <p>
                            Today, we partner with over 200 premium
                            manufacturers across 30 countries to bring
                            innovative, sustainable, and high-performance
                            materials to projects of all scales - from private
                            residences to landmark skyscrapers.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="intro-image">
                        <img
                            src={FounderImage}
                            alt="ING Construction Materials founder"
                        />
                        <div className="image-overlay">
                            <span>Michael Ing</span>
                            <span>Founder & CEO</span>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Milestones */}
            <section className="milestones-section">
                <div className="section-container">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="section-title">
                        Our Journey
                    </motion.h2>
                    <div className="milestones-timeline">
                        {milestones.map((milestone, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    delay: index * 0.1,
                                    duration: 0.5,
                                }}
                                viewport={{ once: true }}
                                className="milestone">
                                <div className="milestone-year">
                                    {milestone.year}
                                </div>
                                <div className="milestone-content">
                                    <h3>{milestone.title}</h3>
                                    <p>{milestone.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="values-section">
                <div className="section-container">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="section-title">
                        Our Core Values
                    </motion.h2>
                    <div className="values-grid">
                        {values.map((value, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    delay: index * 0.1,
                                    duration: 0.5,
                                }}
                                viewport={{ once: true }}
                                className="value-card">
                                <div className="value-icon">
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none">
                                        <path
                                            d={value.icon}
                                            fill="currentColor"
                                        />
                                    </svg>
                                </div>
                                <h3>{value.title}</h3>
                                <p>{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team */}
            <section className="team-section">
                <div className="team-container">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="team-image">
                        <img
                            src={TeamImage}
                            alt="ING Construction Materials team"
                        />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="team-content">
                        <h2>Our Expert Team</h2>
                        <p>
                            At ING, we're proud of our team of material
                            specialists, architects, and engineers who bring
                            unparalleled expertise to every project. With an
                            average of 12 years industry experience, our
                            consultants understand both the aesthetic and
                            technical requirements of premium construction
                            materials.
                        </p>
                        <div className="team-stats">
                            <div className="stat">
                                <span className="stat-number">50+</span>
                                <span className="stat-label">
                                    Material Experts
                                </span>
                            </div>
                            <div className="stat">
                                <span className="stat-number">30</span>
                                <span className="stat-label">
                                    Countries Sourced
                                </span>
                            </div>
                            <div className="stat">
                                <span className="stat-number">1,200+</span>
                                <span className="stat-label">
                                    Projects Completed
                                </span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Sustainability */}
            <section className="sustainability-section">
                <div className="section-container">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="section-title">
                        Sustainable Materials Leadership
                    </motion.h2>
                    <div className="sustainability-content">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="sustainability-text">
                            <p>
                                We believe beautiful materials should also be
                                responsible. That's why we've developed strict
                                sustainability criteria for all our products,
                                focusing on:
                            </p>
                            <ul>
                                <li>Low-carbon production methods</li>
                                <li>Recycled and recyclable content</li>
                                <li>Ethical sourcing practices</li>
                                <li>Long product lifecycles</li>
                            </ul>
                            <p>
                                Our Green Materials Program helps architects and
                                builders make informed choices for their
                                sustainable projects.
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="sustainability-image">
                            <img
                                src={SustainabilityImage}
                                alt="Sustainable materials"
                            />
                            <div className="certification-badge">
                                <span>Certified Sustainable</span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="about-cta">
                <div className="cta-container">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="cta-title">
                        Ready to Build Something Extraordinary?
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="cta-text">
                        Our material consultants are ready to help you find the
                        perfect solutions for your project.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="cta-buttons">
                        <button className="cta-button primary">
                            Contact Our Team
                        </button>
                        <button className="cta-button secondary">
                            View Projects
                        </button>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default About;
