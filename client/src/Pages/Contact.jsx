import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./Contact.css";

// Contact images
import OfficeImg from "../assets/materials/aluminium-facade.jpg";
import ShowroomImg from "../assets/materials/aluminium-facade.jpg";

const Contact = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        projectType: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Form submission logic would go here
        console.log("Form submitted:", formData);
        alert("Thank you for your message. We'll get back to you soon!");
        setFormData({
            name: "",
            email: "",
            company: "",
            projectType: "",
            message: "",
        });
    };

    const offices = [
        {
            id: 1,
            city: "New York",
            address: "123 Architectural Avenue, Manhattan, NY 10001",
            phone: "+1 (212) 555-7890",
            email: "ny@ing-construction.com",
            image: OfficeImg,
        },
        {
            id: 2,
            city: "London",
            address: "45 Design District, Shoreditch, London E1 6AN",
            phone: "+44 20 7946 0958",
            email: "london@ing-construction.com",
            image: ShowroomImg,
        },
        {
            id: 3,
            city: "Dubai",
            address: "78 Innovation Tower, Downtown Dubai, UAE",
            phone: "+971 4 567 8901",
            email: "dubai@ing-construction.com",
            image: OfficeImg,
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
        <div className="contact-page">
            {/* Hero Section */}
            <section className="contact-hero">
                <div className="hero-content">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="section-title">
                        <span className="accent-1">Get In </span>
                        <span className="highlight">Touch</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.8 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="hero-subtitle">
                        Let's discuss how our materials can bring your vision to
                        life
                    </motion.p>
                </div>
            </section>

            {/* Contact Methods */}
            <section className="contact-methods">
                <div className="container">
                    <div className="methods-grid">
                        <motion.div
                            className="method-card"
                            initial="offscreen"
                            whileInView="onscreen"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={cardVariants}>
                            <div className="method-icon">
                                <svg
                                    width="48"
                                    height="48"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z"
                                        stroke="var(--gold-accent)"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M22 6L12 13L2 6"
                                        stroke="var(--gold-accent)"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>
                            <h3>Email Us</h3>
                            <p>info@ing-construction.com</p>
                            <span className="method-action">
                                Send us a message
                            </span>
                        </motion.div>

                        <motion.div
                            className="method-card"
                            initial="offscreen"
                            whileInView="onscreen"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={cardVariants}
                            transition={{ delay: 0.1 }}>
                            <div className="method-icon">
                                <svg
                                    width="48"
                                    height="48"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M22 16.92V19.92C22 20.47 21.55 20.93 21 20.99C20.52 21.04 20.03 21 19.55 20.95C16.01 20.5 12.74 18.83 10.25 16.34C7.91 14 6.34 10.95 6 7.46C5.96 6.96 6 6.46 6.05 5.97C6.11 5.42 6.57 4.97 7.12 4.97H10.12C10.66 4.97 11.11 5.38 11.15 5.92C11.21 6.53 11.3 7.13 11.43 7.72C11.51 8.09 11.36 8.47 11.07 8.7L9.51 10.03C10.96 12.61 13.31 14.96 15.89 16.41L17.22 14.87C17.45 14.58 17.83 14.43 18.2 14.51C18.79 14.64 19.39 14.73 20 14.79C20.54 14.84 20.95 15.29 20.95 15.83L20.95 18.83"
                                        stroke="var(--gold-accent)"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>
                            <h3>Call Us</h3>
                            <p>+1 (800) 123-4567</p>
                            <span className="method-action">
                                Mon-Fri, 9am-5pm EST
                            </span>
                        </motion.div>

                        <motion.div
                            className="method-card"
                            initial="offscreen"
                            whileInView="onscreen"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={cardVariants}
                            transition={{ delay: 0.2 }}>
                            <div className="method-icon">
                                <svg
                                    width="48"
                                    height="48"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z"
                                        stroke="var(--gold-accent)"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
                                        stroke="var(--gold-accent)"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>
                            <h3>Visit Us</h3>
                            <p>123 Architectural Avenue, New York, NY 10001</p>
                            <span className="method-action">
                                Schedule a showroom tour
                            </span>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Contact Form & Info */}
            <section className="contact-content">
                <div className="container">
                    <div className="contact-grid">
                        {/* Contact Form */}
                        <motion.div
                            className="contact-form-container"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7 }}
                            viewport={{ once: true }}>
                            <h2>Send Us a Message</h2>
                            <form
                                className="contact-form"
                                onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="name">Full Name *</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="company">Company</label>
                                    <input
                                        type="text"
                                        id="company"
                                        name="company"
                                        value={formData.company}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="projectType">
                                        Project Type
                                    </label>
                                    <select
                                        id="projectType"
                                        name="projectType"
                                        value={formData.projectType}
                                        onChange={handleChange}>
                                        <option value="">
                                            Select project type
                                        </option>
                                        <option value="residential">
                                            Residential
                                        </option>
                                        <option value="commercial">
                                            Commercial
                                        </option>
                                        <option value="industrial">
                                            Industrial
                                        </option>
                                        <option value="institutional">
                                            Institutional
                                        </option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                                <div className="form-group full-width">
                                    <label htmlFor="message">Message *</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows="5"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required></textarea>
                                </div>
                                <button type="submit" className="submit-button">
                                    Send Message
                                    <svg
                                        width="20"
                                        height="20"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M22 2L11 13"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M22 2L15 22L11 13L2 9L22 2Z"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </button>
                            </form>
                        </motion.div>

                        {/* Office Locations */}
                        <motion.div
                            className="office-locations"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7 }}
                            viewport={{ once: true }}>
                            <h2>Our Offices</h2>
                            <div className="offices-list">
                                {offices.map((office) => (
                                    <div
                                        key={office.id}
                                        className="office-card">
                                        <div className="office-image">
                                            <img
                                                src={office.image}
                                                alt={`${office.city} office`}
                                            />
                                            <div className="office-overlay"></div>
                                            <span className="office-city">
                                                {office.city}
                                            </span>
                                        </div>
                                        <div className="office-details">
                                            <p className="office-address">
                                                {office.address}
                                            </p>
                                            <p className="office-contact">
                                                {office.phone}
                                            </p>
                                            <p className="office-email">
                                                {office.email}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="contact-faq">
                <div className="container">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="faq-title">
                        Frequently{" "}
                        <span className="accent-1">Asked Questions</span>
                    </motion.h2>

                    <div className="faq-grid">
                        <motion.div
                            className="faq-item"
                            initial="offscreen"
                            whileInView="onscreen"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={cardVariants}>
                            <h3>
                                What is your typical response time for
                                inquiries?
                            </h3>
                            <p>
                                We respond to all inquiries within 24 hours
                                during business days. For urgent matters, please
                                call our main office directly.
                            </p>
                        </motion.div>

                        <motion.div
                            className="faq-item"
                            initial="offscreen"
                            whileInView="onscreen"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={cardVariants}
                            transition={{ delay: 0.1 }}>
                            <h3>Do you offer international shipping?</h3>
                            <p>
                                Yes, we ship materials worldwide. Shipping costs
                                and timelines vary based on location and project
                                requirements.
                            </p>
                        </motion.div>

                        <motion.div
                            className="faq-item"
                            initial="offscreen"
                            whileInView="onscreen"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={cardVariants}
                            transition={{ delay: 0.2 }}>
                            <h3>Can I request material samples?</h3>
                            <p>
                                Absolutely. We provide samples for most of our
                                materials. Contact our team to request a sample
                                kit tailored to your project needs.
                            </p>
                        </motion.div>

                        <motion.div
                            className="faq-item"
                            initial="offscreen"
                            whileInView="onscreen"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={cardVariants}
                            transition={{ delay: 0.3 }}>
                            <h3>Do you work with individual homeowners?</h3>
                            <p>
                                While we primarily work with architects and
                                construction firms, we do serve individual
                                homeowners for significant projects.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
