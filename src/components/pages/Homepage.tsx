import { motion } from "framer-motion";

function Homepage() {
  return (
    // <div
    //   className="page-wrapper"
    //   style={{
    //     background: "#ffffff",
    //     height: "100vh",
    //     width: "100vw",
    //     overflow: "hidden",
    //   }}
    // >
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
        className="home"
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        exit={{ x: window.innerWidth, transition: { duration: 1 } }}
      >
        <div className="home-content flex justify-center items-center h-full">
          <div className="Circle w-128 h-128 rounded-full border-4 border-gray-400 flex justify-center items-center">
            <div className="Mini flex justify-center  w-40 h-40 rounded-full bg-gray-500"></div>
          </div>
        </div>

        {/* Reel Button */}
        <button className="reel-button absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-transparent border-none cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="black"
            className="w-6 h-6"
          >
            <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm1.5 17.25V6.75l6 5.25-6 5.25z" />
          </svg>
        </button>
      </motion.div>
    </div>
  );
}

export default Homepage;
