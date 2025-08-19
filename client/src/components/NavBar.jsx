import React, { useState, useEffect } from "react";
import "./NavBar.css";
import Logo from "../assets/ing-logo-4.png";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 80); // scroll threshold
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    return (
        <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
            <div className="navbar-container">
                <div className="navbar-logo">
                    <NavLink to="/">
                        <img src={Logo} alt="ing constructions logo" />
                    </NavLink>
                </div>

                <div
                    className={`navbar-links ${
                        mobileMenuOpen ? "active" : ""
                    }`}>
                    <NavLink to="/" className="nav-link" end>
                        Home
                    </NavLink>
                    <NavLink to="/materials" className="nav-link">
                        Materials
                    </NavLink>
                    <NavLink to="/about" className="nav-link">
                        About
                    </NavLink>
                    <NavLink to="/projects" className="nav-link">
                        Projects
                    </NavLink>
                    <NavLink to="/contact" className="nav-link">
                        Contact
                    </NavLink>
                    <button className="nav-cta">Get Quote</button>
                </div>

                <div className="mobile-menu-btn" onClick={toggleMobileMenu}>
                    <div
                        className={`menu-line ${
                            mobileMenuOpen ? "line-1" : ""
                        }`}></div>
                    <div
                        className={`menu-line ${
                            mobileMenuOpen ? "line-2" : ""
                        }`}></div>
                    <div
                        className={`menu-line ${
                            mobileMenuOpen ? "line-3" : ""
                        }`}></div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
