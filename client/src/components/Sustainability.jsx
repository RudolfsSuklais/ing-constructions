import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./Sustainability.css";

const Sustainability = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    const metrics = [
        {
            id: 1,
            title: "Total Orders",
            value: "12,458",
            description: "Completed projects worldwide",
            icon: "📦",
        },
        {
            id: 2,
            title: "Materials Delivered",
            value: "42,850",
            description: "Tons of premium materials supplied",
            icon: "🚚",
        },
        {
            id: 3,
            title: "Total Projects",
            value: "3,247",
            description: "Successful installations globally",
            icon: "🏗️",
        },
    ];

    return (
        <section className="sust-section" ref={ref}>
            <div className="sust-header">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="sust-title">
                    <span className="accent-2">Global</span>{" "}
                    <span className="accent-1">Impact</span>
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="sust-subtitle">
                    Delivering excellence across continents
                </motion.p>
            </div>

            <motion.div className="sust-metrics-grid">
                {metrics.map((metric, i) => (
                    <motion.div
                        key={metric.id}
                        className="sust-metric-card"
                        whileHover={{
                            y: -15,
                            scale: 1.07,
                            boxShadow: "0 25px 50px rgba(196,168,111,0.4)",
                        }}
                        animate={{
                            y: [0, -8, 0],
                        }}
                        transition={{
                            repeat: Infinity,
                            duration: 5,
                            delay: i * 0.1,
                            ease: "easeInOut",
                        }}>
                        <div className="sust-metric-glow"></div>
                        <motion.div
                            className="sust-metric-icon"
                            animate={{ y: [0, -10, 0] }}
                            transition={{
                                repeat: Infinity,
                                duration: 2,
                                delay: i * 0.3,
                            }}>
                            {metric.icon}
                        </motion.div>
                        <div className="sust-metric-value">{metric.value}</div>
                        <h3 className="sust-metric-title">{metric.title}</h3>
                        <p className="sust-metric-description">
                            {metric.description}
                        </p>
                    </motion.div>
                ))}
            </motion.div>

            <div className="sust-certifications">
                <h4>Global Reach & Certifications</h4>
                <div className="sust-cert-logos-container">
                    <motion.div
                        className="sust-cert-logos"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{
                            repeat: Infinity,
                            duration: 20,
                            ease: "linear",
                        }}>
                        {[...Array(2)].map((_, i) => (
                            <React.Fragment key={i}>
                                <span>ISO 9001</span>
                                <span>FSC® Certified</span>
                                <span>Global Delivery</span>
                                <span>Quality Assured</span>
                            </React.Fragment>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Sustainability;
