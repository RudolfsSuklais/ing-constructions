import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./Sustainability.css";

const Sustainability = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    const metrics = [
        {
            id: 1,
            title: "Carbon Reduction",
            value: "42%",
            description: "Lower embodied carbon vs traditional materials",
            icon: "CO₂",
        },
        {
            id: 2,
            title: "Recycled Content",
            value: "78%",
            description: "Average post-industrial recycled material",
            icon: "♻️",
        },
        {
            id: 3,
            title: "Energy Savings",
            value: "35%",
            description: "Reduced operational energy in buildings",
            icon: "⚡",
        },
    ];

    return (
        <section
            id="sustainability"
            className="sustainability-section"
            ref={ref}>
            <div className="section-header">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}>
                    Environmental <span className="accent">Stewardship</span>
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 0.8 } : {}}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="subtitle">
                    Measurable impact through material innovation
                </motion.p>
            </div>

            <div className="metrics-grid">
                {metrics.map((metric) => (
                    <motion.div
                        key={metric.id}
                        className="metric-card"
                        initial={{ opacity: 0, y: 40 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: metric.id * 0.15 }}>
                        <div className="metric-icon">{metric.icon}</div>
                        <div className="metric-value">{metric.value}</div>
                        <h3 className="metric-title">{metric.title}</h3>
                        <p className="metric-description">
                            {metric.description}
                        </p>
                    </motion.div>
                ))}
            </div>

            <motion.div
                className="certifications"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.6, duration: 0.8 }}>
                <h4>Certifications & Standards</h4>
                <div className="certification-logos">
                    <span>FSC®</span>
                    <span>EPD</span>
                    <span>Cradle to Cradle</span>
                    <span>BREEAM A+</span>
                </div>
            </motion.div>
        </section>
    );
};

export default Sustainability;
