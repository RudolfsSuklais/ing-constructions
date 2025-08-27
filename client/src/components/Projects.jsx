import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import "./Projects.css";
import { Link } from "react-router-dom";

// Replace with actual project images
import Project1 from "../assets/neom.jpg";
import Project2 from "../assets/district_1.webp";
import Project3 from "../assets/stegra.webp";

const Projects = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.1 });
    const [expandedCard, setExpandedCard] = useState(null);

    const projects = [
        {
            id: 1,
            title: "NEOM",
            description:
                "Saudi Arabia's ultra-futuristic region and smart city",
            materials:
                "Architectural plywood • FSC-certified timber • Aluminium door and window constructions",
            detailedInfo:
                "For the NEOM project, we supplied premium architectural plywood for interior paneling and custom furniture, FSC-certified timber for structural elements, and high-performance aluminum door and window systems designed to withstand extreme desert conditions while maintaining energy efficiency.",
            image: Project1,
            year: "2025",
            location: "Saudi Arabia",
        },
        {
            id: 2,
            title: "District One",
            description: "Mohammed bin Rashid City (MBR City), Dubai",
            materials: "Polished concrete • Plywood • Glass",
            detailedInfo:
                "Our contribution to District One included supplying polished concrete for flooring in luxury residences, high-grade plywood for custom cabinetry and architectural features, and specialized glass for facades and interior partitions that provide both aesthetic appeal and thermal efficiency in Dubai's climate.",
            image: Project2,
            year: "2024",
            location: "Dubai, UAE",
        },
        {
            id: 3,
            title: "Stegra",
            description: "Formerly known as H2 Green Steel",
            materials:
                "High-strength concrete • Reinforced concrete • Reinforced steel",
            detailedInfo:
                "For the Stegra project, we provided high-strength concrete formulations for the foundation and structural elements, reinforced concrete with specialized additives for durability in harsh conditions, and reinforced steel with enhanced tensile strength to support the innovative green steel production facilities.",
            image: Project3,
            year: "2024",
            location: "Sweden",
        },
    ];

    const toggleExpand = (id) => {
        if (expandedCard === id) {
            setExpandedCard(null);
        } else {
            setExpandedCard(id);
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.1,
                duration: 0.5,
                ease: [0.16, 0.77, 0.47, 0.97],
            },
        }),
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.08,
                delayChildren: 0.2,
            },
        },
    };

    return (
        <section ref={ref} className="projects-section">
            <div className="projects-header">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.1, duration: 0.6 }}
                    className="projects-title">
                    <span className="projects-accent-light"> Our</span>{" "}
                    <span className="projects-accent-gold">Portfolio</span>
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.2, duration: 0.6 }}
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
                        className={`projects-card ${
                            expandedCard === project.id ? "expanded" : ""
                        }`}
                        custom={i}
                        variants={cardVariants}
                        whileHover={{ y: expandedCard === project.id ? 0 : -8 }}
                        whileTap={{ y: 0 }}>
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
                                    <p className="project-description">
                                        {project.description}
                                    </p>
                                    <div
                                        className={`projects-hover-content ${
                                            expandedCard === project.id
                                                ? "expanded"
                                                : ""
                                        }`}>
                                        <p className="projects-location">
                                            {project.location}
                                        </p>
                                        <p className="projects-materials-used">
                                            {project.materials}
                                        </p>
                                        {expandedCard === project.id && (
                                            <div className="project-detailed-info">
                                                <p>{project.detailedInfo}</p>
                                            </div>
                                        )}
                                        <motion.button
                                            className="projects-view-details-button"
                                            onClick={() =>
                                                toggleExpand(project.id)
                                            }
                                            initial={{ opacity: 0, y: 10 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.2 }}>
                                            {expandedCard === project.id
                                                ? "Read Less"
                                                : "Read More"}
                                            <svg
                                                width="16"
                                                height="16"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                className={
                                                    expandedCard === project.id
                                                        ? "rotated"
                                                        : ""
                                                }>
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
                transition={{ delay: 0.5 }}
                className="projects-view-all-container">
                <Link to="/projects">
                    <motion.button
                        className="projects-view-all-button"
                        whileTap={{ scale: 0.95 }}
                        transition={{ duration: 0.2 }}>
                        View All Projects
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

export default Projects;
