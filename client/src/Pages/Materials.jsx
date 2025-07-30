import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./Materials.css";
import { Link } from "react-router-dom";

// Import all material images
import Marble from "../assets/materials/marble.jpg";
import GlassFacade from "../assets/materials/glass-facade.jpg";
import TitaniumCladding from "../assets/materials/titanium-cladding.jpg";
import EngineeredWood from "../assets/materials/engineered-wood.jpg";
import CarbonFiber from "../assets/materials/carbon-fiber.jpg";
import SmartGlass from "../assets/materials/smart-glass.jpg";
import Terrazzo from "../assets/materials/terrazzo.jpg";
import CortenSteel from "../assets/materials/corten-steel.jpeg";
import Plywood from "../assets/materials/plywood.jpg";
import Timber from "../assets/materials/timber.jpg";
import MDF from "../assets/materials/mdf.jpg";
import OSB from "../assets/materials/osb.jpg";
import Concrete from "../assets/materials/concrete.jpg";
import Brick from "../assets/materials/brick.jpg";
import Granite from "../assets/materials/granite.jpg";
import AsphaltShingles from "../assets/materials/asphalt-shingles.jpg";

const Materials = () => {
    const [activeFilter, setActiveFilter] = useState("all");
    const [searchTerm, setSearchTerm] = useState("");
    const [expandedMaterial, setExpandedMaterial] = useState(null);

    const materialCategories = [
        {
            title: "Luxury Finishes",
            type: "finishes",
            materials: [
                {
                    id: 1,
                    name: "Carrara Statuario Marble",
                    description:
                        "Premium Italian marble with dramatic veining, perfect for statement walls and floors.",
                    image: Marble,
                    specs: [
                        "99.9% pure white base",
                        "Custom finishes available",
                        "Available in slabs up to 3m",
                    ],
                    price: "$$$$",
                    sustainability: "Natural stone with low processing",
                    applications: ["Flooring", "Wall cladding", "Countertops"],
                    leadTime: "4-6 weeks",
                },
                {
                    id: 2,
                    name: "Handcrafted Terrazzo",
                    description:
                        "Custom composite material with precious stone aggregates in resin or cement base.",
                    image: Terrazzo,
                    specs: [
                        "Unlimited color combinations",
                        "Seamless installation",
                        "20mm standard thickness",
                    ],
                    price: "$$$",
                    sustainability: "Contains recycled content",
                    applications: [
                        "Flooring",
                        "Wall panels",
                        "Custom surfaces",
                    ],
                    leadTime: "3-5 weeks",
                },
                {
                    id: 3,
                    name: "Premium Granite",
                    description:
                        "Natural granite with exceptional durability and unique mineral patterns.",
                    image: Granite,
                    specs: [
                        "Heat and scratch resistant",
                        "Multiple finish options",
                        "20mm standard thickness",
                    ],
                    price: "$$$$",
                    sustainability: "Natural stone with long lifespan",
                    applications: [
                        "Countertops",
                        "Flooring",
                        "Exterior cladding",
                    ],
                    leadTime: "3-6 weeks",
                },
            ],
        },
        {
            title: "Wood-Based Materials",
            type: "wood",
            materials: [
                {
                    id: 4,
                    name: "Architectural Plywood",
                    description:
                        "High-quality plywood with fine veneers for visible applications.",
                    image: Plywood,
                    specs: [
                        "FSC-certified options",
                        "Various thicknesses",
                        "Smooth finish",
                    ],
                    price: "$$",
                    sustainability: "Sustainable forestry options",
                    applications: ["Furniture", "Wall paneling", "Ceilings"],
                    leadTime: "1-2 weeks",
                },
                {
                    id: 5,
                    name: "Premium Timber",
                    description:
                        "Solid wood for structural and decorative applications.",
                    image: Timber,
                    specs: [
                        "Kiln-dried",
                        "Various wood species",
                        "Custom dimensions",
                    ],
                    price: "$$$",
                    sustainability: "Responsibly sourced",
                    applications: ["Framing", "Decking", "Interior finishes"],
                    leadTime: "2-3 weeks",
                },
                {
                    id: 6,
                    name: "MDF Panels",
                    description:
                        "Smooth, uniform panels perfect for painted finishes.",
                    image: MDF,
                    specs: [
                        "Easy to machine",
                        "Consistent density",
                        "Various thicknesses",
                    ],
                    price: "$",
                    sustainability: "Contains recycled wood fibers",
                    applications: ["Cabinetry", "Millwork", "Furniture"],
                    leadTime: "1-2 weeks",
                },
                {
                    id: 7,
                    name: "OSB Sheathing",
                    description:
                        "Cost-effective structural panels for sheathing applications.",
                    image: OSB,
                    specs: [
                        "High strength",
                        "Moisture-resistant options",
                        "Large panel sizes",
                    ],
                    price: "$",
                    sustainability: "Made from fast-growing trees",
                    applications: [
                        "Wall sheathing",
                        "Roof decking",
                        "Subflooring",
                    ],
                    leadTime: "1 week",
                },
            ],
        },
        {
            title: "Concrete & Masonry",
            type: "concrete",
            materials: [
                {
                    id: 8,
                    name: "Architectural Concrete",
                    description:
                        "High-quality concrete with precise finishes for visible applications.",
                    image: Concrete,
                    specs: [
                        "Custom mix designs",
                        "Various finishes",
                        "Reinforced options",
                    ],
                    price: "$$",
                    sustainability: "Can contain recycled materials",
                    applications: ["Floors", "Walls", "Countertops"],
                    leadTime: "2-4 weeks",
                },
                {
                    id: 9,
                    name: "Premium Bricks",
                    description:
                        "Clay bricks with consistent color and texture for beautiful masonry.",
                    image: Brick,
                    specs: [
                        "High compressive strength",
                        "Various colors",
                        "Standard and custom sizes",
                    ],
                    price: "$$",
                    sustainability: "Natural material with long lifespan",
                    applications: ["Facades", "Walls", "Paving"],
                    leadTime: "3-5 weeks",
                },
            ],
        },
        {
            title: "Advanced Facade Systems",
            type: "facade",
            materials: [
                {
                    id: 10,
                    name: "Structural Glass Curtain Walls",
                    description:
                        "Frameless glazing systems for ultra-modern transparent architecture.",
                    image: GlassFacade,
                    specs: [
                        "Up to 15m spans",
                        "UV-protective coatings",
                        "Custom tint options",
                    ],
                    price: "$$$$",
                    sustainability: "High recycled glass content",
                    applications: [
                        "Office buildings",
                        "Retail spaces",
                        "Institutional facades",
                    ],
                    leadTime: "8-12 weeks",
                },
                {
                    id: 11,
                    name: "Titanium Rain Screen Cladding",
                    description:
                        "Lightweight yet durable titanium panels with self-healing oxide layer.",
                    image: TitaniumCladding,
                    specs: [
                        "0.3-1.2mm thickness",
                        "100+ year lifespan",
                        "Patina development control",
                    ],
                    price: "$$$$$",
                    sustainability: "100% recyclable",
                    applications: [
                        "Coastal buildings",
                        "Landmark structures",
                        "Museums",
                    ],
                    leadTime: "10-14 weeks",
                },
                {
                    id: 12,
                    name: "Weathering Steel Panels",
                    description:
                        "Corten steel with protective rust patina for industrial-chic exteriors.",
                    image: CortenSteel,
                    specs: [
                        "4-6mm thickness",
                        "Pre-oxidized options",
                        "Maintenance-free",
                    ],
                    price: "$$$",
                    sustainability: "Long lifespan reduces replacement",
                    applications: [
                        "Cultural buildings",
                        "Bridges",
                        "Sculptural elements",
                    ],
                    leadTime: "6-8 weeks",
                },
            ],
        },
        {
            title: "Roofing Systems",
            type: "roofing",
            materials: [
                {
                    id: 13,
                    name: "Architectural Asphalt Shingles",
                    description:
                        "Premium shingles with enhanced durability and aesthetic appeal.",
                    image: AsphaltShingles,
                    specs: [
                        "30+ year warranty",
                        "Various colors",
                        "Impact-resistant options",
                    ],
                    price: "$$",
                    sustainability: "Some recycled content",
                    applications: [
                        "Residential roofing",
                        "Low-slope applications",
                    ],
                    leadTime: "2-3 weeks",
                },
            ],
        },
        {
            title: "Innovative Composites",
            type: "composites",
            materials: [
                {
                    id: 14,
                    name: "Aerospace-Grade Carbon Fiber",
                    description:
                        "Ultra-strong, lightweight panels for cutting-edge architectural elements.",
                    image: CarbonFiber,
                    specs: [
                        "1/5 the weight of steel",
                        "Custom weave patterns",
                        "UV-stable resin systems",
                    ],
                    price: "$$$$$",
                    sustainability: "Lightweight reduces structural demands",
                    applications: [
                        "Cantilevered elements",
                        "Decorative screens",
                        "High-performance structures",
                    ],
                    leadTime: "5-7 weeks",
                },
                {
                    id: 15,
                    name: "Engineered Ebony Wood",
                    description:
                        "Stabilized hardwood with enhanced durability for exterior applications.",
                    image: EngineeredWood,
                    specs: [
                        "FSC-certified",
                        "20-year warranty",
                        "Dimensional stability",
                    ],
                    price: "$$$$",
                    sustainability: "Responsibly harvested",
                    applications: [
                        "Exterior cladding",
                        "Decking",
                        "Architectural features",
                    ],
                    leadTime: "4-6 weeks",
                },
            ],
        },
        {
            title: "Smart Materials",
            type: "smart",
            materials: [
                {
                    id: 16,
                    name: "Electrochromic Smart Glass",
                    description:
                        "Glass that tints on demand for privacy and energy efficiency.",
                    image: SmartGlass,
                    specs: [
                        "60-90% VLT adjustment",
                        "App-controlled",
                        "UV/IR rejection",
                    ],
                    price: "$$$$$",
                    sustainability: "Reduces energy consumption",
                    applications: ["Office partitions", "Facades", "Skylights"],
                    leadTime: "12-16 weeks",
                },
            ],
        },
    ];

    const filters = [
        { id: "all", label: "All Materials" },
        { id: "finishes", label: "Luxury Finishes" },
        { id: "facade", label: "Facade Systems" },
        { id: "composites", label: "Innovative Composites" },
        { id: "smart", label: "Smart Materials" },
    ];

    const toggleExpand = (id) => {
        setExpandedMaterial(expandedMaterial === id ? null : id);
    };

    const filteredCategories = materialCategories
        .filter((category) => {
            return activeFilter === "all" || category.type === activeFilter;
        })
        .map((category) => {
            return {
                ...category,
                materials: category.materials.filter((material) => {
                    return (
                        material.name
                            .toLowerCase()
                            .includes(searchTerm.toLowerCase()) ||
                        material.description
                            .toLowerCase()
                            .includes(searchTerm.toLowerCase())
                    );
                }),
            };
        })
        .filter((category) => category.materials.length > 0);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Scroll on filter changes (but not initial load)
    useEffect(() => {
        if (activeFilter !== "all" || searchTerm !== "") {
            window.scrollTo({
                top: 650,
                behavior: "smooth",
            });
        }
    }, [activeFilter, searchTerm]);

    return (
        <div className="materials-page">
            {/* Enhanced Hero Section */}
            <section className="materials-hero">
                <div className="hero-content">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="hero-title">
                        Architectural <span>Materials</span> Collection
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.8 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="hero-subtitle">
                        Curated selection of the world's finest building
                        materials for visionary projects
                    </motion.p>
                </div>
            </section>

            {/* Materials Filter Bar */}
            <section className="materials-filter-bar">
                <div className="filter-container">
                    <div className="search-filter">
                        <input
                            type="text"
                            placeholder="Search materials..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none">
                            <circle
                                cx="11"
                                cy="11"
                                r="8"
                                stroke="currentColor"
                                strokeWidth="2"
                            />
                            <path
                                d="M21 21L16.65 16.65"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                            />
                        </svg>
                    </div>
                    <div className="filter-buttons">
                        {filters.map((filter) => (
                            <button
                                key={filter.id}
                                className={
                                    activeFilter === filter.id ? "active" : ""
                                }
                                onClick={() => setActiveFilter(filter.id)}>
                                {filter.label}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Materials Grid */}
            <section className="materials-container">
                {filteredCategories.length > 0 ? (
                    filteredCategories.map((category, index) => (
                        <div key={index} className="material-category">
                            <motion.h2
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                                className="category-title">
                                {category.title}
                            </motion.h2>

                            <div className="materials-grid">
                                {category.materials.map(
                                    (material, matIndex) => (
                                        <motion.div
                                            key={material.id}
                                            initial={{ opacity: 0, y: 40 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{
                                                delay: matIndex * 0.1,
                                                duration: 0.6,
                                            }}
                                            viewport={{ once: true }}
                                            className="material-card">
                                            <div className="material-image-container">
                                                <img
                                                    src={material.image}
                                                    alt={material.name}
                                                    className="material-image"
                                                />
                                                <div className="material-price">
                                                    {material.price}
                                                </div>
                                                <div className="material-badge">
                                                    {category.type ===
                                                        "smart" && "Smart Tech"}
                                                    {category.type ===
                                                        "facade" &&
                                                        "High-Performance"}
                                                    {category.type ===
                                                        "finishes" && "Luxury"}
                                                    {category.type ===
                                                        "composites" &&
                                                        "Innovative"}
                                                </div>
                                            </div>
                                            <div className="material-details">
                                                <h3>{material.name}</h3>
                                                <p className="material-description">
                                                    {material.description}
                                                </p>

                                                <div
                                                    className={`material-expanded-content ${
                                                        expandedMaterial ===
                                                        material.id
                                                            ? "expanded"
                                                            : ""
                                                    }`}>
                                                    <h4>
                                                        Detailed Specifications
                                                    </h4>
                                                    <p>
                                                        {
                                                            material.detailedDescription
                                                        }
                                                    </p>

                                                    <div className="specs-grid">
                                                        <div className="spec-group">
                                                            <h5>
                                                                Applications
                                                            </h5>
                                                            <ul>
                                                                {material.applications.map(
                                                                    (
                                                                        app,
                                                                        i
                                                                    ) => (
                                                                        <li
                                                                            key={
                                                                                i
                                                                            }>
                                                                            {
                                                                                app
                                                                            }
                                                                        </li>
                                                                    )
                                                                )}
                                                            </ul>
                                                        </div>
                                                        <div className="spec-group">
                                                            <h5>
                                                                Sustainability
                                                            </h5>
                                                            <p>
                                                                {
                                                                    material.sustainability
                                                                }
                                                            </p>
                                                        </div>
                                                        <div className="spec-group">
                                                            <h5>Lead Time</h5>
                                                            <p>
                                                                {
                                                                    material.leadTime
                                                                }
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <ul className="material-specs">
                                                    {material.specs.map(
                                                        (spec, specIndex) => (
                                                            <li key={specIndex}>
                                                                {spec}
                                                            </li>
                                                        )
                                                    )}
                                                </ul>

                                                <div className="material-actions">
                                                    <button
                                                        className="expand-button"
                                                        onClick={() =>
                                                            toggleExpand(
                                                                material.id
                                                            )
                                                        }>
                                                        {expandedMaterial ===
                                                        material.id
                                                            ? "Show Less"
                                                            : "View Details"}
                                                    </button>
                                                    <div className="action-buttons">
                                                        <Link
                                                            to={`/materials/docs/${material.id}`}
                                                            className="technical-docs">
                                                            <svg
                                                                width="16"
                                                                height="16"
                                                                viewBox="0 0 24 24"
                                                                fill="none">
                                                                <path
                                                                    d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"
                                                                    fill="currentColor"
                                                                />
                                                            </svg>
                                                            View Docs
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )
                                )}
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="no-results">
                        <h3>No materials match your search criteria</h3>
                        <button
                            onClick={() => {
                                setActiveFilter("all");
                                setSearchTerm("");
                            }}>
                            Reset Filters
                        </button>
                    </div>
                )}
            </section>

            {/* Enhanced CTA Section */}
            <section className="materials-cta">
                <div className="cta-content">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}>
                        Bespoke <span className="accent">Material</span>{" "}
                        Solutions
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 0.8 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}>
                        Our material specialists can source or develop custom
                        solutions for your visionary projects
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="cta-actions">
                        <button className="cta-button primary">
                            Consult Our Experts
                        </button>
                        <button className="cta-button secondary">
                            Request Full Catalog
                        </button>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Materials;
