import { motion } from "framer-motion";
import ContactForm from "../common/ContactForm";

function ContactPage() {
  return (
    <div
      className="page-wrapper"
      style={{
        background: "#ffffffff",
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
        animate={{ x: 0 }}
        transition={{ duration: 0, yoyo: Infinity }}
      >
        {/* Contact Form */}
        <ContactForm />
      </motion.div>
    </div>
  );
}
export default ContactPage;
