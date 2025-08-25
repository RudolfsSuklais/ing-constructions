import React from "react";
import { motion } from "framer-motion";
import "./LegalPages.css";

const TermsOfService = () => {
    return (
        <div className="legal-page">
            <div className="legal-hero">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="legal-title">
                    <span className="accent-1">Terms of</span>{" "}
                    <span className="highlight">Service</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.8 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="legal-subtitle">
                    Last updated: {new Date().toLocaleDateString()}
                </motion.p>
            </div>

            <div className="legal-content">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="legal-section">
                    <h2>1. Acceptance of Terms</h2>
                    <p>
                        By accessing and using our website and services, you
                        accept and agree to be bound by the terms and provision
                        of this agreement.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="legal-section">
                    <h2>2. Services Provided</h2>
                    <p>
                        We provide premium building materials and architectural
                        solutions including:
                    </p>
                    <ul>
                        <li>High-quality aluminum systems</li>
                        <li>Premium wood products</li>
                        <li>Architectural glass solutions</li>
                        <li>Custom material fabrication</li>
                        <li>Professional consultation services</li>
                    </ul>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.8 }}
                    className="legal-section">
                    <h2>3. User Responsibilities</h2>
                    <p>As a user of our services, you agree to:</p>
                    <ul>
                        <li>Provide accurate and complete information</li>
                        <li>Maintain the confidentiality of your account</li>
                        <li>Use our services for lawful purposes only</li>
                        <li>Not engage in any fraudulent activities</li>
                        <li>Comply with all applicable laws and regulations</li>
                    </ul>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    className="legal-section">
                    <h2>4. Intellectual Property</h2>
                    <p>
                        All content on this website, including text, graphics,
                        logos, and images, is the property of our company and is
                        protected by intellectual property laws. You may not
                        use, reproduce, or distribute any content without our
                        express written permission.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9, duration: 0.8 }}
                    className="legal-section">
                    <h2>5. Limitation of Liability</h2>
                    <p>
                        We shall not be liable for any indirect, incidental,
                        special, consequential, or punitive damages resulting
                        from your access to or use of our services. Our total
                        liability for any claims under these terms shall not
                        exceed the amount you paid us for the services.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.0, duration: 0.8 }}
                    className="legal-section">
                    <h2>6. Governing Law</h2>
                    <p>
                        These terms shall be governed by and construed in
                        accordance with the laws of [Your Country/State],
                        without regard to its conflict of law provisions.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.1, duration: 0.8 }}
                    className="legal-section">
                    <h2>7. Changes to Terms</h2>
                    <p>
                        We reserve the right to modify these terms at any time.
                        We will provide notice of significant changes through
                        our website or by email. Your continued use of our
                        services after changes constitutes acceptance of the new
                        terms.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2, duration: 0.8 }}
                    className="legal-section">
                    <h2>8. Contact Information</h2>
                    <p>
                        For questions about these Terms of Service, please
                        contact us at:
                    </p>
                    <div className="contact-info">
                        <p>Email: legal@yourcompany.com</p>
                        <p>Phone: +1 (555) 123-LEGAL</p>
                        <p>
                            Address: 123 Premium Materials Avenue, City, Country
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default TermsOfService;
