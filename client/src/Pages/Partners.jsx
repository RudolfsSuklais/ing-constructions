import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import * as d3 from "d3";
import * as d3Geo from "d3-geo";
import * as topojson from "topojson-client";
import "./Partners.css";

// Example partner logos (replace with actual partner logos)
import Partner1 from "../assets/logos/Finestra_logo.png";
import Partner2 from "../assets/logos/nefertity_logo.png";
import Partner3 from "../assets/logos/Weitzer_parkett_logo.png";
import Partner4 from "../assets/logos/Finestra_logo.png";
import Partner5 from "../assets/logos/Finestra_logo.png";
import Partner6 from "../assets/logos/Finestra_logo.png";

const Partners = () => {
    const [partners, setPartners] = useState([]);
    const [filteredPartners, setFilteredPartners] = useState([]);
    const [activeFilter, setActiveFilter] = useState("all");
    const [selectedPartner, setSelectedPartner] = useState(null);
    const [hoveredPartner, setHoveredPartner] = useState(null);
    const [worldData, setWorldData] = useState(null);
    const mapRef = useRef(null);
    const svgRef = useRef(null);

    useEffect(() => {
        window.scrollTo(0, 0);

        // Mock data - replace with your actual partner data
        const partnersData = [
            {
                id: 1,
                name: "Finestra Solution",
                logo: Partner1,
                category: "aluminium",
                description:
                    "A modern manufacturer of high-quality aluminum systems, specializing in doors, windows, and RC3-certified roller shutters. Focused on durability, energy efficiency, security, and contemporary design.",
                since: 2016,
                location: {
                    lat: 56.511311,
                    lng: 21.01119,
                    country: "Latvia",
                    city: "Liepāja",
                },
                projects: 247,
            },
            {
                id: 2,
                name: "Nefertity Aluminium DMCC",
                logo: Partner2,
                category: "aluminium",
                description:
                    "Specialist in a wide range of aluminium and glass systems for residential and commercial architecture, offering advanced manufacturing capabilities and tailored architectural solutions.",
                since: 1994,
                location: {
                    lat: 25.204849,
                    lng: 55.270782,
                    country: "United Arab Emirates",
                    city: "Dubai",
                },
                projects: 182,
            },
            {
                id: 3,
                name: "Weitzer Parkett",
                logo: Partner3,
                category: "wood",
                description:
                    "A leading Austrian family-owned manufacturer of parquet flooring and wooden stairs, renowned for their innovation in maintenance-free, healthy, and sound-reducing parquet solutions. Emphasizes sustainable, European wood and environmentally responsible production.",
                since: 1831,
                location: {
                    lat: 48.209206,
                    lng: 16.372778,
                    country: "Austria",
                    city: "Wien",
                },
                projects: 315,
            },
            {
                id: 4,
                name: "Rabel Systems",
                logo: Partner4,
                category: "aluminium",
                description:
                    "Rabel Systems is a leading Cypriot manufacturer specializing in high-performance aluminium systems for modern architecture. Established in 1968 as C. Technometal Ltd, the company has evolved from producing accessories for aluminium doors and windows to developing complete aluminium systems under the Rabel brand. Their product range includes solutions for passive and zero-energy buildings, high-rise structures, and bespoke architectural projects.",
                since: 1968,
                location: {
                    lat: 35.111478,
                    lng: 33.324354,
                    country: "Cyprus",
                    city: "Propontidos",
                },
                projects: 429,
            },
        ];

        setPartners(partnersData);
        setFilteredPartners(partnersData);

        // Load world map data
        fetch("https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json")
            .then((response) => response.json())
            .then((worldData) => {
                setWorldData(worldData);
            });
    }, []);

    useEffect(() => {
        if (worldData && svgRef.current) {
            drawMap();
        }
    }, [worldData, partners, hoveredPartner, selectedPartner]);

    const drawMap = () => {
        const width = 800;
        const height = 450;
        const svg = d3.select(svgRef.current);

        // Clear previous map
        svg.selectAll("*").remove();

        // Create projection
        const projection = d3Geo
            .geoMercator()
            .scale(130)
            .center([0, 30])
            .translate([width / 2, height / 2]);

        // Create path generator
        const path = d3Geo.geoPath().projection(projection);

        // Draw countries
        svg.append("g")
            .selectAll("path")
            .data(
                topojson.feature(worldData, worldData.objects.countries)
                    .features
            )
            .enter()
            .append("path")
            .attr("d", path)
            .attr("fill", "rgba(26, 34, 38, 0.5)")
            .attr("stroke", "rgba(232, 241, 232, 0.2)")
            .attr("stroke-width", 0.5);

        // Draw partner markers
        svg.selectAll("circle")
            .data(partners)
            .enter()
            .append("circle")
            .attr("cx", (d) => projection([d.location.lng, d.location.lat])[0])
            .attr("cy", (d) => projection([d.location.lng, d.location.lat])[1])
            .attr("r", (d) => {
                if (selectedPartner && selectedPartner.id === d.id) return 6;
                if (hoveredPartner === d.id) return 5;
                return 4;
            })
            .attr("fill", (d) => categoryColors[d.category])
            .attr("stroke", "#0f1518")
            .attr("stroke-width", 1)
            .style("cursor", "pointer")
            .on("mouseover", (event, d) => {
                setHoveredPartner(d.id);
                // Add tooltip
                const tooltip = d3.select("#map-tooltip");
                tooltip
                    .style("opacity", 1)
                    .html(`<strong>${d.name}</strong><br>${d.location.country}`)
                    .style("left", event.pageX + 10 + "px")
                    .style("top", event.pageY - 28 + "px");
            })
            .on("mouseout", () => {
                setHoveredPartner(null);
                d3.select("#map-tooltip").style("opacity", 0);
            })
            .on("click", (event, d) => handlePartnerSelect(d));

        // Add labels for hovered/selected partners
        svg.selectAll("text")
            .data(
                partners.filter(
                    (d) =>
                        hoveredPartner === d.id ||
                        (selectedPartner && selectedPartner.id === d.id)
                )
            )
            .enter()
            .append("text")
            .attr("x", (d) => projection([d.location.lng, d.location.lat])[0])
            .attr(
                "y",
                (d) => projection([d.location.lng, d.location.lat])[1] - 10
            )
            .text((d) => d.name)
            .attr("text-anchor", "middle")
            .attr("fill", "#fff")
            .style("font-size", "10px")
            .style("pointer-events", "none")
            .style("paint-order", "stroke")
            .style("stroke", "#1a2226")
            .style("stroke-width", "3px")
            .style("stroke-linecap", "round")
            .style("stroke-linejoin", "round");
    };

    const filterPartners = (category) => {
        setActiveFilter(category);
        if (category === "all") {
            setFilteredPartners(partners);
        } else {
            setFilteredPartners(
                partners.filter((partner) => partner.category === category)
            );
        }
    };

    const handlePartnerSelect = (partner) => {
        setSelectedPartner(partner);
        // Scroll to map
        if (mapRef.current) {
            mapRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };

    const categories = [
        { id: "all", name: "All Partners" },
        { id: "aluminium", name: "Aluminium" },
        { id: "wood", name: "Wood" },
        { id: "concrete", name: "Concrete" },
        { id: "glass", name: "Glass" },
        { id: "roofing", name: "Roofing" },
        { id: "marble", name: "Marble" },
        { id: "steel", name: "Steel" },
        { id: "insulation", name: "Insulation" },
        { id: "ceramic", name: "Ceramic" },
    ];

    // Category colors
    const categoryColors = {
        aluminium: "#00ffcc",
        wood: "#8B4513",
        concrete: "#A9A9A9",
        glass: "#87CEEB",
        roofing: "#FF8C00",
        marble: "#F5F5F5",
        steel: "#4682B4",
        insulation: "#FFD700",
        ceramic: "#CD5C5C",
    };

    // Animation variants
    const cardVariants = {
        offscreen: {
            y: 50,
            opacity: 0,
        },
        onscreen: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                bounce: 0.4,
                duration: 0.8,
            },
        },
    };

    return (
        <div className="partners-page">
            {/* Tooltip for map */}
            <div id="map-tooltip" className="map-tooltip"></div>

            {/* Hero Section */}
            <section className="partners-hero">
                <div className="hero-content">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="section-title">
                        <span className="accent-1">Our Global </span>
                        <span className="highlight">Network of Partners</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.8 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="hero-subtitle">
                        Collaborating with industry leaders worldwide to deliver
                        exceptional materials and solutions.
                    </motion.p>
                </div>
            </section>

            {/* Interactive Map Section */}
            <section className="partners-map-section" ref={mapRef}>
                <div className="map-container">
                    <div className="world-map">
                        <h3>Our Global Partners Network</h3>
                        <svg
                            ref={svgRef}
                            viewBox="0 0 800 450"
                            className="world-map-svg"></svg>
                    </div>
                </div>
                <div className="map-legend">
                    <h3>Global Presence</h3>
                    <p>
                        Our partners span across{" "}
                        {new Set(partners.map((p) => p.location.country)).size}{" "}
                        countries worldwide
                    </p>
                    <div className="legend-items">
                        {categories
                            .filter((cat) => cat.id !== "all")
                            .map((category) => (
                                <div key={category.id} className="legend-item">
                                    <span
                                        className={`legend-color ${category.id}`}
                                        style={{
                                            backgroundColor:
                                                categoryColors[category.id],
                                        }}></span>
                                    <span>{category.name}</span>
                                </div>
                            ))}
                    </div>
                </div>
            </section>

            {/* Partners Filter */}
            <section className="partners-filter-section">
                <div className="filter-container">
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            className={`filter-button ${
                                activeFilter === category.id ? "active" : ""
                            }`}
                            onClick={() => filterPartners(category.id)}>
                            {category.name}
                        </button>
                    ))}
                </div>
            </section>

            {/* Partners Grid */}
            <section className="partners-container">
                <div className="partners-grid">
                    {filteredPartners.map((partner, index) => (
                        <motion.div
                            className="partner-card"
                            initial="offscreen"
                            whileInView="onscreen"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={cardVariants}
                            key={partner.id}
                            onClick={() => handlePartnerSelect(partner)}
                            onMouseEnter={() => setHoveredPartner(partner.id)}
                            onMouseLeave={() => setHoveredPartner(null)}>
                            <div className="partner-card-inner">
                                <div className="partner-logo-container">
                                    <img
                                        src={partner.logo}
                                        alt={partner.name}
                                        className="partner-logo"
                                    />
                                    <div className="partner-overlay"></div>
                                </div>
                                <div className="partner-info">
                                    <h3 className="partner-name">
                                        {partner.name}
                                    </h3>
                                    <p className="partner-description">
                                        {partner.description}
                                    </p>
                                    <div className="partner-details">
                                        <span className="partner-location">
                                            {partner.location.country}
                                        </span>
                                        <span className="partner-since">
                                            Since {partner.since}
                                        </span>
                                    </div>
                                    <div className="partner-projects">
                                        <span className="projects-count">
                                            {partner.projects}+
                                        </span>
                                        <span className="projects-label">
                                            Projects
                                        </span>
                                    </div>
                                </div>
                                <div
                                    className="partner-category-tag"
                                    style={{
                                        backgroundColor:
                                            categoryColors[partner.category],
                                    }}>
                                    {partner.category}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Selected Partner Modal */}
            {selectedPartner && (
                <div
                    className="partner-modal"
                    onClick={() => setSelectedPartner(null)}>
                    <div
                        className="modal-content"
                        onClick={(e) => e.stopPropagation()}>
                        <button
                            className="close-modal"
                            onClick={() => setSelectedPartner(null)}>
                            ×
                        </button>
                        <div className="modal-header">
                            <img
                                src={selectedPartner.logo}
                                alt={selectedPartner.name}
                                className="modal-logo"
                            />
                            <h2>{selectedPartner.name}</h2>
                            <p className="modal-location">
                                {selectedPartner.location.city},{" "}
                                {selectedPartner.location.country}
                            </p>
                        </div>
                        <div className="modal-body">
                            <p>{selectedPartner.description}</p>
                            <div className="modal-stats">
                                <div className="stat">
                                    <span className="stat-value">
                                        {selectedPartner.since}
                                    </span>
                                    <span className="stat-label">
                                        Established
                                    </span>
                                </div>
                                <div className="stat">
                                    <span className="stat-value">
                                        {selectedPartner.projects}+
                                    </span>
                                    <span className="stat-label">Projects</span>
                                </div>
                                <div className="stat">
                                    <span className="stat-value">
                                        {selectedPartner.category}
                                    </span>
                                    <span className="stat-label">
                                        Specialization
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* CTA Section */}
            <section className="partners-cta">
                <div className="cta-content">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}>
                        <span className="accent-1">Become Our </span>
                        <span className="accent-1">Partner</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 0.8 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}>
                        Join our global network of industry leaders and expand
                        your reach.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="cta-actions">
                        <button className="view-all-button">
                            Partner With Us
                        </button>
                        <button className="view-all-button-secondary">
                            View Requirements
                        </button>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Partners;
