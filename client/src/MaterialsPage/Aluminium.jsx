import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./Aluminium.css";

// Example product images (replace with real product images later)
import SlidingDoorImg from "../assets/materials/aluminium-facade.jpg";
import WindowImg from "../assets/materials/aluminium-facade.jpg";
import FacadeImg from "../assets/materials/aluminium-facade.jpg";
import Rabel35000 from "../assets/Rabel-35000.webp";
import Rabel15000 from "../assets/Rabel-15000.webp";
import R2A3074Low from "../assets/R2A3074-low.jpg";
import Rabel87001 from "../assets/Rabel-8700-1.webp";
import Rabel36501 from "../assets/Rabel-3650-1.webp";
import Rabel80002 from "../assets/Rabel-8000-2.webp";
import Finestra1 from "../assets/automatic_sliding.webp";
import Finestra2 from "../assets/facade_finestra.webp";
import Finestra3 from "../assets/pe78_windows.webp";
import Finestra4 from "../assets/pe78_design_ei60.webp";
import Finestra5 from "../assets/pe78_fold.webp";
import Finestra6 from "../assets/sl1800tt.webp";

// Manufacturer product data
const manufacturersData = [
    {
        name: "Finestra Solution",
        description: "Latvian-engineered premium aluminium systems.",
        products: [
            {
                id: 1,
                name: "Automatic Sliding Doors",
                type: "Sliding Door",
                image: Finestra1,
                specs: "A new sliding door solution with ESCO automatic drives has been tested in accordance with EN 16361+A1 and EN 16005, proving durable through 1,000,000 opening and closing cycles while ensuring maximum safety and finger protection.",
            },
            {
                id: 2,
                name: "Facade PF152HI",
                type: "Facade",
                image: Finestra2,
                specs: "A mullion-transom system for curtain walls, roofs, and rooflights offers high thermal insulation, sound reduction, watertightness, wind resistance, versatile design options, and even fire-resistant solutions, with external cover profiles starting from 51 mm.",
            },

            {
                id: 3,
                name: "Windows PE78N/PE78NHI",
                type: "Windows",
                image: Finestra3,
                specs: "An insulated aluminium profile system for high-performance windows features a 42 mm multi-cavity thermal break, flexible design options, and multiple opening types, ensuring excellent thermal insulation, durability, and versatility.",
            },

            {
                id: 4,
                name: "Door PE78EI DESIGN LINE class EI60",
                type: "Fireproof door",
                image: Finestra4,
                specs: "A three-cavity profile system for internal and external fire barriers offers innovative single-side glazing, faster assembly, compatibility with EI30–EI120 fire-resistant structures, and solutions for smoke control and evacuation routes.",
            },

            {
                id: 5,
                name: "PE78 FOLD patio doors",
                type: "Fold patio doors",
                image: Finestra5,
                specs: "An ideal system for homes, restaurants, and cafés, this solution seamlessly connects indoor and outdoor spaces with durable multi-sash designs, high thermal insulation, wide glazing options, and versatile threshold solutions.",
            },

            {
                id: 6,
                name: "Sliding door SL1800TT",
                type: "Sliding door",
                image: Finestra6,
                specs: "An ideal system for homes, restaurants, and cafés, this solution seamlessly connects indoor and outdoor spaces with durable multi-sash designs, high thermal insulation, wide glazing options, and versatile threshold solutions.",
            },
        ],
    },
    {
        name: "Nefertity",
        description: "Innovative and energy-efficient aluminium solutions.",
        products: [
            {
                id: 7,
                name: "Sliding Door RY-300",
                type: "Sliding Door",
                image: SlidingDoorImg,
                specs: "Slim profiles, Max panel size: 3m x 2.4m",
            },
            {
                id: 8,
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
                name: "Rabel 35000",
                type: "Curtain Wall",
                image: Rabel35000,
                specs: "Super Thermal has been engineered to make large full glass facades spanning up to 6.5 meters from slap to slap with or without transoms",
            },
            {
                id: 6,
                name: "Rabel 15000",
                type: "Façade System",
                image: Rabel15000,
                specs: "The Rabel 15000 Slim Super Thermal is a façade system designed for large, seamless glass surfaces with hidden supports, strong thermal performance, and cost efficiency.",
            },

            {
                id: 7,
                name: "Rabel 62",
                type: "Minimal Sliding Door",
                image: R2A3074Low,
                specs: "The Rabel 62 Minimal Super Thermal is a slim, high-performance system for large openings, supporting up to 6 m heights with heavy-duty rollers and versatile thresholds.",
            },

            {
                id: 8,
                name: "Rabel 8700",
                type: "Minimal Casement System",
                image: Rabel87001,
                specs: "The Rabel 62 Minimal Super Thermal is a slim, high-performance system for large openings, supporting up to 6 m heights with heavy-duty rollers and versatile thresholds.",
            },

            {
                id: 9,
                name: "Rabel 3650",
                type: "Bi-Fold System, Top Hang",
                image: Rabel36501,
                specs: "The Rabel3650 Super Thermal is a high-insulation fold-and-slide door system up to 3.5 m high, featuring versatile thresholds, excellent water and air tightness, and customizable locking options.",
            },

            {
                id: 10,
                name: "Rabel 8000",
                type: "Pivot Entrance Door",
                image: Rabel80002,
                specs: "The Rabel 8000 Pivot Door is a durable, high-security entrance system with smooth operation, versatile finishes, and standard three-point locking.",
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
