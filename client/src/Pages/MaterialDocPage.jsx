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
        <div className="luxury-material-doc">
            {/* Luxury Back Button */}
            <motion.button
                className="luxury-back-button"
                onClick={() => navigate(-1)}
                whileHover={{ x: -5 }}
                transition={{ type: "spring", stiffness: 300 }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                        d="M15 18L9 12L15 6"
                        stroke="#8ec921"
                        strokeWidth="2"
                        strokeLinecap="round"
                    />
                </svg>
                Back to Collection
            </motion.button>

            {/* Hero Section */}
            <div className="luxury-hero">
                <div
                    className="luxury-hero-image"
                    style={{ backgroundImage: `url(${material.image})` }}>
                    <div className="luxury-overlay"></div>
                    <div className="luxury-hero-content">
                        <motion.h1
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8 }}
                            className="luxury-title">
                            {material.name}
                        </motion.h1>
                        <motion.p
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="luxury-subtitle">
                            {material.description}
                        </motion.p>
                        <div className="luxury-meta">
                            <span className="luxury-price">
                                {material.price}
                            </span>
                            <span className="luxury-category">
                                {material.categoryTitle}
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="luxury-content-container">
                {/* Technical Specifications */}
                <section className="luxury-spec-section">
                    <motion.h2
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="luxury-section-title">
                        Technical Excellence
                    </motion.h2>

                    <div className="luxury-spec-grid">
                        {material.specs.map((spec, index) => (
                            <motion.div
                                key={index}
                                initial={{ y: 20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.1,
                                }}
                                viewport={{ once: true, margin: "-50px" }}
                                className="luxury-spec-card">
                                <div className="luxury-spec-icon">
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none">
                                        <path
                                            d="M5 13L9 17L19 7"
                                            stroke="#8ec921"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                </div>
                                <p>{spec}</p>
                            </motion.div>
                        ))}
                    </div>

                    {material.technicalSpecs && (
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            viewport={{ once: true, margin: "-100px" }}
                            className="luxury-tech-specs">
                            <h3>Precision Engineering</h3>
                            <div className="luxury-spec-table">
                                {Object.entries(material.technicalSpecs).map(
                                    ([key, value]) => (
                                        <div
                                            key={key}
                                            className="luxury-spec-row">
                                            <span className="luxury-spec-key">
                                                {key
                                                    .replace(/([A-Z])/g, " $1")
                                                    .replace(/^./, (str) =>
                                                        str.toUpperCase()
                                                    )}
                                            </span>
                                            <span className="luxury-spec-value">
                                                {value}
                                            </span>
                                        </div>
                                    )
                                )}
                            </div>
                        </motion.div>
                    )}
                </section>

                {/* Applications & Details */}
                <div className="luxury-details-grid">
                    <motion.section
                        className="luxury-applications"
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true, margin: "-100px" }}>
                        <h3>Signature Applications</h3>
                        <div className="luxury-app-grid">
                            {material.applications.map((app, index) => (
                                <div key={index} className="luxury-app-card">
                                    <div className="luxury-app-number">
                                        0{index + 1}
                                    </div>
                                    <p>{app}</p>
                                </div>
                            ))}
                        </div>
                    </motion.section>

                    {/* Installation & Maintenance */}
                    <div className="luxury-install-maintenance">
                        {material.installationGuide && (
                            <motion.div
                                className="luxury-installation"
                                initial={{ y: 20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                viewport={{ once: true, margin: "-100px" }}>
                                <h3>
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none">
                                        <path
                                            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                                            stroke="#8ec921"
                                            strokeWidth="2"
                                        />
                                        <path
                                            d="M12 8V12L15 15"
                                            stroke="#8ec921"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                    Expert Installation
                                </h3>
                                <p>{material.installationGuide}</p>
                            </motion.div>
                        )}

                        {material.maintenance && (
                            <motion.div
                                className="luxury-maintenance"
                                initial={{ y: 20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                viewport={{ once: true, margin: "-100px" }}>
                                <h3>
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none">
                                        <path
                                            d="M20 12V22H4V12"
                                            stroke="#8ec921"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M22 7H2V12H22V7Z"
                                            stroke="#8ec921"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M12 22V7"
                                            stroke="#8ec921"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M12 7H7.5C6.83696 7 6.20107 6.73661 5.73223 6.26777C5.26339 5.79893 5 5.16304 5 4.5C5 3.83696 5.26339 3.20107 5.73223 2.73223C6.20107 2.26339 6.83696 2 7.5 2C11 2 12 7 12 7Z"
                                            stroke="#8ec921"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M12 7H16.5C17.163 7 17.7989 6.73661 18.2678 6.26777C18.7366 5.79893 19 5.16304 19 4.5C19 3.83696 18.7366 3.20107 18.2678 2.73223C17.7989 2.26339 17.163 2 16.5 2C13 2 12 7 12 7Z"
                                            stroke="#8ec921"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                    Care & Maintenance
                                </h3>
                                <p>{material.maintenance}</p>
                            </motion.div>
                        )}
                    </div>
                </div>

                {/* Certifications */}
                {material.certifications &&
                    material.certifications.length > 0 && (
                        <motion.section
                            className="luxury-certifications"
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true, margin: "-100px" }}>
                            <h3>Accreditation & Certifications</h3>
                            <div className="luxury-cert-grid">
                                {material.certifications.map((cert, index) => (
                                    <div
                                        key={index}
                                        className="luxury-cert-badge">
                                        <span>{cert}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.section>
                    )}

                {/* Price Request Form */}
                <motion.section
                    className="luxury-request-section"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, margin: "-100px" }}>
                    <div className="luxury-request-container">
                        <div className="luxury-request-content">
                            <h2>Request Exclusive Pricing</h2>
                            <p>
                                Complete the form to receive a personalized
                                quote for your project. Our material specialists
                                will contact you within 24 hours.
                            </p>

                            {requestSent ? (
                                <div className="luxury-success-message">
                                    <svg viewBox="0 0 24 24" fill="none">
                                        <path
                                            d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.24013C11.8996 1.7649 14.1003 1.98232 16.07 2.86"
                                            stroke="#8ec921"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                        />
                                        <path
                                            d="M22 4L12 14.01L9 11.01"
                                            stroke="#8ec921"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                    <div>
                                        <h4>Request Received</h4>
                                        <p>
                                            Our specialist will contact you
                                            shortly to discuss your project
                                            requirements.
                                        </p>
                                    </div>
                                </div>
                            ) : (
                                <form
                                    onSubmit={handleSubmit}
                                    className="luxury-request-form">
                                    <div className="luxury-form-grid">
                                        <div className="luxury-form-group">
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                placeholder="Full Name*"
                                            />
                                        </div>
                                        <div className="luxury-form-group">
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                placeholder="Email*"
                                            />
                                        </div>
                                        <div className="luxury-form-group">
                                            <input
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                placeholder="Phone"
                                            />
                                        </div>
                                        <div className="luxury-form-group">
                                            <input
                                                type="text"
                                                name="quantity"
                                                value={formData.quantity}
                                                onChange={handleChange}
                                                placeholder="Estimated Quantity"
                                            />
                                        </div>
                                        <div className="luxury-form-group full-width">
                                            <textarea
                                                name="projectDetails"
                                                value={formData.projectDetails}
                                                onChange={handleChange}
                                                rows="4"
                                                placeholder="Tell us about your project..."
                                            />
                                        </div>
                                    </div>
                                    <button
                                        type="submit"
                                        className="luxury-submit-button">
                                        Request Quote
                                        <svg
                                            width="20"
                                            height="20"
                                            viewBox="0 0 24 24"
                                            fill="none">
                                            <path
                                                d="M5 12H19"
                                                stroke="white"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M12 5L19 12L12 19"
                                                stroke="white"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </button>
                                </form>
                            )}
                        </div>
                        <div className="luxury-request-benefits">
                            <h3>Why Choose Our Materials</h3>
                            <ul>
                                <li>
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none">
                                        <path
                                            d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.24013C11.8996 1.7649 14.1003 1.98232 16.07 2.86"
                                            stroke="#8ec921"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                        />
                                        <path
                                            d="M22 4L12 14.01L9 11.01"
                                            stroke="#8ec921"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                    Premium quality with unmatched durability
                                </li>
                                <li>
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none">
                                        <path
                                            d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.24013C11.8996 1.7649 14.1003 1.98232 16.07 2.86"
                                            stroke="#8ec921"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                        />
                                        <path
                                            d="M22 4L12 14.01L9 11.01"
                                            stroke="#8ec921"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                    Sustainable sourcing and production
                                </li>
                                <li>
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none">
                                        <path
                                            d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.24013C11.8996 1.7649 14.1003 1.98232 16.07 2.86"
                                            stroke="#8ec921"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                        />
                                        <path
                                            d="M22 4L12 14.01L9 11.01"
                                            stroke="#8ec921"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                    Worldwide shipping with expert logistics
                                </li>
                                <li>
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none">
                                        <path
                                            d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.24013C11.8996 1.7649 14.1003 1.98232 16.07 2.86"
                                            stroke="#8ec921"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                        />
                                        <path
                                            d="M22 4L12 14.01L9 11.01"
                                            stroke="#8ec921"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                    Dedicated project support from our
                                    specialists
                                </li>
                            </ul>
                        </div>
                    </div>
                </motion.section>

                {/* Related Materials */}
                <motion.section
                    className="luxury-related-materials"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, margin: "-100px" }}>
                    <div className="luxury-related-header">
                        <h2>Complementary Materials</h2>
                        <p>
                            Explore other premium options from our{" "}
                            {material.categoryTitle} collection
                        </p>
                    </div>

                    {relatedMaterials.length > 0 ? (
                        <div className="luxury-related-grid">
                            {relatedMaterials.map((related) => (
                                <motion.div
                                    key={related.id}
                                    whileHover={{ y: -10 }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 300,
                                    }}
                                    className="luxury-related-card"
                                    onClick={() =>
                                        navigate(
                                            `/materials/docs/${related.id}`
                                        )
                                    }>
                                    <div
                                        className="luxury-related-image"
                                        style={{
                                            backgroundImage: `url(${related.image})`,
                                        }}>
                                        <div className="luxury-related-overlay">
                                            <span className="luxury-related-price">
                                                {related.price}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="luxury-related-info">
                                        <h3>{related.name}</h3>
                                        <p>
                                            {related.description.substring(
                                                0,
                                                100
                                            )}
                                            ...
                                        </p>
                                        <button className="luxury-view-button">
                                            View Details
                                            <svg
                                                width="16"
                                                height="16"
                                                viewBox="0 0 24 24"
                                                fill="none">
                                                <path
                                                    d="M5 12H19"
                                                    stroke="#8ec921"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M12 5L19 12L12 19"
                                                    stroke="#8ec921"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    ) : (
                        <div className="luxury-no-related">
                            <p>
                                No other materials currently available in this
                                category
                            </p>
                        </div>
                    )}
                </motion.section>
            </div>
        </div>
    );
};

export default MaterialDocPage;
