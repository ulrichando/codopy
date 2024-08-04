import { motion } from "framer-motion";

const WorkPage = () => {
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
        className="home"
        initial={{ width: 0 }}
        animate={{ width: "100vw" }}
        exit={{ x: window.innerWidth, transition: { duration: 1 } }}
      >
        {/* Container */}
        <div className="relative w-screen h-screen ">
          <div className="absolute top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2 p-2">
            {/* Circle */}
            <div className="Circle w-128 h-128 rounded-full border-4 bg-gray-800 flex justify-center items-center">
              <div className="Mini flex justify-center w-60 h-60 rounded-full bg-gray-500"></div>
            </div>
            {/* End Circle */}

            {/* Circle menu */}
            <div className="absolute flex flex-col space-y-2 top-1/3 left-full transform translate-x-0 font-med">
              <a
                href="https://example.com/page1"
                className="text-#000000 px-4 py-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                APP
              </a>
              <a
                href="https://example.com/page2"
                className="text-#000000 px-4 py-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                WEB
              </a>
              <a
                href="https://example.com/page3"
                className="text-#000000 px-4 py-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                MISC
              </a>
            </div>
            {/* End of Circle menu */}
          </div>

          {/* Text Hello */}
          <div className="absolute left-1/3 top-1/4 transform -translate-y-full -translate-x-1/2">
            <div className="top-20 left-10">
              <h1 className="text-7xl font-bold">Work.</h1>
              <p className="mt-4 text-xl font-medium">
                Welcome to <br />
                my portfolio, <br />
                explore and discover
              </p>
            </div>
          </div>
          {/* End of Text Hello */}

          {/* Project menu */}

          <div className="relative w-screen h-screen"></div>

          {/* Project menu End */}
        </div>
      </motion.div>
    </div>
  );
};

export default WorkPage;
