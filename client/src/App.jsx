import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import Home from "./Pages/Home.jsx";
import Footer from "./components/Footer.jsx";
import Materials from "./Pages/Materials.jsx";
import About from "./Pages/About.jsx";
import MaterialDocPage from "./Pages/MaterialDocPage.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import Contact from "./Pages/Contact.jsx";
import BackToTop from "./components/BackToTop.jsx";
import Aluminium from "./MaterialsPage/Aluminium.jsx";
import Partners from "./Pages/Partners.jsx";
import ProjectsPage from "./Pages/ProjectsPage.jsx";
import PrivacyPolicy from "./Pages/PrivacyPolicy.jsx";
import TermsOfService from "./Pages/TermsOfService.jsx";
import ModularHousing from "./Pages/ModularHousing.jsx";

function App() {
    return (
        <Router>
            <ScrollToTop />
            <BackToTop />
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms-of-service" element={<TermsOfService />} />
                <Route path="/materials/aluminium" element={<Aluminium />} />
                <Route path="/materials" element={<Materials />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/partners" element={<Partners />} />
                <Route path="/modular-housing" element={<ModularHousing />} />
                <Route
                    path="/materials/docs/:materialId"
                    element={<MaterialDocPage />}
                />
                {/* Add more routes here as needed */}
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
