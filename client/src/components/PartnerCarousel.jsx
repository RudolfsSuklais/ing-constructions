import React, { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
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

    useEffect(() => {
        const track = trackRef.current;
        const total = logos.length * 2;
        let scrollPos = 0;

        const step = 1; // pixels per frame
        const interval = setInterval(() => {
            scrollPos += step;
            if (scrollPos >= track.scrollWidth / 2) scrollPos = 0;
            track.scrollLeft = scrollPos;

            // calculate center logo
            const children = Array.from(track.children);
            const centerX = track.offsetWidth / 2 + scrollPos;
            let closestIndex = 0;
            let minDist = Infinity;
            children.forEach((child, idx) => {
                const childCenter = child.offsetLeft + child.offsetWidth / 2;
                const dist = Math.abs(childCenter - centerX);
                if (dist < minDist) {
                    minDist = dist;
                    closestIndex = idx % logos.length; // modulo for duplicate logos
                }
            });
            setCenterIndex(closestIndex);
        }, 20); // adjust speed

        return () => clearInterval(interval);
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
                        {logos.concat(logos).map((logo, idx) => {
                            const isCenter = idx % logos.length === centerIndex;
                            return (
                                <div
                                    className={`carousel-item ${
                                        isCenter ? "center" : ""
                                    }`}
                                    key={idx}>
                                    <img src={logo} alt={`Partner ${idx}`} />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
            <div className="view-all-container">
                <motion.button
                    className="view-all-button"
                    transition={{ duration: 0.3 }}>
                    View All Partners
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
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
    );
};

export default PartnerCarousel;
