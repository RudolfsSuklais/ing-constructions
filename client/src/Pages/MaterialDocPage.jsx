import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./MaterialDocPage.css";

// Import all material images
import Marble from "../assets/materials/marble.jpg";
import GlassFacade from "../assets/materials/glass-facade.jpg";
import TitaniumCladding from "../assets/materials/titanium-cladding.jpg";
import EngineeredWood from "../assets/materials/engineered-wood.jpg";
import CarbonFiber from "../assets/materials/carbon-fiber.jpg";
import SmartGlass from "../assets/materials/smart-glass.jpg";
import Terrazzo from "../assets/materials/terrazzo.jpg";
import CortenSteel from "../assets/materials/corten-steel.jpeg";
import Plywood from "../assets/materials/plywood.jpg";
import Timber from "../assets/materials/timber.jpg";
import MDF from "../assets/materials/mdf.jpg";
import OSB from "../assets/materials/osb.jpg";
import Concrete from "../assets/materials/concrete.jpg";
import Brick from "../assets/materials/brick.jpg";
import Granite from "../assets/materials/granite.jpg";
import AsphaltShingles from "../assets/materials/asphalt-shingles.jpg";

// Original material categories structure
const materialCategories = [
    {
        title: "Luxury Finishes",
        type: "finishes",
        materials: [
            {
                id: 1,
                name: "Carrara Statuario Marble",
                description:
                    "Premium Italian marble with dramatic veining, perfect for statement walls and floors.",
                image: Marble,
                specs: [
                    "99.9% pure white base",
                    "Custom finishes available",
                    "Available in slabs up to 3m",
                ],
                price: "$$$$",
                sustainability: "Natural stone with low processing",
                applications: ["Flooring", "Wall cladding", "Countertops"],
                leadTime: "4-6 weeks",
                technicalSpecs: {
                    composition: "99.9% calcium carbonate",
                    density: "2.71 g/cm³",
                    waterAbsorption: "<0.2%",
                    flexuralStrength: "15-18 MPa",
                    compressiveStrength: "100-150 MPa",
                    thicknessOptions: "20mm, 30mm, 40mm",
                },
                installationGuide:
                    "Requires professional installation. Substrate must be perfectly level. Use white cement-based adhesive to prevent discoloration.",
                maintenance:
                    "Clean with pH-neutral stone cleaner. Reseal annually for high-traffic areas. Avoid acidic cleaners.",
                certifications: ["CE Mark", "ISO 9001", "NSF Certified"],
                typicalApplications: [
                    "Luxury flooring",
                    "Feature walls",
                    "Bathroom vanities",
                    "Statement countertops",
                ],
            },
            {
                id: 2,
                name: "Handcrafted Terrazzo",
                description:
                    "Custom composite material with precious stone aggregates in resin or cement base.",
                image: Terrazzo,
                specs: [
                    "Unlimited color combinations",
                    "Seamless installation",
                    "20mm standard thickness",
                ],
                price: "$$$",
                sustainability: "Contains recycled content",
                applications: ["Flooring", "Wall panels", "Custom surfaces"],
                leadTime: "3-5 weeks",
                technicalSpecs: {
                    composition: "70% aggregates, 30% binder",
                    density: "2.4 g/cm³",
                    waterAbsorption: "<0.5%",
                    flexuralStrength: "12-15 MPa",
                    compressiveStrength: "80-100 MPa",
                    thicknessOptions: "12mm, 20mm, 30mm",
                },
                installationGuide:
                    "Can be poured in situ or installed as prefabricated slabs. Requires expansion joints every 6m.",
                maintenance:
                    "Daily sweeping and damp mopping. Periodic polishing to maintain shine.",
                certifications: ["GREENGUARD Gold", "LEED Compliant"],
                typicalApplications: [
                    "Commercial flooring",
                    "Retail spaces",
                    "Hospitality surfaces",
                ],
            },
            {
                id: 3,
                name: "Premium Granite",
                description:
                    "Natural granite with exceptional durability and unique mineral patterns.",
                image: Granite,
                specs: [
                    "Heat and scratch resistant",
                    "Multiple finish options",
                    "20mm standard thickness",
                ],
                price: "$$$$",
                sustainability: "Natural stone with long lifespan",
                applications: ["Countertops", "Flooring", "Exterior cladding"],
                leadTime: "3-6 weeks",
                technicalSpecs: {
                    composition: "60% feldspar, 30% quartz, 10% mica",
                    density: "2.65-2.75 g/cm³",
                    waterAbsorption: "<0.4%",
                    flexuralStrength: "10-20 MPa",
                    compressiveStrength: "90-200 MPa",
                    thicknessOptions: "20mm, 30mm, 40mm",
                },
                installationGuide:
                    "Requires professional installation. Use epoxy-based adhesives for best results.",
                maintenance:
                    "Seal upon installation and re-seal annually. Clean with pH-neutral cleaners.",
                certifications: ["CE Mark", "ISO 9001"],
                typicalApplications: [
                    "Kitchen countertops",
                    "Flooring",
                    "Exterior facades",
                ],
            },
        ],
    },
    {
        title: "Wood-Based Materials",
        type: "wood",
        materials: [
            {
                id: 4,
                name: "Architectural Plywood",
                description:
                    "High-quality plywood with fine veneers for visible applications.",
                image: Plywood,
                specs: [
                    "FSC-certified options",
                    "Various thicknesses",
                    "Smooth finish",
                ],
                price: "$$",
                sustainability: "Sustainable forestry options",
                applications: ["Furniture", "Wall paneling", "Ceilings"],
                leadTime: "1-2 weeks",
                technicalSpecs: {
                    composition: "Cross-laminated wood veneers",
                    density: "0.5-0.7 g/cm³",
                    moistureContent: "8-12%",
                    bendingStrength: "30-50 MPa",
                    thicknessOptions: "6mm, 9mm, 12mm, 18mm, 25mm",
                },
                installationGuide:
                    "Can be installed with standard woodworking tools. Use appropriate fasteners for load-bearing applications.",
                maintenance:
                    "Regular dusting. Can be refinished or repainted as needed.",
                certifications: ["FSC", "CARB Phase 2"],
                typicalApplications: [
                    "Interior paneling",
                    "Furniture construction",
                    "Architectural millwork",
                ],
            },
            {
                id: 5,
                name: "Premium Timber",
                description:
                    "Solid wood for structural and decorative applications.",
                image: Timber,
                specs: [
                    "Kiln-dried",
                    "Various wood species",
                    "Custom dimensions",
                ],
                price: "$$$",
                sustainability: "Responsibly sourced",
                applications: ["Framing", "Decking", "Interior finishes"],
                leadTime: "2-3 weeks",
                technicalSpecs: {
                    composition: "100% solid wood",
                    density: "0.45-0.85 g/cm³ (species dependent)",
                    moistureContent: "8-12%",
                    bendingStrength: "50-120 MPa (species dependent)",
                    availableSizes: "Various standard and custom sizes",
                },
                installationGuide:
                    "Acclimate wood to environment before installation. Use appropriate joinery techniques.",
                maintenance:
                    "Regular cleaning. Periodic sealing or staining for exterior applications.",
                certifications: ["FSC", "PEFC"],
                typicalApplications: [
                    "Structural framing",
                    "Decking",
                    "Interior finishes",
                ],
            },
            {
                id: 6,
                name: "MDF Panels",
                description:
                    "Smooth, uniform panels perfect for painted finishes.",
                image: MDF,
                specs: [
                    "Easy to machine",
                    "Consistent density",
                    "Various thicknesses",
                ],
                price: "$",
                sustainability: "Contains recycled wood fibers",
                applications: ["Cabinetry", "Millwork", "Furniture"],
                leadTime: "1-2 weeks",
                technicalSpecs: {
                    composition: "Wood fibers + resin binder",
                    density: "0.7-0.9 g/cm³",
                    moistureResistance:
                        "Standard and moisture-resistant options",
                    thicknessOptions: "3mm to 32mm",
                },
                installationGuide:
                    "Use appropriate woodworking tools. Pre-drill for screws to prevent splitting.",
                maintenance:
                    "Dust regularly. Repaint as needed to maintain finish.",
                certifications: ["CARB Phase 2", "FSC Mix"],
                typicalApplications: [
                    "Cabinet doors",
                    "Wainscoting",
                    "Furniture components",
                ],
            },
            {
                id: 7,
                name: "OSB Sheathing",
                description:
                    "Cost-effective structural panels for sheathing applications.",
                image: OSB,
                specs: [
                    "High strength",
                    "Moisture-resistant options",
                    "Large panel sizes",
                ],
                price: "$",
                sustainability: "Made from fast-growing trees",
                applications: ["Wall sheathing", "Roof decking", "Subflooring"],
                leadTime: "1 week",
                technicalSpecs: {
                    composition: "Strand-oriented wood flakes + resin",
                    density: "0.6-0.7 g/cm³",
                    moistureResistance: "Standard and waterproof options",
                    panelSizes: "1220mm x 2440mm standard",
                },
                installationGuide:
                    "Install with appropriate fasteners. Leave expansion gaps as specified.",
                maintenance:
                    "Keep dry during construction. Cover with appropriate finish materials.",
                certifications: ["PS2", "CSA O437"],
                typicalApplications: [
                    "Wall sheathing",
                    "Roof decking",
                    "Subflooring",
                ],
            },
        ],
    },
    {
        title: "Concrete & Masonry",
        type: "concrete",
        materials: [
            {
                id: 8,
                name: "Architectural Concrete",
                description:
                    "High-quality concrete with precise finishes for visible applications.",
                image: Concrete,
                specs: [
                    "Custom mix designs",
                    "Various finishes",
                    "Reinforced options",
                ],
                price: "$$",
                sustainability: "Can contain recycled materials",
                applications: ["Floors", "Walls", "Countertops"],
                leadTime: "2-4 weeks",
                technicalSpecs: {
                    composition: "Cement, aggregates, water, admixtures",
                    compressiveStrength: "20-70 MPa",
                    flexuralStrength: "3-7 MPa",
                    finishOptions:
                        "Polished, honed, exposed aggregate, stamped",
                },
                installationGuide:
                    "Requires professional installation. Proper curing is essential for quality finish.",
                maintenance:
                    "Seal polished surfaces. Clean with neutral pH cleaners.",
                certifications: ["LEED contributive", "ISO 14001"],
                typicalApplications: [
                    "Polished floors",
                    "Precast panels",
                    "Architectural features",
                ],
            },
            {
                id: 9,
                name: "Premium Bricks",
                description:
                    "Clay bricks with consistent color and texture for beautiful masonry.",
                image: Brick,
                specs: [
                    "High compressive strength",
                    "Various colors",
                    "Standard and custom sizes",
                ],
                price: "$$",
                sustainability: "Natural material with long lifespan",
                applications: ["Facades", "Walls", "Paving"],
                leadTime: "3-5 weeks",
                technicalSpecs: {
                    composition: "Clay, shale, water",
                    compressiveStrength: "20-100 MPa",
                    waterAbsorption: "4-20%",
                    sizes: "Standard modular and custom sizes",
                },
                installationGuide:
                    "Install with appropriate mortar. Follow proper curing procedures.",
                maintenance:
                    "Minimal maintenance required. Repoint mortar as needed.",
                certifications: ["ASTM C62", "CSA A82"],
                typicalApplications: [
                    "Exterior facades",
                    "Feature walls",
                    "Paving",
                ],
            },
        ],
    },
    {
        title: "Advanced Facade Systems",
        type: "facade",
        materials: [
            {
                id: 10,
                name: "Structural Glass Curtain Walls",
                description:
                    "Frameless glazing systems for ultra-modern transparent architecture.",
                image: GlassFacade,
                specs: [
                    "Up to 15m spans",
                    "UV-protective coatings",
                    "Custom tint options",
                ],
                price: "$$$$",
                sustainability: "High recycled glass content",
                applications: [
                    "Office buildings",
                    "Retail spaces",
                    "Institutional facades",
                ],
                leadTime: "8-12 weeks",
                technicalSpecs: {
                    composition:
                        "Tempered or laminated glass + aluminum framing",
                    thickness: "6mm-25mm",
                    uValue: "1.0-2.5 W/m²K",
                    lightTransmittance: "20-80%",
                },
                installationGuide:
                    "Professional installation required. Follow engineered specifications precisely.",
                maintenance:
                    "Regular cleaning with approved glass cleaners. Inspect seals annually.",
                certifications: ["ASTM E1300", "EN 13830"],
                typicalApplications: [
                    "High-rise facades",
                    "Atriums",
                    "Storefronts",
                ],
            },
            {
                id: 11,
                name: "Titanium Rain Screen Cladding",
                description:
                    "Lightweight yet durable titanium panels with self-healing oxide layer.",
                image: TitaniumCladding,
                specs: [
                    "0.3-1.2mm thickness",
                    "100+ year lifespan",
                    "Patina development control",
                ],
                price: "$$$$$",
                sustainability: "100% recyclable",
                applications: [
                    "Coastal buildings",
                    "Landmark structures",
                    "Museums",
                ],
                leadTime: "10-14 weeks",
                technicalSpecs: {
                    composition: "Grade 1 or Grade 2 titanium",
                    thickness: "0.3-1.2mm",
                    panelSizes: "Custom sizes up to 1500mm x 3000mm",
                    weight: "4.5 g/cm³",
                },
                installationGuide:
                    "Specialized installation required. Use non-corrosive fasteners.",
                maintenance:
                    "Natural patina develops over time. Minimal cleaning required.",
                certifications: ["ASTM B265", "EN 10204"],
                typicalApplications: [
                    "Iconic building facades",
                    "Cultural institutions",
                    "High-end residential",
                ],
            },
            {
                id: 12,
                name: "Weathering Steel Panels",
                description:
                    "Corten steel with protective rust patina for industrial-chic exteriors.",
                image: CortenSteel,
                specs: [
                    "4-6mm thickness",
                    "Pre-oxidized options",
                    "Maintenance-free",
                ],
                price: "$$$",
                sustainability: "Long lifespan reduces replacement",
                applications: [
                    "Cultural buildings",
                    "Bridges",
                    "Sculptural elements",
                ],
                leadTime: "6-8 weeks",
                technicalSpecs: {
                    composition: "Corten A or B steel",
                    thickness: "4-6mm standard",
                    panelSizes: "Custom sizes available",
                    corrosionRate: "<0.002 inches per year",
                },
                installationGuide:
                    "Allow for proper drainage. Isolate from other metals to prevent galvanic corrosion.",
                maintenance:
                    "Initial rust runoff may occur. No maintenance required after patina develops.",
                certifications: ["ASTM A588", "EN 10025-5"],
                typicalApplications: [
                    "Architectural facades",
                    "Bridges",
                    "Landscape features",
                ],
            },
        ],
    },
    {
        title: "Roofing Systems",
        type: "roofing",
        materials: [
            {
                id: 13,
                name: "Architectural Asphalt Shingles",
                description:
                    "Premium shingles with enhanced durability and aesthetic appeal.",
                image: AsphaltShingles,
                specs: [
                    "30+ year warranty",
                    "Various colors",
                    "Impact-resistant options",
                ],
                price: "$$",
                sustainability: "Some recycled content",
                applications: ["Residential roofing", "Low-slope applications"],
                leadTime: "2-3 weeks",
                technicalSpecs: {
                    composition: "Fiberglass mat, asphalt, mineral granules",
                    windResistance: "Up to 130 mph",
                    fireRating: "Class A",
                    coverage: "3 bundles per square (100 sq ft)",
                },
                installationGuide:
                    "Install over appropriate underlayment. Follow manufacturer's nailing pattern.",
                maintenance:
                    "Inspect annually. Replace damaged shingles promptly.",
                certifications: ["UL 790", "ASTM D3462"],
                typicalApplications: [
                    "Residential roofs",
                    "Low-slope commercial roofs",
                ],
            },
        ],
    },
    {
        title: "Innovative Composites",
        type: "composites",
        materials: [
            {
                id: 14,
                name: "Aerospace-Grade Carbon Fiber",
                description:
                    "Ultra-strong, lightweight panels for cutting-edge architectural elements.",
                image: CarbonFiber,
                specs: [
                    "1/5 the weight of steel",
                    "Custom weave patterns",
                    "UV-stable resin systems",
                ],
                price: "$$$$$",
                sustainability: "Lightweight reduces structural demands",
                applications: [
                    "Cantilevered elements",
                    "Decorative screens",
                    "High-performance structures",
                ],
                leadTime: "5-7 weeks",
                technicalSpecs: {
                    composition: "Carbon fiber + epoxy resin",
                    density: "1.5-1.6 g/cm³",
                    tensileStrength: "500-700 ksi",
                    panelSizes: "Custom sizes up to 5m x 2.5m",
                },
                installationGuide:
                    "Specialized installation required. Use appropriate adhesives and fasteners.",
                maintenance:
                    "Clean with mild soap and water. Inspect for impact damage annually.",
                certifications: ["ISO 9001", "AS9100"],
                typicalApplications: [
                    "Architectural features",
                    "Lightweight structures",
                    "Decorative elements",
                ],
            },
            {
                id: 15,
                name: "Engineered Ebony Wood",
                description:
                    "Stabilized hardwood with enhanced durability for exterior applications.",
                image: EngineeredWood,
                specs: [
                    "FSC-certified",
                    "20-year warranty",
                    "Dimensional stability",
                ],
                price: "$$$$",
                sustainability: "Responsibly harvested",
                applications: [
                    "Exterior cladding",
                    "Decking",
                    "Architectural features",
                ],
                leadTime: "4-6 weeks",
                technicalSpecs: {
                    composition: "Hardwood veneers + stabilizing resins",
                    density: "1.0-1.2 g/cm³",
                    moistureContent: "6-8%",
                    stability: "Minimal expansion/contraction",
                },
                installationGuide:
                    "Install with appropriate fasteners. Allow for small expansion gaps.",
                maintenance:
                    "Clean annually. Reapply protective finish as needed.",
                certifications: ["FSC", "ISO 14001"],
                typicalApplications: [
                    "Exterior cladding",
                    "Decking",
                    "Architectural features",
                ],
            },
        ],
    },
    {
        title: "Smart Materials",
        type: "smart",
        materials: [
            {
                id: 16,
                name: "Electrochromic Smart Glass",
                description:
                    "Glass that tints on demand for privacy and energy efficiency.",
                image: SmartGlass,
                specs: [
                    "60-90% VLT adjustment",
                    "App-controlled",
                    "UV/IR rejection",
                ],
                price: "$$$$$",
                sustainability: "Reduces energy consumption",
                applications: ["Office partitions", "Facades", "Skylights"],
                leadTime: "12-16 weeks",
                technicalSpecs: {
                    composition:
                        "Glass + electrochromic layer + conductive coatings",
                    thickness: "6-25mm",
                    switchingTime: "5-15 minutes",
                    powerConsumption: "3-5 W/m² during tinting",
                },
                installationGuide:
                    "Professional installation required. Requires electrical connection.",
                maintenance:
                    "Clean with approved glass cleaners. Annual system check recommended.",
                certifications: ["EN 1279", "ANSI Z97.1"],
                typicalApplications: [
                    "Dynamic facades",
                    "Privacy glass",
                    "Energy-efficient glazing",
                ],
            },
        ],
    },
];

// Flatten all materials with category information
const allMaterials = materialCategories.flatMap((category) =>
    category.materials.map((material) => ({
        ...material,
        categoryType: category.type,
        categoryTitle: category.title,
    }))
);

const MaterialDocPage = () => {
    const { materialId } = useParams();
    const navigate = useNavigate();
    const [requestSent, setRequestSent] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        projectDetails: "",
        quantity: "",
    });

    // Find the material by ID (convert string to number)
    const material = allMaterials.find((mat) => mat.id === Number(materialId));

    if (!material) {
        return <div className="material-not-found">Material not found</div>;
    }

    // Find related materials (same category, excluding current material)
    const relatedMaterials = allMaterials
        .filter(
            (m) =>
                m.categoryType === material.categoryType && m.id !== material.id
        )
        .slice(0, 3); // Limit to 3 related items

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically send the data to your backend
        console.log("Price request submitted:", { materialId, ...formData });
        setRequestSent(true);
        // Reset form after 3 seconds
        setTimeout(() => setRequestSent(false), 3000);
    };

    useEffect(() => {
        // Scroll to the top of the page when the component mounts
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        // Scroll to the top of the page when the component mounts or materialId changes
        window.scrollTo({
            top: 0,
            behavior: "smooth", // Optional: adds smooth scrolling
        });
    }, [materialId]); // Add materialId as dependency

    return (
        <div className="material-doc-container">
            <button className="back-button" onClick={() => navigate(-1)}>
                &larr; Back to Materials
            </button>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="material-doc-header">
                <div className="material-image-container">
                    <img src={material.image} alt={material.name} />
                </div>
                <div className="material-header-text">
                    <h1>{material.name}</h1>
                    <p className="material-category">
                        {material.categoryTitle}
                    </p>
                    <p className="material-description">
                        {material.description}
                    </p>
                    <div className="material-meta">
                        <span className="price">{material.price}</span>
                        <span className="lead-time">
                            Lead time: {material.leadTime}
                        </span>
                    </div>
                </div>
            </motion.div>

            <div className="material-doc-content">
                <div className="technical-specs">
                    <h2>Technical Specifications</h2>
                    <div className="specs-grid">
                        {material.specs.map((spec, index) => (
                            <div key={index} className="spec-item">
                                <span className="spec-value">{spec}</span>
                            </div>
                        ))}
                    </div>

                    {material.technicalSpecs && (
                        <>
                            <h3>Detailed Technical Data</h3>
                            <div className="specs-grid">
                                {Object.entries(material.technicalSpecs).map(
                                    ([key, value]) => (
                                        <div key={key} className="spec-item">
                                            <span className="spec-key">
                                                {key
                                                    .replace(/([A-Z])/g, " $1")
                                                    .replace(/^./, (str) =>
                                                        str.toUpperCase()
                                                    )}
                                                :
                                            </span>
                                            <span className="spec-value">
                                                {value}
                                            </span>
                                        </div>
                                    )
                                )}
                            </div>
                        </>
                    )}
                </div>

                <div className="material-details">
                    <div className="detail-section">
                        <h3>Applications</h3>
                        <ul className="applications-list">
                            {material.applications.map((app, index) => (
                                <li key={index}>{app}</li>
                            ))}
                        </ul>
                    </div>

                    {material.installationGuide && (
                        <div className="detail-section">
                            <h3>Installation Guide</h3>
                            <p>{material.installationGuide}</p>
                        </div>
                    )}

                    {material.maintenance && (
                        <div className="detail-section">
                            <h3>Maintenance</h3>
                            <p>{material.maintenance}</p>
                        </div>
                    )}

                    <div className="detail-section">
                        <h3>Sustainability</h3>
                        <p>{material.sustainability}</p>
                        {material.certifications &&
                            material.certifications.length > 0 && (
                                <>
                                    <h4>Certifications</h4>
                                    <div className="certifications">
                                        {material.certifications.map((cert) => (
                                            <span
                                                key={cert}
                                                className="cert-badge">
                                                {cert}
                                            </span>
                                        ))}
                                    </div>
                                </>
                            )}
                    </div>
                </div>

                <div className="price-request-section">
                    <h2>Request Pricing</h2>
                    {requestSent ? (
                        <div className="success-message">
                            <svg viewBox="0 0 24 24" fill="none">
                                <path
                                    d="M20 6L9 17l-5-5"
                                    stroke="#8ec921"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                />
                            </svg>
                            <p>
                                Your request has been sent! We'll contact you
                                shortly.
                            </p>
                        </div>
                    ) : (
                        <form
                            onSubmit={handleSubmit}
                            className="price-request-form">
                            <div className="form-group">
                                <label htmlFor="name">Full Name*</label>
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
                                <label htmlFor="email">Email*</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="phone">Phone</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
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
                                    placeholder="e.g., 500 sq ft"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="projectDetails">
                                    Project Details
                                </label>
                                <textarea
                                    id="projectDetails"
                                    name="projectDetails"
                                    value={formData.projectDetails}
                                    onChange={handleChange}
                                    rows="4"
                                    placeholder="Tell us about your project..."
                                />
                            </div>

                            <button type="submit" className="submit-button">
                                Request Price Quote
                            </button>
                        </form>
                    )}
                </div>
            </div>

            <div className="related-materials">
                <h2>More {material.categoryTitle}</h2>
                {relatedMaterials.length > 0 ? (
                    <div className="related-grid">
                        {relatedMaterials.map((related) => (
                            <div key={related.id} className="related-item">
                                <img src={related.image} alt={related.name} />
                                <div className="related-info">
                                    <h3>{related.name}</h3>
                                    <p>
                                        {related.description.substring(0, 100)}
                                        ...
                                    </p>
                                    <div className="related-meta">
                                        <span className="price">
                                            {related.price}
                                        </span>
                                        <button
                                            onClick={() =>
                                                navigate(
                                                    `/materials/docs/${related.id}`
                                                )
                                            }
                                            className="view-button">
                                            View Details
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="no-related">
                        No other materials currently available in this category
                    </p>
                )}
            </div>
        </div>
    );
};

export default MaterialDocPage;
