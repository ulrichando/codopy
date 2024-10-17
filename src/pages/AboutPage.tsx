import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import "../components/draggablescroll.css";

import img1 from "../assets/images/img1.jpg";
import img2 from "../assets/images/img2.jpg";
import img3 from "../assets/images/img3.jpg";
import img4 from "../assets/images/img4.jpg";
import img5 from "../assets/images/img5.jpg";
import img6 from "../assets/images/img6.jpg";

const [showPopup, setShowPopup] = useState(false);

const togglePopup = () => {
  setShowPopup(!showPopup);
};

function AboutPage() {
  // Draggable scroll
  const [isDown, setIsDown] = useState(false); // Set isDown to false
  const [startY, setStartY] = useState(0); // Set startY to 0
  const [scrollTopState, setScrollTopState] = useState<number | null>(0); // Set scrollTopState to 0
  const [mouseMoved, setStateMouseMoved] = useState(0); // Set mouseMoved to false

  const itemsContainer = useRef<HTMLDivElement | null>(null); // Select the ItemsContainer

  function handleMouseDown(e: React.MouseEvent | React.TouchEvent) {
    setIsDown(true);
    if (itemsContainer.current) {
      if ("touches" in e) {
        setStartY(e.touches[0].pageY - itemsContainer.current.offsetTop);
      } else {
        setStartY(e.pageY - itemsContainer.current.offsetTop);
      }
      setScrollTopState(itemsContainer.current.scrollTop);
      setStateMouseMoved(0);
    }
  }

  function handleMouseMove(e: React.MouseEvent | React.TouchEvent) {
    if (!isDown || !itemsContainer.current) {
      return;
    }

    const currentMousePositionInsideContainer =
      "touches" in e
        ? e.touches[0].pageY - itemsContainer.current.offsetTop
        : e.pageY - itemsContainer.current.offsetTop;

    setStateMouseMoved(currentMousePositionInsideContainer - startY);
  }

  useEffect(() => {
    if (itemsContainer.current && scrollTopState !== null) {
      itemsContainer.current.scrollTop = scrollTopState - mouseMoved;
    }
  }, [mouseMoved, scrollTopState]);

  const menu = [
    {
      name: "FRONTEND",
      href: "#frontend",
    },
    {
      name: "BACKEND",
      href: "#backend",
    },
    {
      name: "DATABASE",
      href: "#database",
    },
    {
      name: "TOOLS",
      href: "#tools",
    },
  ];

  return (
    <section
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
        initial={{ x: -window.innerWidth, width: "100vw" }} // Initial state with position set to off-screen left
        animate={{ x: 0, width: "100vw" }} // Final state with position set to on-screen
        exit={{ x: -window.innerWidth, transition: { duration: 1 } }}
        transition={{ duration: 1 }} // Transition time set to 1 second
      >
        {/* Container */}
        <div className="relative w-screen h-screen">
          <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
            {/* Circle */}
            <div className="Circle w-160 h-160 rounded-full border-4 bg-black flex justify-center items-center">
              <div className=" flex justify-center items-center Mini w-60 h-60 rounded-full bg-gray-500">
                <div className="rounded-full bg-gray-200 h-40 w-40"></div>
              </div>
            </div>

            {/* End Circle */}
            {/* Circle menu */}
            <div className="absolute flex flex-col space-y-2 top-1/3 right-full translate-x-0">
              {menu.map((item) => (
                <div key={item.href} className="flex flex-col">
                  <a
                    href={`#${item.name}`}
                    className="text-1xl font-medium px-4 py-2"
                  >
                    {item.name}
                  </a>
                </div>
              ))}
            </div>
            {/* End of Circle menu */}
          </div>

          {/* Text Hello */}
          <div className="absolute right-1/3 top-1/4 transform -translate-y-full translate-x-1/2">
            <div className="top-20 left-10">
              <h1 className="text-8xl font-bold">About.</h1>
              <p className="mt-4 text-xl font-medium">
                Welcome to <br />
                my portfolio, <br />
                explore and discover
              </p>
            </div>
          </div>
          {/* End of Text Hello */}

          {/* Project menu */}
          <div
            className="MainContainer absolute right-[25%]"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={() => setIsDown(false)}
            onMouseLeave={() => setIsDown(false)}
            onTouchStart={handleMouseDown}
            onTouchMove={handleMouseMove}
            onTouchEnd={() => setIsDown(false)}
          >
            <div
              ref={itemsContainer}
              className="ItemsContainer fixed left-[25%] top-1/2 transform -translate-x-1/2 -translate-y-1/2  "
            >
              {/* beginning of container  */}
              <div className="table ">
                <div className="item">
                  {/* Increased row height */}
                  <div className="flex h-[200px] w-[600px] border  overflow-hidden shadow-md">
                    <div className="w-[300px] h-[200px] flex items-end justify-between pb-4 bg-gray-100 px-4">
                      <p className="text-left text-lg" onClick={togglePopup}>
                        FRONTEND
                      </p>

                      <p className="text-right text-lg">1</p>
                    </div>
                    <div className="w-[300px] h-[200px]">
                      <img
                        src={img1}
                        alt="Card Image"
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>

                  <div className="flex h-[200px] w-[600px] border  overflow-hidden shadow-md">
                    <div className="w-[300px] h-[200px]">
                      <img
                        src={img2}
                        alt="Card Image"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="w-[300px] h-[200px] flex items-end justify-between pb-4 bg-gray-100 px-4">
                      <p className="text-left text-lg">BACKEND</p>
                      <p className="text-right text-lg">2</p>
                    </div>
                  </div>

                  <div className="flex h-[200px] w-[600px] border  overflow-hidden shadow-md">
                    <div className="w-[300px] h-[200px] flex items-end justify-between pb-4 bg-gray-100 px-4">
                      <p className="text-left text-lg">DATABASE</p>
                      <p className="text-right text-lg">3</p>
                    </div>
                    <div className="w-[300px] h-[200px]">
                      <img
                        src={img3}
                        alt="Card Image"
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>

                  <div className="flex h-[200px] w-[600px] border  overflow-hidden shadow-md">
                    <div className="w-[300px] h-[200px]">
                      <img
                        src={img4}
                        alt="Card Image"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="w-[300px] h-[200px] flex items-end justify-between pb-4 bg-gray-100 px-4">
                      <p className="text-left text-lg">TOOLS</p>
                      <p className="text-right text-lg">4</p>
                    </div>
                  </div>

                  <div className="flex h-[200px] w-[600px] border  overflow-hidden shadow-md">
                    <div className="w-[300px] h-[200px] flex items-end justify-between pb-4 bg-gray-100 px-4">
                      <p className="text-left text-lg">Left Text</p>
                      <p className="text-right text-lg">Right Text</p>
                    </div>
                    <div className="w-[300px] h-[200px]">
                      <img
                        src={img5}
                        alt="Card Image"
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>

                  <div className="flex h-[200px] w-[600px] border  overflow-hidden shadow-md">
                    <div className="w-[300px] h-[200px]">
                      <img
                        src={img6}
                        alt="Card Image"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="w-[300px] h-[200px] flex items-end justify-between pb-4 bg-gray-100 px-4">
                      <p className="text-left text-lg">Left Text</p>
                      <p className="text-right text-lg">Right Text</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* End of container */}
            </div>
          </div>
          {/* Project menu End */}
        </div>
      </motion.div>
    </section>
  );
}

export default AboutPage;
