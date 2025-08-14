import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./Categories.css";
import { Link } from "react-router-dom";

// Import high-quality images (replace with your actual image paths)
import AluminiumImage from "../assets/aluminium-facade.jpg";
import PlywoodImage from "../assets/plywood.jpg";
import GlassImage from "../assets/glass-panels.jpg";
import ConcreteImage from "../assets/concrete-finishes.jpg";

const Categories = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    const materials = [
        {
            id: 1,
            title: "Aluminium Facades",
            description:
                "Premium powder-coated systems with hidden fixings for seamless aesthetics.",
            image: AluminiumImage,
            stat: "30-year warranty",
        },
        {
            id: 2,
            title: "Architectural Plywood",
            description:
                "AA-grade Baltic birch with formaldehyde-free adhesives.",
            image: PlywoodImage,
            stat: "15mm-30mm thickness",
        },
        {
            id: 3,
            title: "Structural Glass",
            description: "Laminated safety glass with low-iron clarity.",
            image: GlassImage,
            stat: "Up to 25mm thick",
        },
        {
            id: 4,
            title: "Polished Concrete",
            description: "Diamond-ground finishes with integral color options.",
            image: ConcreteImage,
            stat: "80+ MPa strength",
        },
    ];

    const cardVariants = {
        hidden: { opacity: 0, y: 60 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: [0.16, 0.77, 0.47, 0.97] },
        },
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3,
            },
        },
    };

    return (
        <section id="materials" className="premium-materials" ref={ref}>
            <div className="section-header">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="section-title">
                    <span className="accent-2">Engineered</span> Materials
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="section-subtitle">
                    Precision-crafted for architectural excellence
                </motion.p>
            </div>

            <motion.div
                className="materials-grid"
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}>
                {materials.map((material) => (
                    <motion.div
                        key={material.id}
                        className="material-card"
                        variants={cardVariants}
                        whileHover={{ y: -10 }}>
                        <div className="card-image-container">
                            <motion.img
                                src={material.image}
                                alt={material.title}
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.4 }}
                            />
                            <div className="image-overlay"></div>
                        </div>
                        <div className="card-content">
                            <div className="content-wrapper">
                                <h3>{material.title}</h3>
                                <p>{material.description}</p>
                                <div className="material-stat">
                                    {material.stat}
                                </div>
                            </div>
                            <motion.button
                                className="material-cta"
                                whileHover={{
                                    backgroundColor: "var(--gold-dark)",
                                    x: 5,
                                }}
                                transition={{ duration: 0.3 }}>
                                View Specifications
                                <svg width="18" height="18" viewBox="0 0 24 24">
                                    <path
                                        d="M5 12H19M19 12L12 5M19 12L12 19"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                    />
                                </svg>
                            </motion.button>
                        </div>
                    </motion.div>
                ))}
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.8 }}
                className="view-all-container">
                <Link to="/materials">
                    <button className="view-all-materials">
                        Explore Full Material Library
                        <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            style={{ marginLeft: "8px" }}>
                            <path
                                d="M5 12H19M19 12L12 5M19 12L12 19"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                            />
                        </svg>
                    </button>
                </Link>
            </motion.div>
        </section>
    );
};

export default Categories;
