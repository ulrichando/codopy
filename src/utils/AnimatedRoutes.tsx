import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "../pages/HomePage";
import WorkPage from "../pages/WorkPage";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import WorkPage from "../pages/WorkPage";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

const AnimatedRoutes: React.FC = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
