// components/PartnerFilter.jsx
import React from "react";

const PartnerFilter = ({ categories, activeFilter, onFilterChange }) => {
    return (
        <div className="filter-container">
            {categories.map((category) => (
                <button
                    key={category.id}
                    className={`filter-button ${
                        activeFilter === category.id ? "active" : ""
                    }`}
                    onClick={() => onFilterChange(category.id)}>
                    {category.name}
                </button>
            ))}
        </div>
    );
};

export default PartnerFilter;
