import { motion } from "framer-motion";

function ContactPage() {
  return (
    <div
      className="page-wrapper"
      style={{
        background: "#FF8911",
        height: "100vh",
        width: "100vw",
        overflow: "hidden",
      }}
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
export default ContactPage;
