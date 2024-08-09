import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import "../../styles/draggablescroll.css";

const WorkPage = () => {
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
        initial={{ x: window.innerWidth, width: "100vw" }} // Initial state with position set to off-screen right
        animate={{ x: 0, width: "100vw" }} // Final state with position set to on-screen
        exit={{ x: window.innerWidth, transition: { duration: 1 } }} // Exit state with position set to off-screen left
        transition={{ duration: 1 }} // Transition time set to 1 second
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
          <div className="fixed left-1/3 top-1/4 transform -translate-y-full -translate-x-1/2">
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
          {/* /* Project menu */}

          <div
            className="MainContainer"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={() => setIsDown(false)}
            onMouseLeave={() => setIsDown(false)}
            onTouchStart={handleMouseDown}
            onTouchMove={handleMouseMove}
            onTouchEnd={() => setIsDown(false)}
          >
            <div ref={itemsContainer} className="ItemsContainer">
              {/* Adjusted width and height */}
              <div className="table border-collapse border-1 border-black">
                <div className="item">
                  {/* Increased row height */}
                  <div className="item2  ">1</div>
                  <div className="item2  ">2</div>
                </div>
                <div className="item ">
                  {/* Increased row height */}
                  <div className="item2 ">3</div>
                  <div className="item2 ">4</div>
                </div>
                <div className="item ">
                  {/* Increased row height */}
                  <div className="item2 ">5</div>
                  <div className="item2 ">6</div>
                </div>
                <div className="item ">
                  {/* Increased row height */}
                  <div className="item2 ">7</div>
                  <div className="item2 ">8</div>
                </div>
                <div className="item ">
                  {/* Increased row height */}
                  <div className="item2 ">9</div>
                  <div className="item2 ">10</div>
                </div>
                <div className="item ">
                  {/* Increased row height */}
                  <div className="item2 ">11</div>
                  <div className="item2 ">12</div>
                </div>
                <div className="item ">
                  {/* Increased row height */}
                  <div className="item2  ">13</div>
                  <div className="item2  ">14</div>
                </div>
                <div className="item ">
                  {/* Increased row height */}
                  <div className="item2 ">15</div>
                  <div className="item2 ">16</div>
                </div>
              </div>
            </div>
          </div>
          {/* Project menu End */}
        </div>
      </motion.div>
    </div>
  );
};

export default WorkPage;
