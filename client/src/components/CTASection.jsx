import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./CTASection.css";
import { Link } from "react-router-dom";

const CTASection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    return (
        <section className="cta-section" ref={ref}>
            <div className="cta-content">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="cta-title">
                    Ready to explore our{" "}
                    <span className="cta-accent">Materials?</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    viewport={{ once: true }}
                    className="cta-subtitle">
                    Discover how innovation meets sustainability in our premium
                    product range.
                </motion.p>

                {/* CTA Button */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.8 }}
                    className="projects-view-all-container">
                    <Link to="/materials">
                        <motion.button className="projects-view-all-button">
                            View All Materials
                            <svg
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                                fill="none"
                                style={{ marginLeft: "8px" }}>
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
            </div>
        </section>
    );
};

export default CTASection;
