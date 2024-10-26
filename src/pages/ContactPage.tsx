import { motion } from "framer-motion";
import ContactForm from "../components/form/ContactForm";

function ContactPage() {
  return (
    <div
      className="page-wrapper"
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      <motion.div
        className="home"
        initial={{ x: -window.innerWidth, width: "100vw" }} // Initial state with position set to off-screen left
        animate={{ x: 0, width: "100vw" }} // Final state with position set to on-screen
        exit={{ x: -window.innerWidth, transition: { duration: 1 } }}
        transition={{ duration: 1 }} // Transition time set to 1 second
      >
        <div className="relative w-screen h-screen flex flex-col justify-between">
          {/* Text Hello */}
          <div className="absolute top-20 left-20 pt-10">
            <h1 className="text-8xl font-bold">Get In Touch.</h1>
            <p className="mt-4 text-xl font-medium">
              Send your feedback <br />
              ulrichando007@gmail.com, <br />
            </p>
          </div>

          {/* End of Text Hello */}

          {/* Contact Form */}
          <div className="absolute left-1/2 top-20 transform -translate-x-1/2 translate-y-1/2 pt-10">
            <ContactForm />
          </div>
        </div>
        {/* End of Contact Form */}
      </motion.div>
    </div>
  );
}
export default ContactPage;
