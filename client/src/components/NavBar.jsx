import React, { useState, useEffect } from "react";
import "./NavBar.css";
import Logo from "../assets/ing-logo-no-bg-sm.png";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
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
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `nav-link ${isActive ? "active" : ""}`
                        }
                        end>
                        Home
                    </NavLink>
                    <NavLink
                        to="/materials"
                        className={({ isActive }) =>
                            `nav-link ${isActive ? "active" : ""}`
                        }>
                        Materials
                    </NavLink>
                    <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            `nav-link ${isActive ? "active" : ""}`
                        }>
                        About
                    </NavLink>
                    <NavLink
                        to="/projects"
                        className={({ isActive }) =>
                            `nav-link ${isActive ? "active" : ""}`
                        }>
                        Projects
                    </NavLink>
                    <NavLink
                        to="/contact"
                        className={({ isActive }) =>
                            `nav-link ${isActive ? "active" : ""}`
                        }>
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
