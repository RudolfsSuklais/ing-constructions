import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./Materials.css";

// Example product category images (replace with yours)
import AluminiumImg from "../assets/materials/aluminium-facade.jpg";
import WoodImg from "../assets/materials/osb.jpg";
import ConcreteImg from "../assets/materials/concrete.jpg";
import GlassImg from "../assets/materials/glass-facade.jpg";
import RoofingImg from "../assets/materials/roofing.png";
import MarbleImg from "../assets/materials/marble.jpg";
import SteelImg from "../assets/materials/steel.jpg";
import InsulationImg from "../assets/materials/insulation.jpeg";
import CeramicImg from "../assets/materials/ceramic-tiles.jpeg";

const Materials = () => {
    const [imagesLoaded, setImagesLoaded] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);

        // Preload images for better UX
        const imageUrls = [
            AluminiumImg,
            WoodImg,
            ConcreteImg,
            GlassImg,
            RoofingImg,
            MarbleImg,
            SteelImg,
            InsulationImg,
            CeramicImg,
        ];

        Promise.all(
            imageUrls.map((url) => {
                return new Promise((resolve, reject) => {
                    const img = new Image();
                    img.src = url;
                    img.onload = resolve;
                    img.onerror = reject;
                });
            })
        )
            .then(() => {
                setImagesLoaded(true);
            })
            .catch(() => {
                setImagesLoaded(true); // Still show content even if some images fail
            });
    }, []);

    const productFamilies = [
        {
            id: "aluminium",
            name: "Aluminium Products",
            description:
                "Doors, windows, facades and more in premium aluminium systems.",
            image: AluminiumImg,
        },
        {
            id: "wood",
            name: "Wood Products",
            description:
                "Sustainable timber, plywood, MDF and engineered wood solutions.",
            image: WoodImg,
        },
        {
            id: "concrete",
            name: "Concrete & Masonry",
            description:
                "Architectural concrete, bricks and innovative masonry solutions.",
            image: ConcreteImg,
        },
        {
            id: "glass",
            name: "Glass & Facade Systems",
            description:
                "Curtain walls, smart glass and high-performance glazing systems.",
            image: GlassImg,
        },
        {
            id: "roofing",
            name: "Roofing Systems",
            description:
                "Durable roofing materials with both functionality and style.",
            image: RoofingImg,
        },
        {
            id: "marble",
            name: "Marble & Natural Stone",
            description:
                "High-quality marble, granite, and other natural stones for floors, walls, and facades.",
            image: MarbleImg,
        },
        {
            id: "steel",
            name: "Steel & Metal Structures",
            description:
                "Structural steel, beams, and metal elements for modern architecture.",
            image: SteelImg,
        },
        {
            id: "insulation",
            name: "Insulation & Energy Systems",
            description:
                "Advanced thermal and acoustic insulation solutions for sustainable buildings.",
            image: InsulationImg,
        },
        {
            id: "ceramic",
            name: "Ceramic & Tiles",
            description:
                "Premium ceramic tiles and porcelain solutions for floors, walls, and decorative surfaces.",
            image: CeramicImg,
        },
    ];

    // Card animation variants
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
        <div className="materials-page">
            {/* Loading State */}
            {!imagesLoaded && (
                <div className="loading-overlay">
                    <div className="loading-spinner"></div>
                </div>
            )}

            {/* Hero Section */}
            <section className="materials-hero">
                <div className="hero-content">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="section-title">
                        <span className="accent-1">Explore Our </span>
                        <span className="highlight">Product Families</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.8 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="hero-subtitle">
                        Discover aluminium, wood, glass, concrete and more –
                        curated for your projects.
                    </motion.p>
                </div>
            </section>

            {/* Product Families Grid */}
            <section
                className="materials-container"
                aria-label="Product categories">
                <div className="materials-grid families-grid">
                    {productFamilies.map((family, index) => (
                        <motion.div
                            className="premium-card"
                            initial="offscreen"
                            whileInView="onscreen"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={cardVariants}
                            key={family.id}
                            style={{ animationDelay: `${index * 0.1}s` }}>
                            <Link
                                to={`/materials/${family.id}`}
                                aria-label={`View ${family.name}`}>
                                <div className="card-inner">
                                    <div className="card-image-container">
                                        <img
                                            src={family.image}
                                            alt={family.name}
                                            className="card-image"
                                            loading="lazy"
                                        />
                                        <div className="card-overlay"></div>
                                        <div className="card-shine"></div>
                                    </div>
                                    <div className="card-content">
                                        <div className="card-border-top"></div>
                                        <h3 className="card-title">
                                            {family.name}
                                        </h3>
                                        <p className="card-description">
                                            {family.description}
                                        </p>
                                        <div className="card-action">
                                            <span className="view-products-btn">
                                                View Collection
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
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="materials-cta">
                <div className="cta-content">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}>
                        <span className="accent-1">Tailored</span> Material
                        <span className="accent-1"> Solutions</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 0.8 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}>
                        Our experts can source the right products and partners
                        for your needs.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="cta-actions">
                        <button className="view-all-button">
                            Consult Experts
                        </button>
                        <button className="view-all-button-secondary">
                            Request Catalog
                        </button>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Materials;
