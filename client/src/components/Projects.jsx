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
        hidden: { opacity: 0, y: 80 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.15,
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
            },
        }),
    };

    return (
        <section id="projects" className="projects-section" ref={ref}>
            <div className="section-header">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}>
                    Our <span className="accent">Portfolio</span>
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 0.8 } : {}}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="section-subtitle">
                    Showcasing premium construction solutions
                </motion.p>
            </div>

            <div className="projects-grid">
                {projects.map((project, i) => (
                    <motion.div
                        key={project.id}
                        className="project-card"
                        custom={i}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        variants={cardVariants}
                        whileHover={{ y: -10 }}>
                        <div className="image-container">
                            <img src={project.image} alt={project.title} />
                            <div className="image-overlay"></div>
                            <div className="year-badge">{project.year}</div>
                        </div>

                        <div className="card-content-wrapper">
                            <div className="project-details">
                                <h3>{project.title}</h3>
                                <p className="location">{project.location}</p>
                                <p className="materials-used">
                                    {project.materials}
                                </p>
                            </div>

                            <motion.button
                                className="view-details-button"
                                whileHover={{
                                    backgroundColor: "#1d8236",
                                    boxShadow:
                                        "0 10px 25px rgba(29, 130, 54, 0.3)",
                                }}>
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
                    </motion.div>
                ))}
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="view-all-container">
                <motion.button
                    className="view-all-button"
                    whileHover={{
                        backgroundColor: "#1d8236",
                        boxShadow: "0 15px 30px rgba(29, 130, 54, 0.4)",
                    }}
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
