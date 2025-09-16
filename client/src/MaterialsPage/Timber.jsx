import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./Aluminium.css"; // Reusing aluminium.css
import { useNavigate, useLocation } from "react-router-dom";

// Timber product images
import TimberDoorImg from "../assets/weitzer_parket.jpg";

// Timber manufacturers data
const timberManufacturersData = [
    {
        name: "Weitzer Parkett",
        description:
            "High-quality European wood products, offering premium parquet, flooring, and timber solutions for modern interiors.",
        products: [
            {
                id: 1,
                name: "Maintenance-Free Parquet",
                type: "Parquet Flooring",
                image: TimberDoorImg,
                specs: "Premium oak parquet, finished with natural lacquer. Ideal for residential and commercial interiors, resistant to wear and tear.",
            },
            {
                id: 2,
                name: "Pine Window Frame",
                type: "Window Frame",
                image: TimberDoorImg,
                specs: "Durable pine wood window frame with triple glazing options, excellent thermal insulation, and natural aesthetics.",
            },
            {
                id: 3,
                name: "Solid Timber Panels",
                type: "Panel",
                image: TimberDoorImg,
                specs: "Custom-sized solid timber panels for walls and furniture, sustainably sourced, with smooth surface and natural finish.",
            },
            {
                id: 4,
                name: "Engineered Oak Floor",
                type: "Flooring",
                image: TimberDoorImg,
                specs: "High-performance engineered oak floor, easy to install, scratch-resistant, and designed for longevity in high-traffic areas.",
            },
            {
                id: 5,
                name: "Outdoor Decking Planks",
                type: "Decking",
                image: TimberDoorImg,
                specs: "Weather-resistant timber decking planks, perfect for patios and terraces. Smooth surface, natural wood look, and durable finish.",
            },
            {
                id: 6,
                name: "Timber Staircase",
                type: "Stairs",
                image: TimberDoorImg,
                specs: "Premium timber staircase system with elegant design, safe and durable, suitable for modern homes and offices.",
            },
        ],
    },
];

const cardVariants = {
    offscreen: { y: 50, opacity: 0 },
    onscreen: {
        y: 0,
        opacity: 1,
        transition: { type: "spring", bounce: 0.4, duration: 0.8 },
    },
};

const Timber = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    const navigate = useNavigate();
    const location = useLocation();
    const [selectedManufacturer, setSelectedManufacturer] = useState(
        location.state?.manufacturerIndex || 0
    );

    useEffect(() => {
        window.scrollTo(0, 0);

        const handleResize = () => setIsMobile(window.innerWidth < 768);
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
                        className="section-title"
                    >
                        <span className="accent-1">Premium </span>
                        <span className="highlight">Timber Products</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.8 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="hero-subtitle"
                    >
                        Discover high-quality parquet, flooring, doors, and more
                        from world-class timber manufacturers.
                    </motion.p>
                </div>
            </section>

            {/* Manufacturer Selector */}
            <div className="manufacturer-selector-container">
                <h3 className="manufacturer-title">Select Manufacturer</h3>
                <div className="manufacturer-selector">
                    {timberManufacturersData.map((manufacturer, index) => (
                        <button
                            key={index}
                            className={`manufacturer-btn ${
                                selectedManufacturer === index ? "active" : ""
                            }`}
                            onClick={() => setSelectedManufacturer(index)}
                            aria-label={`View products from ${manufacturer.name}`}
                        >
                            {manufacturer.name}
                        </button>
                    ))}
                </div>

                <motion.div
                    className="manufacturer-description"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <p>
                        {
                            timberManufacturersData[selectedManufacturer]
                                .description
                        }
                    </p>
                </motion.div>
            </div>

            {/* Products Grid */}
            <section className="aluminium-container">
                <div className="materials-grid families-grid">
                    {timberManufacturersData[selectedManufacturer].products.map(
                        (product, index) => (
                            <motion.div
                                className="premium-card"
                                initial="offscreen"
                                whileInView="onscreen"
                                viewport={{ once: true, amount: 0.3 }}
                                variants={cardVariants}
                                key={product.id}
                                transition={{ delay: index * 0.1 }}
                            >
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
                                            <button
                                                className="view-all-button"
                                                onClick={() =>
                                                    navigate("/request-quote", {
                                                        state: {
                                                            product:
                                                                product.name,
                                                            manufacturerIndex:
                                                                selectedManufacturer,
                                                            manufacturerName:
                                                                timberManufacturersData[
                                                                    selectedManufacturer
                                                                ].name,
                                                        },
                                                    })
                                                }
                                            >
                                                Request Quote
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
                        timber products.
                    </p>
                    <button className="cta-button">
                        Download Technical Catalog
                    </button>
                </div>
            </section>
        </div>
    );
};

export default Timber;
