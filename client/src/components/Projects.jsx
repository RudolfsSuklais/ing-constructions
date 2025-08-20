import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./Projects.css";

// Replace with actual project images
import Project1 from "../assets/SW1.jpg";
import Project2 from "../assets/MH3.jpg";
import Project3 from "../assets/HS2.jpg";

const Projects = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.1 }); // Reduced amount for mobile

    const projects = [
        {
            id: 1,
            title: "Swedish Village Development",
            materials:
                "Architectural plywood • FSC-certified timber • Aluminium door and window constructions",
            image: Project1,
            year: "2022",
            location: "Sweden",
        },
        {
            id: 2,
            title: "Modular Housing Complex",
            materials: "Polished concrete • Plywood • Glass",
            image: Project2,
            year: "2022",
            location: "Sweden",
        },
        {
            id: 3,
            title: "High-Load Concrete Structures",
            materials:
                "High-strength concrete • Reinforced concrete • Reinforced steel",
            image: Project3,
            year: "2025",
            location: "Sweden",
        },
    ];

    const cardVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.1, // Reduced delay for mobile
                duration: 0.5, // Slightly faster animation
                ease: [0.16, 0.77, 0.47, 0.97],
            },
        }),
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.08, // Faster stagger for mobile
                delayChildren: 0.2, // Reduced delay for mobile
            },
        },
    };

    return (
        <section ref={ref} className="projects-section">
            <div className="projects-header">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.1, duration: 0.6 }} // Faster animation
                    className="projects-title">
                    <span className="projects-accent-light"> Our</span>{" "}
                    <span className="projects-accent-gold">Portfolio</span>
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.2, duration: 0.6 }} // Faster animation
                    className="projects-subtitle">
                    Showcasing premium construction solutions
                </motion.p>
            </div>

            <motion.div
                className="projects-grid"
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}>
                {projects.map((project, i) => (
                    <motion.div
                        key={project.id}
                        className="projects-card"
                        custom={i}
                        variants={cardVariants}
                        whileHover={{ y: -8 }} // Reduced hover effect for mobile
                        whileTap={{ y: 0 }} // Remove hover effect on tap
                    >
                        <div className="projects-card-image-container">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="projects-card-image"
                            />
                            <div className="projects-year-badge">
                                {project.year}
                            </div>
                            <div className="projects-card-overlay">
                                <div className="projects-card-content">
                                    <h3>{project.title}</h3>
                                    <div className="projects-hover-content">
                                        <p className="projects-location">
                                            {project.location}
                                        </p>
                                        <p className="projects-materials-used">
                                            {project.materials}
                                        </p>
                                        <motion.button
                                            className="projects-view-details-button"
                                            initial={{ opacity: 0, y: 10 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.2 }}>
                                            View Details
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
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.5 }} // Reduced delay
                className="projects-view-all-container">
                <motion.button
                    className="projects-view-all-button"
                    whileTap={{ scale: 0.95 }} // Add tap feedback
                    transition={{ duration: 0.2 }}>
                    View All Projects
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
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

export default Projects;
