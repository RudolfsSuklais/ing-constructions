import React, { useEffect, useRef, useState } from "react";
import "./Home.css";
import Categories from "../components/Categories";
import PartnerCarousel from "../components/PartnerCarousel";
import Projects from "../components/Projects";
import Sustainability from "../components/Sustainability";
import { Link } from "react-router-dom";
import backgroundVideo from "../assets/background_vid_1.mp4"; // Replace with your video path
import backgroundPoster from "../assets/aluminium-facade.jpg"; // Add a poster image for mobile
import CTASection from "../components/CTASection";

const Home = () => {
    const videoRef = useRef(null);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        // Handle video autoplay with muted attribute
        if (videoRef.current) {
            videoRef.current.play().catch((error) => {
                console.log("Autoplay prevented:", error);
            });
        }

        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener("resize", handleResize);

        const animateElements = () => {
            const elements = document.querySelectorAll(
                ".hero-heading, .hero-subheading, .hero-cta"
            );
            elements.forEach((el, i) => {
                setTimeout(() => {
                    el.style.transform = "translateY(0)";
                    el.style.opacity = "1";
                }, 300 + i * 200);
            });
        };

        animateElements();

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <>
            <section className="hero-section">
                <div className="video-background">
                    <video
                        ref={videoRef}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="video-tag"
                        poster={isMobile ? backgroundPoster : undefined}>
                        <source src={backgroundVideo} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className="luxury-overlay"></div>

                <div className="hero-content">
                    <h1 className="hero-heading">
                        Architectural{" "}
                        <span className="gold-accent">Excellence</span>
                        <br className="desktop-only" />
                        in Sustainable Materials
                    </h1>
                    <p className="hero-subheading">
                        Curated selection of premium, low-impact building
                        solutions
                        <br className="desktop-only" />
                        for discerning architects and developers
                    </p>
                    <div className="hero-buttons">
                        <Link to="/materials">
                            <button className="hero-cta primary">
                                View Portfolio
                                <span className="cta-icon">→</span>
                            </button>
                        </Link>
                        <Link to={"/contact"}>
                            <button className="hero-cta secondary">
                                Request Consultation
                                <span className="cta-icon">✉</span>
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="luxury-scroll-hint">
                    <span>Explore</span>
                    <div className="scroll-line"></div>
                </div>
            </section>

            <Categories />
            <PartnerCarousel />
            <Projects />
            <Sustainability />
            <CTASection />
        </>
    );
};

export default Home;
