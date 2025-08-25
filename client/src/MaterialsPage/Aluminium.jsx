import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./Aluminium.css";

// Example product images (replace with real product images later)
import SlidingDoorImg from "../assets/materials/aluminium-facade.jpg";
import WindowImg from "../assets/materials/aluminium-facade.jpg";
import FacadeImg from "../assets/materials/aluminium-facade.jpg";

// Manufacturer product data
const manufacturersData = [
    {
        name: "Finestra Solution",
        description: "Latvian-engineered premium aluminium systems.",
        products: [
            {
                id: 1,
                name: "Sliding Door SC-100",
                type: "Sliding Door",
                image: SlidingDoorImg,
                specs: "Thermal break technology, U-value: 1.2 W/m²K",
            },
            {
                id: 2,
                name: "Window SC-200",
                type: "Window",
                image: WindowImg,
                specs: "Double glazing, Acoustic insulation: 42 dB",
            },
        ],
    },
    {
        name: "Nefertity",
        description: "Innovative and energy-efficient aluminium solutions.",
        products: [
            {
                id: 3,
                name: "Sliding Door RY-300",
                type: "Sliding Door",
                image: SlidingDoorImg,
                specs: "Slim profiles, Max panel size: 3m x 2.4m",
            },
            {
                id: 4,
                name: "Facade RY-GlassWall",
                type: "Facade System",
                image: FacadeImg,
                specs: "Structural glazing, Wind load resistance: 3.5 kPa",
            },
        ],
    },
    {
        name: "Rabel Systems",
        description: "Modern and durable aluminium systems for all projects.",
        products: [
            {
                id: 5,
                name: "Rabel Envelop 3D",
                type: "Facade",
                image: WindowImg,
                specs: "Slim, seamless, and highly flexible facade system.",
            },
            {
                id: 6,
                name: "Facade AL-Pro",
                type: "Facade",
                image: FacadeImg,
                specs: "Unitized system, Quick installation",
            },
        ],
    },
];

// Framer Motion animation
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

const Aluminium = () => {
    const [selectedManufacturer, setSelectedManufacturer] = useState(0);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        window.scrollTo(0, 0);

        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="aluminium-page">
            {/* Hero Section */}
            <section className="aluminium-hero">
                <div className="hero-content">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="section-title">
                        <span className="accent-1">Premium </span>
                        <span className="highlight">Aluminium Products</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.8 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="hero-subtitle">
                        Discover aluminium windows, doors, and facades from
                        world-class manufacturers.
                    </motion.p>
                </div>
            </section>

            {/* Manufacturer Selector */}
            <div className="manufacturer-selector-container">
                <h3 className="manufacturer-title">Select Manufacturer</h3>
                <div className="manufacturer-selector">
                    {manufacturersData.map((manufacturer, index) => (
                        <button
                            key={index}
                            className={`manufacturer-btn ${
                                selectedManufacturer === index ? "active" : ""
                            }`}
                            onClick={() => setSelectedManufacturer(index)}
                            aria-label={`View products from ${manufacturer.name}`}>
                            {manufacturer.name}
                        </button>
                    ))}
                </div>

                {/* Manufacturer Description */}
                <motion.div
                    className="manufacturer-description"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}>
                    <p>{manufacturersData[selectedManufacturer].description}</p>
                </motion.div>
            </div>

            {/* Products Grid */}
            <section className="aluminium-container">
                <div className="materials-grid families-grid">
                    {manufacturersData[selectedManufacturer].products.map(
                        (product, index) => (
                            <motion.div
                                className="premium-card"
                                initial="offscreen"
                                whileInView="onscreen"
                                viewport={{ once: true, amount: 0.3 }}
                                variants={cardVariants}
                                key={product.id}
                                transition={{ delay: index * 0.1 }}>
                                <div className="card-inner">
                                    <div className="card-image-container">
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="card-image"
                                            loading="lazy"
                                        />
                                        <div className="card-overlay"></div>
                                        <div className="card-shine"></div>
                                        <div className="product-type-badge">
                                            {product.type}
                                        </div>
                                    </div>
                                    <div className="card-content">
                                        <div className="card-border-top"></div>
                                        <h3 className="card-title">
                                            {product.name}
                                        </h3>
                                        <p className="card-description">
                                            {product.specs}
                                        </p>
                                        <div className="card-action">
                                            <button className="view-all-button">
                                                Request Quote
                                                <svg
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M13.5 6H5.25C4.00736 6 3 7.00736 3 8.25V18.75C3 19.9926 4.00736 21 5.25 21H15.75C16.9926 21 18 19.9926 18 18.75V10.5"
                                                        stroke="currentColor"
                                                        strokeWidth="1.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                    <path
                                                        d="M16.5 3.75H21V8.25"
                                                        stroke="currentColor"
                                                        strokeWidth="1.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                    <path
                                                        d="M10.5 13.5L21 3"
                                                        stroke="currentColor"
                                                        strokeWidth="1.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )
                    )}
                </div>
            </section>

            {/* Technical Specs CTA */}
            <section className="aluminium-technical-cta">
                <div className="technical-cta-content">
                    <h3>Need Detailed Technical Specifications?</h3>
                    <p>
                        Download complete technical data sheets for all our
                        aluminium products
                    </p>
                    <button className="cta-button">
                        Download Technical Catalog
                    </button>
                </div>
            </section>
        </div>
    );
};

export default Aluminium;
