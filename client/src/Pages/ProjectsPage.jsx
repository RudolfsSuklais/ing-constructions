import React, { useEffect, useState } from "react";
import "./ProjectsPage.css";

const ProjectsPage = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    // Set launch date (2 weeks from now)
    const launchDate = new Date();
    launchDate.setDate(launchDate.getDate() + 14);

    useEffect(() => {
        // Simulate loading time
        const loadingTimer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);

        // Set up countdown timer
        const updateCountdown = () => {
            const now = new Date();
            const timeRemaining = launchDate - now;

            if (timeRemaining <= 0) {
                // Launch time reached
                setDays(0);
                setHours(0);
                setMinutes(0);
                setSeconds(0);
                return;
            }

            const daysRemaining = Math.floor(
                timeRemaining / (1000 * 60 * 60 * 24)
            );
            const hoursRemaining = Math.floor(
                (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            );
            const minutesRemaining = Math.floor(
                (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
            );
            const secondsRemaining = Math.floor(
                (timeRemaining % (1000 * 60)) / 1000
            );

            setDays(daysRemaining);
            setHours(hoursRemaining);
            setMinutes(minutesRemaining);
            setSeconds(secondsRemaining);
        };

        // Initial update
        updateCountdown();

        // Update countdown every second
        const countdownInterval = setInterval(updateCountdown, 1000);

        return () => {
            clearTimeout(loadingTimer);
            clearInterval(countdownInterval);
        };
    }, []);

    if (isLoading) {
        return (
            <div className="loading-overlay">
                <div className="loading-spinner"></div>
            </div>
        );
    }

    return (
        <div className="projects-page">
            <div className="projects-hero">
                <h1 className="section-title">
                    <span className="accent">Exciting</span>{" "}
                    <span className="highlight">Projects</span>{" "}
                    <span className="accent">Coming</span>{" "}
                    <span className="highlight">Soon</span>
                </h1>
                <p className="hero-subtitle">
                    We're crafting something extraordinary for you
                </p>
            </div>

            <div className="countdown-section">
                <div className="countdown-container">
                    <h2>Launching In</h2>
                    <div className="countdown-grid">
                        <div className="countdown-item">
                            <div className="countdown-number">
                                {days.toString().padStart(2, "0")}
                            </div>
                            <div className="countdown-label">Days</div>
                        </div>
                        <div className="countdown-item">
                            <div className="countdown-number">
                                {hours.toString().padStart(2, "0")}
                            </div>
                            <div className="countdown-label">Hours</div>
                        </div>
                        <div className="countdown-item">
                            <div className="countdown-number">
                                {minutes.toString().padStart(2, "0")}
                            </div>
                            <div className="countdown-label">Minutes</div>
                        </div>
                        <div className="countdown-item">
                            <div className="countdown-number">
                                {seconds.toString().padStart(2, "0")}
                            </div>
                            <div className="countdown-label">Seconds</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="teaser-section">
                <div className="teaser-content">
                    <h2>
                        Something <span className="accent">Extraordinary</span>{" "}
                        Is On The Way
                    </h2>
                    <p>
                        We're putting the finishing touches on our latest
                        innovation. Prepare to be amazed by what we've been
                        working on behind the scenes.
                    </p>

                    <div className="teaser-features">
                        <div className="feature-item">
                            <div className="feature-icon">
                                <svg viewBox="0 0 24 24" width="24" height="24">
                                    <path
                                        fill="currentColor"
                                        d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"
                                    />
                                </svg>
                            </div>
                            <div className="feature-text">
                                <h4>Cutting-Edge Technology</h4>
                                <p>
                                    Leveraging the latest advancements for
                                    superior performance
                                </p>
                            </div>
                        </div>
                        <div className="feature-item">
                            <div className="feature-icon">
                                <svg viewBox="0 0 24 24" width="24" height="24">
                                    <path
                                        fill="currentColor"
                                        d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"
                                    />
                                </svg>
                            </div>
                            <div className="feature-text">
                                <h4>User-Centered Design</h4>
                                <p>
                                    Intuitive interfaces crafted with the user
                                    experience in mind
                                </p>
                            </div>
                        </div>
                        <div className="feature-item">
                            <div className="feature-icon">
                                <svg viewBox="0 0 24 24" width="24" height="24">
                                    <path
                                        fill="currentColor"
                                        d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"
                                    />
                                </svg>
                            </div>
                            <div className="feature-text">
                                <h4>Premium Quality</h4>
                                <p>
                                    Uncompromising standards for exceptional
                                    results
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="progress-section">
                <h2>
                    Project <span className="accent">Progress</span>
                </h2>
                <div className="progress-container">
                    <div className="progress-bar">
                        <div className="progress-fill"></div>
                    </div>
                    <div className="progress-text">85% Complete</div>
                </div>
            </div>

            <div className="projects-cta">
                <h2>Be The First To Know</h2>
                <p>
                    Join our newsletter to receive exclusive updates and early
                    access when we launch.
                </p>
                <div className="cta-form">
                    <input
                        type="email"
                        placeholder="Enter your email address"
                    />
                    <button className="view-all-button">Notify Me</button>
                </div>
            </div>
        </div>
    );
};

export default ProjectsPage;
