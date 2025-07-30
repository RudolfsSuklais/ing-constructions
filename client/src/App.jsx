import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import Home from "./Pages/Home.jsx";
import Footer from "./components/Footer.jsx";
import Materials from "./Pages/Materials.jsx";
import About from "./Pages/About.jsx";
import MaterialDocPage from "./Pages/MaterialDocPage.jsx";

function App() {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/materials" element={<Materials />} />
                <Route path="/about" element={<About />} />
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
