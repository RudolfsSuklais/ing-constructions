import React, { useEffect } from "react";
import "./Home.css";
import Categories from "../components/Categories";
import PartnerCarousel from "../components/PartnerCarousel";
import Projects from "../components/Projects";
import Sustainability from "../components/Sustainability";
import FeaturedProducts from "../components/FeaturedProducts.jsx";
import { Link } from "react-router-dom";

const Home = () => {
    useEffect(() => {
        const animateElements = () => {
            const heading = document.querySelector(".hero-heading");
            const subheading = document.querySelector(".hero-subheading");
            const ctas = document.querySelectorAll(".hero-cta");

            setTimeout(() => {
                heading.style.transform = "translateY(0)";
                heading.style.opacity = "1";
            }, 300);

            setTimeout(() => {
                subheading.style.transform = "translateY(0)";
                subheading.style.opacity = "1";
            }, 600);

            ctas.forEach((cta, index) => {
                setTimeout(() => {
                    cta.style.transform = "translateY(0)";
                    cta.style.opacity = "1";
                }, 900 + index * 100);
            });
        };

        animateElements();
    }, []);

    useEffect(() => {
        const scrollToTop = () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        };

        scrollToTop();
    }, []);

    return (
        <>
            <section id="home" className="hero-section">
                <div className="video-background">
                    <video autoPlay loop muted playsInline>
                        <source
                            src="https://videos.pexels.com/video-files/856478/856478-uhd_2732_1440_25fps.mp4"
                            type="video/mp4"
                        />
                    </video>
                    <div className="video-overlay"></div>
                </div>

                <div className="hero-content">
                    <h1 className="hero-heading">
                        Sustainable{" "}
                        <span style={{ color: "#8ec921" }}>Construction</span>{" "}
                        Materials
                    </h1>
                    <p className="hero-subheading">
                        High-quality, eco-friendly building solutions for a
                        greener tomorrow
                    </p>
                    <div className="hero-buttons">
                        <Link to="/materials">
                            <button className="hero-cta primary">
                                Explore Materials
                                <span className="cta-icon">→</span>
                            </button>
                        </Link>
                        <button className="hero-cta secondary">
                            Contact Us
                            <span className="cta-icon">✉</span>
                        </button>
                    </div>
                </div>

                <div className="scroll-indicator">
                    <div className="mouse">
                        <div className="wheel"></div>
                    </div>
                    <div className="arrow-down"></div>
                </div>
            </section>

            <Categories />

            <PartnerCarousel />

            <Projects />

            <Sustainability />
        </>
    );
};

export default Home;
