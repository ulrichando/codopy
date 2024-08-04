import { motion } from "framer-motion";

function AboutPage() {
  return (
    <div
      className="page-wrapper"
      style={{
        background: "#ffffff",
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      <motion.div
        initial={{ x: "100vw" }}
        animate={{ x: 1 }}
        transition={{ duration: 1, yoyo: Infinity }}
      ></motion.div>
    </div>
  );
}

export default AboutPage;
