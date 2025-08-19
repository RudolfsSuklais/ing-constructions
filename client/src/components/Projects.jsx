import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./Projects.css";

// Replace with actual project images
import Project1 from "../assets/SW1.jpg";
import Project2 from "../assets/MH3.jpg";
import Project3 from "../assets/HS2.jpg";

const Projects = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

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
        hidden: { opacity: 0, y: 60 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.15,
                duration: 0.6,
                ease: [0.16, 0.77, 0.47, 0.97],
            },
        }),
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
        <section id="projects" className="projects-section" ref={ref}>
            <div className="section-header">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="section-title">
                    <span className="accent-1"> Our</span>{" "}
                    <span className="accent-2">Portfolio</span>
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="section-subtitle">
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
                        className="project-card"
                        custom={i}
                        variants={cardVariants}
                        whileHover={{ y: -10 }}>
                        <div className="card-image-container">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="project-image"
                            />
                            <div className="year-badge">{project.year}</div>
                            <div className="card-overlay">
                                <div className="card-content">
                                    <h3>{project.title}</h3>
                                    <div className="hover-content">
                                        <p className="location">
                                            {project.location}
                                        </p>
                                        <p className="materials-used">
                                            {project.materials}
                                        </p>
                                        <motion.button
                                            className="view-details-button"
                                            initial={{ opacity: 0, y: 10 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            whileHover={{
                                                backgroundColor: "#1d8236",
                                                boxShadow:
                                                    "0 10px 25px rgba(29, 130, 54, 0.3)",
                                            }}
                                            transition={{ duration: 0.3 }}>
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
                transition={{ delay: 0.8 }}
                className="view-all-container">
                <motion.button
                    className="view-all-button"
                    transition={{ duration: 0.3 }}>
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
