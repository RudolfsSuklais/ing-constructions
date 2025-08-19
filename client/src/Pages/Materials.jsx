import React, { useEffect } from "react";
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
    useEffect(() => {
        window.scrollTo(0, 0);
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

    return (
        <div className="materials-page">
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
            <section className="materials-container">
                <div className="materials-grid families-grid">
                    {productFamilies.map((family, index) => (
                        <motion.div
                            key={family.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                delay: index * 0.1,
                                duration: 0.6,
                            }}
                            viewport={{ once: true }}
                            className="family-card">
                            <Link to={`/materials/${family.id}`}>
                                <div className="family-image-container">
                                    <img
                                        src={family.image}
                                        alt={family.name}
                                        className="family-image"
                                    />
                                    <div className="family-overlay">
                                        <h3>{family.name}</h3>
                                        <p>{family.description}</p>
                                        <span className="view-more">
                                            View Products →
                                        </span>
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
                        <span className="accent-1">Tailored</span>{" "}
                        <span className="accent">Material</span>{" "}
                        <span className="accent-1">Solutions</span>
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
