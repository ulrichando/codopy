import Homepage from "../pages/Homepage";
import AboutPage from "../pages/AboutPage";
import WorkPage from "../pages/WorkPage";
import ContactPage from "../pages/ContactPage";
import { Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

function AnimatedRoutes() {
  return (
    <AnimatePresence>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
