import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./Categories.css";
import { Link } from "react-router-dom";

// Import high-quality images
import AluminiumImage from "../assets/aluminium-facade-2.webp";
import PlywoodImage from "../assets/materials/marble.jpg";
import SteelImage from "../assets/materials/steel_bar.jpeg";
import ConcreteImage from "../assets/materials/ceramic-tiles.jpeg";
import TimberImage from "../assets/wooden_facade.jpg";
import ParquetImage from "../assets/materials/parquet-products.jpg";

const Categories = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    const materials = [
        {
            id: 1,
            title: "Aluminium Products",
            description:
                "Doors, windows, facades and more in premium aluminium systems.",
            image: AluminiumImage,
            stat: "30-year warranty",
        },

        {
            id: 2,
            title: "Timber Products",
            description:
                "High-quality timber for construction, furniture, and various woodworking projects.",
            image: TimberImage,
            stat: "Sustainably sourced",
        },
        {
            id: 3,
            title: "Marble & Natural Stone",
            description:
                "High-quality marble, granite, and other natural stones for floors, walls, and facades.",
            image: PlywoodImage,
            stat: "15mm-30mm thickness",
        },
        {
            id: 4,
            title: "Steel & Metal Structures",
            description:
                "Structural steel, beams, and metal elements for modern architecture.",
            image: SteelImage,
            stat: "Up to 25mm thick",
        },
        {
            id: 5,
            title: "Ceramic & Tiles",
            description:
                "Premium ceramic tiles and porcelain solutions for floors, walls, and decorative surfaces.",
            image: ConcreteImage,
            stat: "80+ MPa strength",
        },

        {
            id: 6,
            title: "Flooring Solutions",
            description:
                "High-quality parquet flooring for residential and commercial spaces, combining durability and elegance.",
            image: ParquetImage,
            stat: "Long-lasting finish",
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
        <section ref={ref} className="categories-section">
            <div className="categories-header">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="categories-title">
                    <span className="accent-gold">Engineered</span>{" "}
                    <span className="accent-light"> Materials</span>
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="categories-subtitle">
                    Precision-crafted for architectural excellence
                </motion.p>
            </div>

            <motion.div
                className="categories-grid"
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}>
                {materials.map((material) => (
                    <motion.div
                        key={material.id}
                        className="categories-card"
                        variants={cardVariants}
                        whileHover={{ y: -10 }}>
                        <div className="categories-card-image-container">
                            <img
                                src={material.image}
                                alt={material.title}
                                className="categories-card-image"
                            />
                            <div className="categories-card-overlay">
                                <div className="categories-card-content">
                                    <h3>{material.title}</h3>
                                    <div className="categories-hover-content">
                                        <p>{material.description}</p>
                                        <div className="categories-material-stat">
                                            {material.stat}
                                        </div>
                                        <motion.button
                                            className="categories-material-cta"
                                            initial={{ opacity: 0, y: 10 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.1 }}>
                                            View Specifications
                                            <svg
                                                width="18"
                                                height="18"
                                                viewBox="0 0 24 24">
                                                <path
                                                    d="M5 12H19M19 12L12 5M19 12L12 19"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                />
                                            </svg>
                                        </motion.button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.8 }}
                className="categories-view-all-container">
                <Link to="/materials">
                    <motion.button
                        className="categories-view-all-materials"
                        transition={{ duration: 0.3 }}>
                        View All Materials
                        <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none">
                            <path
                                d="M5 12H19M19 12L12 5M19 12L12 19"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                            />
                        </svg>
                    </motion.button>
                </Link>
            </motion.div>
        </section>
    );
};

export default Categories;
