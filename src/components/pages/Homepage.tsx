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
          <div className="Circle w-96 h-96 rounded-full border-4 border-gray-400 flex justify-center items-center">
            <div className="Mini flex justify-center  w-40 h-40 rounded-full bg-gray-500"></div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Homepage;
