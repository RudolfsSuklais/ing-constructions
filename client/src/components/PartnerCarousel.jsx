import React from "react";
import "./PartnerCarousel.css";

// Example logos (replace with your own)
const logos = [
    "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg",
    "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    "https://upload.wikimedia.org/wikipedia/commons/0/08/Google_Logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/2/24/Adidas_logo.png",
    "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
];

const PartnerCarousel = () => {
    return (
        <div className="partner-carousel">
            <div className="carousel-track">
                {logos.concat(logos).map((logo, index) => (
                    <div className="carousel-item" key={index}>
                        <img src={logo} alt={`Partner ${index}`} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PartnerCarousel;
