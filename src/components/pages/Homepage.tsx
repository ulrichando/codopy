import { motion } from "framer-motion";
import profile from "/profile1.svg";
import "../../App.css";

function Homepage() {
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
        {/* container */}
        <div className="relative w-screen h-screen">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4">
            {/* Text Hello */}
            <div className="absolute top-1/3 right-full transform  translate-x-2">
              <div className=" top-20 left-10">
                <h1 className="text-8xl font-bold ">Hello.</h1>
                <p className="mt-4 text-xl font-medium">
                  Welcome to <br />
                  my portfolio, <br />
                  explore and discover
                </p>
              </div>
            </div>
            {/* End of Text Hello */}

            {/* Circle */}
            <div className="Circle w-160 h-160 rounded-full border-4 bg-black flex justify-center items-center overflow-auto">
              {/* <div className="Mini flex justify-center  w-60 h-60 rounded-full bg-gray-500"> */}
              <img
                src={profile}
                alt="mini"
                width={600}
                height={600}
                className="profile  "
              />
              {/* </div> */}
            </div>

            {/* Circle menu */}
            <div className="absolute flex flex-col space-y-2 top-1/3 left-full transform  translate-x-2 ">
              <a
                href="https://example.com/page1"
                className=" text-1xl font-medium px-4 py-2 "
                target="_blank"
                rel="noopener noreferrer"
              >
                APP
              </a>
              <a
                href="https://example.com/page2"
                className=" text-1xl font-medium px-4 py-2 "
                target="_blank"
                rel="noopener noreferrer"
              >
                WEB
              </a>
              <a
                href="https://example.com/page3"
                className=" text-1xl font-medium px-4 py-2 "
                target="_blank"
                rel="noopener noreferrer"
              >
                MISC
              </a>
            </div>
            {/* End of Circle menu */}
            {/* End of Circle  */}

            {/* Reel button  */}
            <div className="absolute bottom-1/4 left-full  transform  translate-x-5 translate-y-20 ">
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
          {/* End of Reel button  */}
          {/* Container two  */}

          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2">
            <div className="flex justify-center items-center rounded-full bg-black h-112 w-112">
              <div className="flex justify-center items-center rounded-full bg-gray-600 h-38 w-38">
                <div className="flex justify-center items-center rounded-full bg-gray-600 h-32 w-32">
                  <div className="rounded-full bg-gray-200 h-16 w-16"></div>
                </div>
              </div>
            </div>
          </div>

          {/* End of Contianer two  */}

          {/* Container Three */}

          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2">
            <div className="flex justify-center items-center rounded-full bg-black h-112 w-112">
              <div className="profile flex justify-center items-center rounded-full bg-gray-600 h-38 w-38">
                <div className="flex justify-center items-center rounded-full bg-gray-600 h-32 w-32">
                  <div className="rounded-full bg-gray-200 h-16 w-16"></div>
                </div>
              </div>
            </div>
          </div>

          {/*End of Container Three */}
        </div>
        {/* End of container  */}
      </motion.div>
    </div>
  );
}

export default Homepage;
