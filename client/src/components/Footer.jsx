import React from "react";
import Logo from "../assets/ing-logo-4.png";
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                {/* Top Section */}
                <div className="footer-top">
                    <div className="footer-brand">
                        <img src={Logo} alt="Logo" />
                        <p className="footer-tagline">
                            Premium construction materials for visionary
                            projects
                        </p>
                        <div className="footer-social">
                            <a href="#" aria-label="LinkedIn">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                            <a href="#" aria-label="X (formerly Twitter)">
                                <i className="fab fa-x-twitter"></i>
                            </a>
                            <a href="#" aria-label="Instagram">
                                <i className="fab fa-instagram"></i>
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
                                    <a href="mailto:info@ing-construction-materials.com">
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
                    <p className="footer-legal">
                        &copy; {new Date().getFullYear()}{" "}
                        ING-CONSTRUCTION-MATERIALS. All rights reserved.
                    </p>
                    <div className="footer-legal-links">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
