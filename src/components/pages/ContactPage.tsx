import { motion } from "framer-motion";

function ContactPage() {
  return (
    <div
      className="page-wrapper"
      style={{
        background: "#ffffff",
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
        <div className="relative w-screen h-screen">
          <div className="fixed p-20">
            <div className="top-20 left-10">
              <h1 className="text-7xl font-bold">Get In Touch.</h1>
              <p className="mt-4 text-xl font-medium">
                Welcome to <br />
                my portfolio, <br />
                explore and discover
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
export default ContactPage;
