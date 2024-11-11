import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "../pages/Homepage";
import WorkPage from "../pages/WorkPage";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";

const AnimatedRoutes: React.FC = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/work" element={<WorkPage />} />
    <Route path="/about" element={<AboutPage />} />
    <Route path="/contact" element={<ContactPage />} />
    <Route path="*" element={<Navigate to="/" />} />{" "}
    {/* Redirect unknown paths */}
  </Routes>
);

export default AnimatedRoutes;
