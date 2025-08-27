import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./PartnerCarousel.css";
import Binghatti from "../assets/logos/binghatti.png";
import Damac from "../assets/logos/damac.jpg";
import Emaar from "../assets/logos/emaar.png";
import Nakheel from "../assets/logos/nakheel.png";
import Meraas from "../assets/logos/meraas.jpg";
import Sobha from "../assets/logos/sobha.png";
import Azizi from "../assets/logos/azizi.webp";
import Dubai from "../assets/logos/dubai.png";
import Ellington from "../assets/logos/ellington.jpg";
import Select from "../assets/logos/select.png";
import Omniyat from "../assets/logos/omniyat.webp";

const logos = [
    Binghatti,
    Damac,
    Emaar,
    Nakheel,
    Meraas,
    Sobha,
    Azizi,
    Dubai,
    Ellington,
    Select,
    Omniyat,
];

const LeadersCarousel = () => {
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
                    <span className="accent-1"> Trusted by </span>
                    <span className="accent-2">Industry Leaders</span>
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
        </div>
    );
};

export default LeadersCarousel;
