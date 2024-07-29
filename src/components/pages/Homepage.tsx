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
    // ></div>
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
        {/* container */}
        <div className="relative w-screen h-screen flex items-center justify-center">
          {/* text  */}
          {/* <div className=" absolute border border-black items-center  top-1/3 left-1/3 transform -translate-x-1/2 -translate-y-1/4"> */}
          <div className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-2/4 p-4 ">
            <div className=" top-20 left-10">
              <h1 className="text-7xl font-bold">Hello.</h1>
              <p className="mt-4 text-xl">
                Welcome to <br />
                my portfolio, <br />
                explore and discover
              </p>
            </div>
          </div>

          {/* Circle */}
          {/* <div className="absolute border border-black items-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"> */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4">
            <div className="Circle w-128 h-128 rounded-full border-4 border-gray-400 flex justify-center items-center">
              <div className="Mini flex justify-center  w-40 h-40 rounded-full bg-gray-500"></div>
            </div>
          </div>

          {/* Reel Button */}
          {/* <div className="absolute border border-black items-center right-40 top-2/3 left-3/4 transform -translate-x-2/4 -translate-y-1/2 "> */}
          <div className="absolute bottom-1/4 p-4 right-40 left-3/4 transform -translate-x-1/2 ">
            <button className="reel-button bg-transparent border-none cursor-pointer flex items-center">
              <div className="rounded-full border-4 border-black w-12 h-12 flex items-center justify-center mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="black"
                  className="w-6 h-6"
                >
                  <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm1.5 17.25V6.75l6 5.25-6 5.25z" />
                </svg>
              </div>
              <span className="text-xl font-medium">Reel</span>
            </button>
          </div>
        </div>
        {/* End of container  */}
      </motion.div>
    </div>
  );
}

export default Homepage;
