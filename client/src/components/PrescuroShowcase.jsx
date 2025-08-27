import React, { useState } from "react";
import "./PrescuroShowcase.css";

const PrescuroShowcase = () => {
    const [activeCategory, setActiveCategory] = useState(0);
    const [hoveredImage, setHoveredImage] = useState(null);

    // Updated gallery images with global focus
    const galleryImages = [
        {
            id: 1,
            src: "https://images.unsplash.com/photo-1613490493576-7fde63acd811",
            title: "Global Project Management",
            category: "global",
        },
        {
            id: 2,
            src: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5",
            title: "International Construction",
            category: "construction",
        },
        {
            id: 3,
            src: "https://www.fleetwood.com.au/wp-content/uploads/2024/12/36_DSC1142-Fleetwood-Architectural-Photography-R-Monteleone-1.jpg",
            title: "Worldwide Standards",
            category: "standards",
        },
        {
            id: 4,
            src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd",
            title: "Cross-Border Expertise",
            category: "expertise",
        },
        {
            id: 5,
            src: "https://ridge.co.uk/wp-content/uploads/2022/07/Modular-Hero-1360x530.jpg",
            title: "International Workforce",
            category: "workforce",
        },
        {
            id: 6,
            src: "https://www.propertyinvestmentsuk.co.uk/wp-content/uploads/2022/03/modern-modular-housing.jpg",
            title: "Global Partnerships",
            category: "partnerships",
        },
    ];

    // Updated categories with global focus
    const categories = [
        {
            title: "Global Contractor",
            description:
                "We operate as an international contractor, overseeing projects worldwide from planning to final delivery with complete accountability and local expertise.",
            stats: null,
        },
        {
            title: "Worldwide Workforce",
            description:
                "We provide skilled labor solutions across continents, delivering flexible, high-quality personnel tailored to local requirements and regulations.",
            stats: null,
        },
        {
            title: "International Reach",
            description:
                "Bringing Swedish precision and quality standards to projects across Europe, Asia, Americas, and emerging markets worldwide.",
            stats: null,
        },
        {
            title: "Global Presence",
            description:
                "Our international footprint: projects in 25+ countries with dedicated local teams ensuring cultural and regulatory compliance.",
            stats: {
                countries: 25,
                projects: 180,
            },
        },
    ];

    return (
        <section className="prescuro-showcase">
            <div className="showcase-container">
                <div className="text-content">
                    <div className="content-wrapper">
                        <h2 className="section-subtitle">Prescuro AB</h2>
                        <h1 className="section-title">
                            Global{" "}
                            <span className="highlight">
                                Construction Excellence
                            </span>
                        </h1>
                        <p className="intro-text">
                            Specializing in international project management
                            from foundations to finishes, we bring Swedish
                            quality standards to construction projects
                            worldwide.
                        </p>
                        <p className="description">
                            Since 2017, we've expanded our expertise across
                            continents, managing every stage of the construction
                            process with precision — adapting Swedish quality to
                            local contexts while maintaining our uncompromising
                            standards. Our global team ensures exceptional
                            quality and craftsmanship from structural
                            foundations to intricate interior details.
                        </p>

                        <div className="categories-nav">
                            {categories.map((category, index) => (
                                <button
                                    key={index}
                                    className={`category-tab ${
                                        activeCategory === index ? "active" : ""
                                    }`}
                                    onClick={() => setActiveCategory(index)}>
                                    {category.title}
                                </button>
                            ))}
                        </div>

                        <div className="category-content">
                            <h3>{categories[activeCategory].title}</h3>
                            <p>{categories[activeCategory].description}</p>

                            {categories[activeCategory].stats && (
                                <div className="stats-container">
                                    <div className="stat">
                                        <span className="stat-number">
                                            {
                                                categories[activeCategory].stats
                                                    .countries
                                            }
                                            +
                                        </span>
                                        <span className="stat-label">
                                            Countries
                                        </span>
                                    </div>
                                    <div className="stat">
                                        <span className="stat-number">
                                            {
                                                categories[activeCategory].stats
                                                    .projects
                                            }
                                            +
                                        </span>
                                        <span className="stat-label">
                                            Global Projects
                                        </span>
                                    </div>
                                </div>
                            )}
                        </div>

                        <button className="view-all-button">
                            Explore Global Projects
                            <svg
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M5 12H19M19 12L12 5M19 12L12 19"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </button>
                    </div>
                </div>

                <div className="gallery-content">
                    <div className="gallery-grid">
                        {galleryImages.map((image, index) => (
                            <div
                                key={image.id}
                                className={`gallery-item ${
                                    hoveredImage === index ? "hovered" : ""
                                }`}
                                onMouseEnter={() => setHoveredImage(index)}
                                onMouseLeave={() => setHoveredImage(null)}>
                                <div className="image-container">
                                    <img src={image.src} alt={image.title} />
                                    <div className="image-overlay">
                                        <h4>{image.title}</h4>
                                    </div>
                                    <div className="global-badge">
                                        <svg
                                            width="16"
                                            height="16"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                            />
                                            <path
                                                d="M7 3H9V7H7V3Z"
                                                fill="currentColor"
                                            />
                                            <path
                                                d="M15 3H17V7H15V3Z"
                                                fill="currentColor"
                                            />
                                            <path
                                                d="M7 17H9V21H7V17Z"
                                                fill="currentColor"
                                            />
                                            <path
                                                d="M15 17H17V21H15V17Z"
                                                fill="currentColor"
                                            />
                                            <path
                                                d="M2 12H22"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                            />
                                            <path
                                                d="M12 2V22"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                            />
                                        </svg>
                                        Global Project
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PrescuroShowcase;
