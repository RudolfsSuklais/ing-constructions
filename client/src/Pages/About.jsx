import React, { useEffect } from "react";
import { motion } from "framer-motion";
import "./About.css";

// Team member images (replace with your actual team photos)
import SALES from "../assets/Sales.jpg";
import Architect from "../assets/materials/aluminium-facade.jpg";
import Engineer from "../assets/materials/aluminium-facade.jpg";
import Designer from "../assets/materials/aluminium-facade.jpg";

const About = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const teamMembers = [
        {
            id: 1,
            name: "Abdelrahman Abdelaziz",
            role: "Sales & Logistics",
            phone: "+971 588 357 385",
            email: "sales@ing-construction-materials.com",
            bio: "Abdelrahman specializes in building strong client relationships and ensuring seamless coordination between sales and logistics.",
            image: SALES,
        },
        {
            id: 2,
            name: "Sarah Johnson",
            role: "Head Architect",
            phone: "+123 555 6789",
            email: "sarah.johnson@example.com",
            bio: "Sarah brings innovative design perspectives and ensures our materials meet the highest architectural standards.",
            image: Architect,
        },
        {
            id: 3,
            name: "David Rodriguez",
            role: "Chief Engineer",
            phone: "+123 444 9876",
            email: "david.rodriguez@example.com",
            bio: "David's expertise in material science and structural engineering guarantees the technical excellence of our products.",
            image: Engineer,
        },
        {
            id: 4,
            name: "Elena Petrova",
            role: "Design Director",
            phone: "+123 333 4567",
            email: "elena.petrova@example.com",
            bio: "Elena's keen eye for aesthetics and sustainability shapes our material collections for modern construction needs.",
            image: Designer,
        },
    ];

    // Animation variants
    const cardVariants = {
        offscreen: {
            y: 50,
            opacity: 0,
        },
        onscreen: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                bounce: 0.4,
                duration: 0.8,
            },
        },
    };

    return (
        <div className="about-page">
            {/* Hero Section */}
            <section className="about-hero">
                <div className="hero-content">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="section-title">
                        <span className="accent-1">Building The Future </span>
                        <span className="highlight">
                            With Quality Materials
                        </span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.8 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="hero-subtitle">
                        For architects, builders, and visionaries who demand
                        excellence
                    </motion.p>
                </div>
            </section>

            {/* Company Overview */}
            <section className="about-overview">
                <div className="container">
                    <motion.div
                        className="overview-content"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}>
                        <h2>Our Story</h2>
                        <div className="overview-text">
                            <p>
                                Founded in 2010, ing-construction-materials has
                                established itself as a premier supplier of
                                high-quality building materials for
                                architectural and construction projects
                                worldwide. We bridge the gap between innovative
                                manufacturers and visionary architects and
                                builders.
                            </p>
                            <p>
                                Our curated selection of aluminium, wood, glass,
                                concrete, and specialty materials represents the
                                finest products from leading global
                                manufacturers, carefully selected for their
                                performance, sustainability, and aesthetic
                                qualities.
                            </p>
                            <p>
                                Today, we partner with renowned architectural
                                firms and construction companies across Europe,
                                North America, and Asia, providing not just
                                materials but complete solutions for projects
                                that define skylines and communities.
                            </p>
                        </div>
                    </motion.div>

                    <div className="stats-grid">
                        <motion.div
                            className="stat-item"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}>
                            <h3>500+</h3>
                            <p>Projects Completed</p>
                        </motion.div>
                        <motion.div
                            className="stat-item"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            viewport={{ once: true }}>
                            <h3>13</h3>
                            <p>Years Experience</p>
                        </motion.div>
                        <motion.div
                            className="stat-item"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}>
                            <h3>40+</h3>
                            <p>Countries Served</p>
                        </motion.div>
                        <motion.div
                            className="stat-item"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            viewport={{ once: true }}>
                            <h3>200+</h3>
                            <p>Material Partners</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="about-values">
                <div className="container">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="values-title">
                        Our <span className="accent-1">Values</span>
                    </motion.h2>

                    <div className="values-grid">
                        <motion.div
                            className="value-card"
                            initial="offscreen"
                            whileInView="onscreen"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={cardVariants}>
                            <div className="value-icon">✓</div>
                            <h3>Quality Assurance</h3>
                            <p>
                                Every material in our portfolio undergoes
                                rigorous testing to meet international standards
                                and our own exacting criteria.
                            </p>
                        </motion.div>

                        <motion.div
                            className="value-card"
                            initial="offscreen"
                            whileInView="onscreen"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={cardVariants}
                            transition={{ delay: 0.1 }}>
                            <div className="value-icon">♻</div>
                            <h3>Sustainability</h3>
                            <p>
                                We prioritize eco-friendly materials and
                                suppliers who demonstrate responsible
                                manufacturing practices.
                            </p>
                        </motion.div>

                        <motion.div
                            className="value-card"
                            initial="offscreen"
                            whileInView="onscreen"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={cardVariants}
                            transition={{ delay: 0.2 }}>
                            <div className="value-icon">⚡</div>
                            <h3>Innovation</h3>
                            <p>
                                We continuously seek out cutting-edge materials
                                and technologies that push the boundaries of
                                modern construction.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="about-team">
                <div className="container">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="team-title">
                        Our <span className="accent-1">Leadership</span> Team
                    </motion.h2>

                    <div className="team-grid">
                        {teamMembers.map((member) => (
                            <motion.div
                                className="team-card"
                                key={member.id}
                                initial="offscreen"
                                whileInView="onscreen"
                                viewport={{ once: true, amount: 0.3 }}
                                variants={cardVariants}>
                                <div className="team-image-container">
                                    <img src={member.image} alt={member.name} />
                                    <div className="team-overlay"></div>
                                </div>
                                <div className="team-content">
                                    <h3>{member.name}</h3>
                                    <p className="team-role">{member.role}</p>
                                    <div className="team-contact">
                                        <p>
                                            <i className="fa-solid fa-phone"></i>{" "}
                                            {member.phone}
                                        </p>
                                        <p>✉ {member.email}</p>
                                    </div>

                                    <p className="team-bio">{member.bio}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="about-cta">
                <div className="cta-content">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}>
                        <span className="accent-1">Partner With Us</span> On
                        Your Next Project
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 0.8 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}>
                        Our team of experts is ready to help you select the
                        perfect materials for your vision.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="cta-actions">
                        <button className="view-all-button">
                            Contact Our Team
                        </button>
                        <button className="view-all-button-secondary">
                            View Our Projects
                        </button>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default About;
