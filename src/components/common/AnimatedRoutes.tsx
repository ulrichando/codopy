import App from "../../App";
import AboutPage from "../pages/AboutPage";
import WorkPage from "../pages/WorkPage";
import ContactPage from "../pages/ContactPage";
import ProjectPage from "../pages/ProjectPage";
import { Route, Routes, useLocation } from "react-router-dom";

function AnimatedRoutes() {
  const location = useLocation();
  return (
    // <AnimatePresence>
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/work" element={<WorkPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/projecct" element={<ProjectPage />} />
      {/* </AnimatePresence> */}
    </Routes>
  );
}

export default AnimatedRoutes;
