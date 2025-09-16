import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import "./Aluminium.css";

const RequestQuote = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        product: location.state?.product || "",
        manufacturer: location.state?.manufacturerName || "", // store manufacturer name
        name: "",
        email: "",
        phone: "",
        company: "",
        projectType: "",
        projectDescription: "",
        quantity: "",
        timeline: "",
        budget: "",
        measurements: "",
        additionalRequirements: "",
    });

    const [isSubmitted, setIsSubmitted] = useState(false);
    const [countdown, setCountdown] = useState(10); // 10 seconds countdown

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Countdown timer effect
    useEffect(() => {
        let timer;
        if (isSubmitted && countdown > 0) {
            timer = setTimeout(() => {
                setCountdown(countdown - 1);
            }, 1000);
        } else if (isSubmitted && countdown === 0) {
            navigate("/"); // Redirect to home page
        }

        return () => {
            if (timer) clearTimeout(timer);
        };
    }, [isSubmitted, countdown, navigate]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const API_BASE = import.meta.env.VITE_API_BASE;

            const res = await fetch(`${API_BASE}/send-quote`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await res.json();
            if (res.ok) setIsSubmitted(true);
            else alert(data.message);
        } catch (err) {
            console.error(err);
            alert("Something went wrong. Please try again.");
        }
    };

    useEffect(() => {
        if (isSubmitted) {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    }, [isSubmitted]);

    return (
        <div className="aluminium-page">
            {/* Hero Section */}
            <section className="aluminium-hero">
                <div className="hero-content">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="section-title"
                    >
                        <span className="accent-1">Request </span>
                        <span className="highlight">A Quote</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.8 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="hero-subtitle"
                    >
                        Provide your project details and we'll prepare a
                        customized quote
                    </motion.p>
                </div>
            </section>

            {/* Quote Form Section */}
            <section className="quote-form-section">
                <div className="quote-form-container">
                    <motion.div
                        className="form-card"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        {isSubmitted ? (
                            <div className="success-message">
                                <svg
                                    width="64"
                                    height="64"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.24013C11.8996 1.7649 14.1003 1.98232 16.07 2.85999"
                                        stroke="var(--gold-accent)"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                    />
                                    <path
                                        d="M22 4L12 14.01L9 11.01"
                                        stroke="var(--gold-accent)"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                                <h3>Thank You!</h3>
                                <p>
                                    Your quote request has been submitted
                                    successfully. We'll contact you shortly.
                                </p>
                                <p className="countdown-text">
                                    Redirecting to home page in {countdown}{" "}
                                    seconds...
                                </p>
                                <button
                                    className="redirect-now-btn"
                                    onClick={() => navigate("/")}
                                >
                                    Go Now
                                </button>
                            </div>
                        ) : (
                            <form
                                onSubmit={handleSubmit}
                                className="quote-form"
                            >
                                {/* Form content remains the same */}
                                <div className="form-section">
                                    <h3 className="form-section-title">
                                        Product Information
                                    </h3>
                                    <div className="form-row">
                                        <div className="form-group product-group">
                                            <label htmlFor="product">
                                                Product
                                            </label>
                                            <div className="product-input-container">
                                                <input
                                                    type="text"
                                                    id="product"
                                                    name="product"
                                                    value={formData.product}
                                                    readOnly
                                                    className="readonly-input"
                                                />
                                                <button
                                                    type="button"
                                                    className="change-product-btn"
                                                    onClick={() =>
                                                        navigate(-1, {
                                                            state: {
                                                                manufacturerIndex:
                                                                    location
                                                                        .state
                                                                        ?.manufacturerIndex,
                                                            },
                                                        })
                                                    }
                                                >
                                                    Change
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Rest of the form remains the same */}
                                <div className="form-section">
                                    <h3 className="form-section-title">
                                        Your Information
                                    </h3>
                                    <div className="form-row">
                                        <div className="form-group">
                                            <label htmlFor="name">
                                                Full Name *
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="email">
                                                Email Address *
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group">
                                            <label htmlFor="phone">
                                                Phone Number
                                            </label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="company">
                                                Company
                                            </label>
                                            <input
                                                type="text"
                                                id="company"
                                                name="company"
                                                value={formData.company}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="form-section">
                                    <h3 className="form-section-title">
                                        Project Details
                                    </h3>
                                    <div className="form-row">
                                        <div className="form-group">
                                            <label htmlFor="projectType">
                                                Project Type
                                            </label>
                                            <select
                                                id="projectType"
                                                name="projectType"
                                                value={formData.projectType}
                                                onChange={handleChange}
                                            >
                                                <option value="">
                                                    Select project type
                                                </option>
                                                <option value="residential">
                                                    Residential
                                                </option>
                                                <option value="commercial">
                                                    Commercial
                                                </option>
                                                <option value="industrial">
                                                    Industrial
                                                </option>
                                                <option value="other">
                                                    Other
                                                </option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="quantity">
                                                Estimated Quantity
                                            </label>
                                            <input
                                                type="text"
                                                id="quantity"
                                                name="quantity"
                                                value={formData.quantity}
                                                onChange={handleChange}
                                                placeholder="e.g., 10 windows, 5 doors"
                                            />
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group">
                                            <label htmlFor="timeline">
                                                Project Timeline
                                            </label>
                                            <select
                                                id="timeline"
                                                name="timeline"
                                                value={formData.timeline}
                                                onChange={handleChange}
                                            >
                                                <option value="">
                                                    Select timeline
                                                </option>
                                                <option value="urgent">
                                                    Urgent (within 1 month)
                                                </option>
                                                <option value="1-3 months">
                                                    1-3 months
                                                </option>
                                                <option value="3-6 months">
                                                    3-6 months
                                                </option>
                                                <option value="6+ months">
                                                    6+ months
                                                </option>
                                                <option value="planning">
                                                    Still in planning phase
                                                </option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="budget">
                                                Budget Range
                                            </label>
                                            <select
                                                id="budget"
                                                name="budget"
                                                value={formData.budget}
                                                onChange={handleChange}
                                            >
                                                <option value="">
                                                    Select budget range
                                                </option>
                                                <option value="under-5k">
                                                    Under $5,000
                                                </option>
                                                <option value="5k-15k">
                                                    $5,000 - $15,000
                                                </option>
                                                <option value="15k-30k">
                                                    $15,000 - $30,000
                                                </option>
                                                <option value="30k-50k">
                                                    $30,000 - $50,000
                                                </option>
                                                <option value="50k+">
                                                    $50,000+
                                                </option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-group full-width">
                                        <label htmlFor="measurements">
                                            Measurements / Specifications
                                        </label>
                                        <textarea
                                            id="measurements"
                                            name="measurements"
                                            value={formData.measurements}
                                            onChange={handleChange}
                                            rows="3"
                                            placeholder="Please provide any measurements, sizes, or technical specifications you have"
                                        />
                                    </div>
                                    <div className="form-group full-width">
                                        <label htmlFor="projectDescription">
                                            Project Description
                                        </label>
                                        <textarea
                                            id="projectDescription"
                                            name="projectDescription"
                                            value={formData.projectDescription}
                                            onChange={handleChange}
                                            rows="3"
                                            placeholder="Tell us about your project, goals, and any specific requirements"
                                        />
                                    </div>
                                    <div className="form-group full-width">
                                        <label htmlFor="additionalRequirements">
                                            Additional Requirements
                                        </label>
                                        <textarea
                                            id="additionalRequirements"
                                            name="additionalRequirements"
                                            value={
                                                formData.additionalRequirements
                                            }
                                            onChange={handleChange}
                                            rows="2"
                                            placeholder="Any other information we should know"
                                        />
                                    </div>
                                </div>

                                <div className="form-submit">
                                    <button
                                        type="submit"
                                        className="view-all-button"
                                    >
                                        Submit Quote Request
                                        <svg
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M22 2L11 13"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M22 2L15 22L11 13L2 9L22 2Z"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </form>
                        )}
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default RequestQuote;
