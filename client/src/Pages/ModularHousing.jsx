import React, { useState, useEffect, useRef } from "react";
import "./ModularHousing.css";

const ModularHousing = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const sectionRefs = [
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
    ];

    useEffect(() => {
        setIsVisible(true);

        const observers = sectionRefs.map((ref) => {
            return new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                    }
                },
                { threshold: 0.1 }
            );
        });

        sectionRefs.forEach((ref, index) => {
            if (ref.current) {
                observers[index].observe(ref.current);
            }
        });

        return () => {
            sectionRefs.forEach((ref, index) => {
                if (ref.current) {
                    observers[index].unobserve(ref.current);
                }
            });
        };
    }, []);

    const tabs = [
        {
            title: "Design & Planning",
            content:
                "Our expert team works with you to design modular homes that meet your specific requirements while maximizing efficiency and sustainability.",
            icon: "📐",
        },
        {
            title: "Factory Construction",
            content:
                "Precision manufacturing in controlled environments ensures higher quality, reduced waste, and faster completion times compared to traditional building methods.",
            icon: "🏭",
        },
        {
            title: "Transport & Assembly",
            content:
                "We expertly transport modules to your site and assemble them with minimal disruption, dramatically reducing on-site construction time.",
            icon: "🚚",
        },
        {
            title: "Finishing & Handover",
            content:
                "Final connections and finishes are completed with meticulous attention to detail before handing over your ready-to-live-in modular home.",
            icon: "🔑",
        },
    ];

    const features = [
        {
            title: "Sustainable Materials",
            description:
                "Eco-friendly building materials with high insulation properties",
            icon: "🌿",
        },
        {
            title: "Energy Efficient",
            description:
                "Designed to minimize energy consumption and reduce carbon footprint",
            icon: "⚡",
        },
        {
            title: "Customizable Designs",
            description:
                "Tailor your home to your specific needs and aesthetic preferences",
            icon: "🎨",
        },
        {
            title: "Faster Completion",
            description:
                "Reduce construction time by up to 50% compared to traditional methods",
            icon: "⏱️",
        },
        {
            title: "Cost Effective",
            description:
                "Predictable pricing with fewer unexpected expenses during construction",
            icon: "💰",
        },
        {
            title: "Quality Assurance",
            description:
                "Factory-controlled conditions ensure superior quality and precision",
            icon: "✅",
        },
    ];

    const projects = [
        {
            name: "Urban Eco Home",
            type: "Residential",
            description:
                "A sustainable inner-city dwelling with rooftop garden",
        },
        {
            name: "Mountain Retreat",
            type: "Vacation Home",
            description: "Weather-resistant modular cabin for all seasons",
        },
        {
            name: "Coastal Residence",
            type: "Luxury Home",
            description:
                "Designed to withstand coastal conditions with panoramic views",
        },
        {
            name: "Suburban Family",
            type: "Family Home",
            description: "Spacious modular design with flexible living areas",
        },
        {
            name: "Rural Farmstead",
            type: "Agricultural",
            description: "Practical modular solution for rural living",
        },
        {
            name: "Lakefront Getaway",
            type: "Vacation Home",
            description: "Compact yet comfortable modular retreat",
        },
    ];

    return (
        <div className={`modular-housing ${isVisible ? "visible" : ""}`}>
            {/* Hero Section */}
            <section className="hero" ref={sectionRefs[0]}>
                <div className="hero-content">
                    <h1 className="hero-title">
                        ING Modular <span className="highlight"> Housing </span>
                        Solutions
                    </h1>
                    <p className="hero-subtitle">
                        Revolutionizing home building with precision,
                        sustainability, and elegance
                    </p>
                    <button className="cta-button">
                        Explore Our Solutions
                    </button>
                </div>
                <div className="hero-image">
                    <div className="image-placeholder">
                        <span>Modern Modular Home Visualization</span>
                    </div>
                </div>
            </section>

            {/* Intro Section */}
            <section className="intro-section" ref={sectionRefs[1]}>
                <div className="intro-content">
                    <h2>
                        Building the <span className="highlight">Future</span>
                    </h2>
                    <p>
                        ING Modular Housing Solutions combines innovative
                        engineering with exquisite design to create sustainable,
                        high-quality homes that are built faster and with less
                        environmental impact than traditional construction
                        methods.
                    </p>
                    <p>
                        Our precision manufacturing process ensures consistent
                        quality, reduced waste, and predictable timelines,
                        making the dream of custom home ownership more
                        accessible than ever before.
                    </p>
                </div>
                <div className="intro-stats">
                    <div className="stat">
                        <span className="stat-number">40%</span>
                        <span className="stat-label">Faster Construction</span>
                    </div>
                    <div className="stat">
                        <span className="stat-number">30%</span>
                        <span className="stat-label">Cost Savings</span>
                    </div>
                    <div className="stat">
                        <span className="stat-number">50%</span>
                        <span className="stat-label">Less Waste</span>
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="process-section" ref={sectionRefs[2]}>
                <h2>Our Modular Building Process</h2>
                <p className="section-intro">
                    Experience the future of home construction with our
                    streamlined, efficient process
                </p>

                <div className="process-tabs">
                    {tabs.map((tab, index) => (
                        <div
                            key={index}
                            className={`tab ${
                                activeTab === index ? "active" : ""
                            }`}
                            onClick={() => setActiveTab(index)}>
                            <span className="tab-icon">{tab.icon}</span>
                            <span className="tab-title">{tab.title}</span>
                        </div>
                    ))}
                </div>

                <div className="tab-content">
                    <div className="tab-content-inner">
                        <h3>{tabs[activeTab].title}</h3>
                        <p>{tabs[activeTab].content}</p>
                    </div>
                    <div className="tab-visual">
                        <div className="visual-placeholder">
                            <span>Process Visualization {activeTab + 1}</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="features-section" ref={sectionRefs[3]}>
                <h2>Why Choose ING Modular Solutions</h2>
                <p className="section-intro">
                    Superior quality, sustainability, and value in every home we
                    create
                </p>

                <div className="features-grid">
                    {features.map((feature, index) => (
                        <div key={index} className="feature-card">
                            <div className="feature-icon">{feature.icon}</div>
                            <h3>{feature.title}</h3>
                            <p>{feature.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Gallery Section */}
            <section className="gallery-section" ref={sectionRefs[4]}>
                <h2>Our Modular Projects</h2>
                <p className="section-intro">
                    Explore our portfolio of innovative modular housing
                    solutions
                </p>

                <div className="gallery-grid">
                    {projects.map((project, index) => (
                        <div key={index} className="gallery-item">
                            <div className="gallery-image">
                                <span>Modular Home Project {index + 1}</span>
                            </div>
                            <div className="gallery-info">
                                <h3>{project.name}</h3>
                                <span className="project-type">
                                    {project.type}
                                </span>
                                <p>{project.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section">
                <div className="cta-content">
                    <h2>Ready to Build Your Modular Home?</h2>
                    <p>
                        Contact us today to discuss your project and discover
                        how our modular solutions can work for you
                    </p>
                    <button className="cta-button">Get in Touch</button>
                </div>
            </section>
        </div>
    );
};

export default ModularHousing;
