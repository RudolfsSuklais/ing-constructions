import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./PartnerCarousel.css";
import Nefertity_logo from "../assets/logos/nefertity_logo.png";
import Finestra_logo from "../assets/logos/Finestra_logo.png";
import Rabel_systems_logo from "../assets/logos/rabel_systems_logo.png";
import Weitzer_parkett_logo from "../assets/logos/weitzer_parkett_logo.png";

const logos = [
    Nefertity_logo,
    Finestra_logo,
    Rabel_systems_logo,
    Weitzer_parkett_logo,
];

const PartnerCarousel = () => {
    const trackRef = useRef(null);
    const [centerIndex, setCenterIndex] = useState(0);
    const animationRef = useRef(null);
    const scrollPosRef = useRef(0);

    useEffect(() => {
        const track = trackRef.current;
        if (!track) return;

        let lastTime = performance.now();
        const speed = 40; // px per second

        const autoScroll = (time) => {
            const delta = (time - lastTime) / 1000;
            lastTime = time;

            // Move the track
            scrollPosRef.current -= speed * delta;
            track.style.transform = `translateX(${scrollPosRef.current}px)`;

            // Reset position seamlessly when first half fully scrolled
            if (Math.abs(scrollPosRef.current) >= track.scrollWidth / 2) {
                scrollPosRef.current = 0;
            }

            // Center detection
            const containerCenter = track.parentElement.offsetWidth / 2;
            const children = Array.from(track.children);

            let closestIndex = 0;
            let minDist = Infinity;

            children.forEach((child, idx) => {
                const childCenter =
                    child.offsetLeft +
                    child.offsetWidth / 2 +
                    scrollPosRef.current;
                const dist = Math.abs(childCenter - containerCenter);
                if (dist < minDist) {
                    minDist = dist;
                    closestIndex = idx;
                }
            });

            setCenterIndex(closestIndex % logos.length);

            animationRef.current = requestAnimationFrame(autoScroll);
        };

        animationRef.current = requestAnimationFrame(autoScroll);

        return () => cancelAnimationFrame(animationRef.current);
    }, []);

    return (
        <div className="partner-section">
            <div className="section-header">
                <h2 className="section-title">
                    <span className="accent-1"> Trusted </span>
                    <span className="accent-2">Partners</span>
                </h2>
                <p className="section-subtitle">
                    Collaborating with industry leaders
                </p>
            </div>

            <div className="partner-carousel-container">
                <div className="partner-carousel">
                    <div className="carousel-track" ref={trackRef}>
                        {[...logos, ...logos].map((logo, idx) => {
                            const originalIndex = idx % logos.length;
                            const isCenter = originalIndex === centerIndex;

                            return (
                                <div
                                    className={`carousel-item ${
                                        isCenter ? "center" : ""
                                    }`}
                                    key={idx}>
                                    <img
                                        src={logo}
                                        alt={`Partner ${originalIndex}`}
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            <div className="view-all-container">
                <Link to={"/partners"}>
                    <motion.button
                        className="view-all-button"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ duration: 0.3 }}>
                        View All Partners
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
            </div>
        </div>
    );
};

export default PartnerCarousel;
