import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./FeaturedProducts.css";

// Import product images
import AluminiumProfile from "../assets/aluminium-profile.jpg";
import PlywoodSheet from "../assets/plywood-sheet.jpg";
import ConcreteMix from "../assets/concrete-mix.jpg";

const FeaturedProducts = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    const products = [
        {
            id: 1,
            name: "Architectural Aluminium Profile",
            specs: "2-6mm thickness • A2-s1,d0 fire rating",
            image: AluminiumProfile,
            category: "Facade Systems",
        },
        {
            id: 2,
            name: "Premium Baltic Plywood",
            specs: "18mm thickness • E0 formaldehyde • Class 3 moisture",
            image: PlywoodSheet,
            category: "Timber Products",
        },
        {
            id: 3,
            name: "High-Strength Concrete Mix",
            specs: "50-80MPa • 40% CO₂ reduction • Self-leveling",
            image: ConcreteMix,
            category: "Concrete Solutions",
        },
    ];

    return (
        <section id="featured-products" className="featured-products" ref={ref}>
            <div className="section-header">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}>
                    Featured <span className="accent">Materials</span>
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 0.8 } : {}}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="subtitle">
                    Our most requested premium solutions
                </motion.p>
            </div>

            <div className="products-grid">
                {products.map((product, i) => (
                    <motion.div
                        key={product.id}
                        className="product-card"
                        initial={{ opacity: 0, y: 40 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: i * 0.15, duration: 0.6 }}
                        whileHover={{ y: -8 }}>
                        <div className="product-image-container">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="product-image"
                            />
                            <div className="category-badge">
                                {product.category}
                            </div>
                        </div>
                        <div className="product-details">
                            <h3>{product.name}</h3>
                            <p className="product-specs">{product.specs}</p>
                            <motion.button
                                className="inquiry-button"
                                whileHover={{
                                    backgroundColor: "#1d8236",
                                    boxShadow:
                                        "0 8px 20px rgba(29, 130, 54, 0.3)",
                                }}>
                                Request Specifications
                                <svg
                                    width="16"
                                    height="16"
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
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* View More Button */}
            <motion.div
                className="view-more-container"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.6, duration: 0.6 }}>
                <motion.button
                    className="view-more-button"
                    whileHover={{
                        backgroundColor: "#1a1a1a",
                        boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
                    }}>
                    View All Materials
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path
                            d="M5 12H19M19 12L12 5M19 12L12 19"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                        />
                    </svg>
                </motion.button>
            </motion.div>
        </section>
    );
};

export default FeaturedProducts;
