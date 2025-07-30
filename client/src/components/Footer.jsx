import React from "react";
import { motion } from "framer-motion";
import "./Footer.css";
import Logo from "../assets/ing-logo-no-bg-sm.png";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                {/* Top Section */}
                <div className="footer-top">
                    <div className="footer-brand">
                        <img src={Logo} alt="" />
                        <p className="footer-tagline">
                            Premium construction materials for visionary
                            projects
                        </p>
                        <div className="footer-social">
                            <a href="#" aria-label="LinkedIn">
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none">
                                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                                    <rect x="2" y="9" width="4" height="12" />
                                    <circle cx="4" cy="4" r="2" />
                                </svg>
                            </a>
                            <a href="#" aria-label="X (formerly Twitter)">
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"
                                        fill="currentColor"
                                    />
                                </svg>
                            </a>
                            <a href="#" aria-label="Instagram">
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.919-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"
                                        fill="currentColor"
                                    />
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div className="footer-links">
                        <div className="footer-column">
                            <h4 className="footer-title">Products</h4>
                            <ul>
                                <li>
                                    <a href="#">Facade Systems</a>
                                </li>
                                <li>
                                    <a href="#">Structural Materials</a>
                                </li>
                                <li>
                                    <a href="#">Interior Finishes</a>
                                </li>
                                <li>
                                    <a href="#">Sustainable Solutions</a>
                                </li>
                            </ul>
                        </div>

                        <div className="footer-column">
                            <h4 className="footer-title">Company</h4>
                            <ul>
                                <li>
                                    <a href="#">About Us</a>
                                </li>
                                <li>
                                    <a href="#">Our Process</a>
                                </li>
                                <li>
                                    <a href="#">Sustainability</a>
                                </li>
                                <li>
                                    <a href="#">Careers</a>
                                </li>
                            </ul>
                        </div>

                        <div className="footer-column">
                            <h4 className="footer-title">Resources</h4>
                            <ul>
                                <li>
                                    <a href="#">Technical Docs</a>
                                </li>
                                <li>
                                    <a href="#">Case Studies</a>
                                </li>
                                <li>
                                    <a href="#">Material Library</a>
                                </li>
                                <li>
                                    <a href="#">FAQ</a>
                                </li>
                            </ul>
                        </div>

                        <div className="footer-column">
                            <h4 className="footer-title">Contact</h4>
                            <ul>
                                <li>
                                    <a href="tel:+1234567890">
                                        +1 (234) 567-890
                                    </a>
                                </li>
                                <li>
                                    <a href="mailto:info@buildmasters.com">
                                        info@ing-construction-materials.com
                                    </a>
                                </li>
                                <li>123 Construction Ave, Suite 500</li>
                                <li>San Francisco, CA 94107</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="footer-bottom">
                    <div className="footer-legal">
                        <p>
                            &copy; {new Date().getFullYear()} BuildMasters. All
                            rights reserved.
                        </p>
                    </div>

                    <motion.button
                        className="back-to-top"
                        whileHover={{ y: -3 }}
                        onClick={() =>
                            window.scrollTo({ top: 0, behavior: "smooth" })
                        }>
                        Back to Top
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none">
                            <path
                                d="M12 19V5M5 12l7-7 7 7"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                            />
                        </svg>
                    </motion.button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
