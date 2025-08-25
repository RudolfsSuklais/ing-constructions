import React from "react";
import { motion } from "framer-motion";
import "./LegalPages.css";

const PrivacyPolicy = () => {
    return (
        <div className="legal-page">
            <div className="legal-hero">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="legal-title">
                    <span className="accent-1">Privacy</span>{" "}
                    <span className="highlight">Policy</span>
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
                    <h2>1. Information We Collect</h2>
                    <p>
                        We collect information that you provide directly to us,
                        including:
                    </p>
                    <ul>
                        <li>
                            Contact information (name, email address, phone
                            number)
                        </li>
                        <li>Company information and professional details</li>
                        <li>Communication preferences</li>
                        <li>Project requirements and specifications</li>
                        <li>Any other information you choose to provide</li>
                    </ul>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="legal-section">
                    <h2>2. How We Use Your Information</h2>
                    <p>We use the information we collect to:</p>
                    <ul>
                        <li>Provide, maintain, and improve our services</li>
                        <li>Process your requests and transactions</li>
                        <li>Send you technical notices and support messages</li>
                        <li>Respond to your comments and questions</li>
                        <li>
                            Communicate with you about products and services
                        </li>
                        <li>Monitor and analyze trends and usage</li>
                    </ul>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.8 }}
                    className="legal-section">
                    <h2>3. Information Sharing</h2>
                    <p>We may share your information with:</p>
                    <ul>
                        <li>
                            Service providers who perform services on our behalf
                        </li>
                        <li>
                            Professional advisors (lawyers, bankers, auditors)
                        </li>
                        <li>
                            Business partners when necessary for project
                            execution
                        </li>
                        <li>As required by law or to protect our rights</li>
                    </ul>
                    <p>
                        We never sell your personal information to third
                        parties.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    className="legal-section">
                    <h2>4. Data Security</h2>
                    <p>
                        We implement appropriate security measures to protect
                        your personal information against unauthorized access,
                        alteration, disclosure, or destruction. These measures
                        include internal reviews of our data collection,
                        storage, and processing practices.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9, duration: 0.8 }}
                    className="legal-section">
                    <h2>5. Your Rights</h2>
                    <p>You have the right to:</p>
                    <ul>
                        <li>Access and receive a copy of your personal data</li>
                        <li>Rectify or update your personal information</li>
                        <li>Request deletion of your personal data</li>
                        <li>Object to processing of your personal data</li>
                        <li>Data portability</li>
                        <li>Withdraw consent at any time</li>
                    </ul>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.0, duration: 0.8 }}
                    className="legal-section">
                    <h2>6. Contact Us</h2>
                    <p>
                        If you have any questions about this Privacy Policy,
                        please contact us at:
                    </p>
                    <div className="contact-info">
                        <p>Email: privacy@yourcompany.com</p>
                        <p>Phone: +1 (555) 123-4567</p>
                        <p>
                            Address: 123 Premium Materials Avenue, City, Country
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
