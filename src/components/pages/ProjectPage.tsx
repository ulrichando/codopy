import { motion } from "framer-motion";

function ProjectPage() {
  return (
    <div
      className="page-wrapper"
      style={{ background: "#211C6A", height: "100vh", width: "100vw" }}
    >
      <motion.div
        className="home"
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        exit={{ x: window.innerWidth, transition: { duration: 1 } }}
      >
        <div className="home-content">
          <h1>Homepage</h1>
        </div>
      </motion.div>
    </div>
  );
}
export default ProjectPage;
