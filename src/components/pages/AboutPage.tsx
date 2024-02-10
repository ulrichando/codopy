import { motion } from "framer-motion";

function AboutPage() {
  return (
    <div
      className="page-wrapper"
      style={{ background: "#74E291", height: "100vh", width: "100vw" }}
    >
      <motion.div
        className="home"
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        exit={{ x: "100%", transition: { duration: 1 } }}
      >
        <div className="home-content">
          <h1>Homepage</h1>
        </div>
      </motion.div>
    </div>
  );
}
export default AboutPage;
