import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import "../components/draggablescroll.css";
import { NavLink } from "react-router-dom";
import { Circle } from "../components/ui/CircleComponent";

import img6 from "../assets/images/img6.jpg";
import img7 from "../assets/images/img7.jpg";
import img8 from "../assets/images/img8.jpg";
import img9 from "../assets/images/img9.jpg";
import img10 from "../assets/images/img10.jpg";
import img11 from "../assets/images/img11.jpg";

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
      name: "Frontend",
      href: "#frontend",
    },
    {
      name: "Backend",
      href: "#backend",
    },
    {
      name: "Database",
      href: "#database",
    },
    {
      name: "Tools",
      href: "#tools",
    },
    {
      name: "Test",
      href: "#tools",
    },
    {
      name: "Test",
      href: "#tools",
    },
  ];
  const navHome = [{ name: "Hello", to: "/" }];
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
        {/* Container */}
        <div className="relative w-screen h-screen">
          <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
            {/* Circle */}
            {navHome.map((item) => (
              <NavLink key={item.to} to={item.to}>
                <Circle
                  radius={350}
                  className="circle-outer transition-all duration-300"
                >
                  <Circle radius={200} className="circle-middle">
                    <Circle radius={180} className="circle-inner">
                      <Circle radius={100} className="circle-inner-1"></Circle>
                    </Circle>
                  </Circle>
                </Circle>
              </NavLink>
            ))}

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
              <div className="flex">
                <div className="line h-2 w-10 m-6"></div>
                <p className="mt-4 text-1xl font-medium">
                  All about me <br />
                  and geek stuff <br />
                  explore and discover
                </p>
              </div>
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
                    <div className="scroller w-[300px] h-[200px] flex items-end justify-between pb-4  px-4">
                      <p className="scroller-1 text-left text-lg">Frontend</p>

                      <p className="scroller-1 text-right text-8xl">1</p>
                    </div>
                    <div className="w-[300px] h-[200px]">
                      <img
                        src={img6}
                        alt="Card Image"
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>

                  <div className="flex h-[200px] w-[600px] border  overflow-hidden shadow-md">
                    <div className="w-[300px] h-[200px]">
                      <img
                        src={img7}
                        alt="Card Image"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className=" scroller w-[300px] h-[200px] flex items-end justify-between pb-4  px-4">
                      <p className="scroller-1 text-left text-lg">Backend</p>
                      <p className="scroller-1 text-right text-8xl">2</p>
                    </div>
                  </div>

                  <div className="flex h-[200px] w-[600px] border  overflow-hidden shadow-md">
                    <div className="scroller w-[300px] h-[200px] flex items-end justify-between pb-4  px-4">
                      <p className="scroller-1 text-left text-lg">Database</p>
                      <p className="scroller-1 text-right text-8xl">3</p>
                    </div>
                    <div className="w-[300px] h-[200px]">
                      <img
                        src={img8}
                        alt="Card Image"
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>

                  <div className="flex h-[200px] w-[600px] border  overflow-hidden shadow-md">
                    <div className="w-[300px] h-[200px]">
                      <img
                        src={img9}
                        alt="Card Image"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="scroller w-[300px] h-[200px] flex items-end justify-between pb-4  px-4">
                      <p className="scroller-1 text-left text-lg">Tools</p>
                      <p className="scroller-1 text-right text-8xl">4</p>
                    </div>
                  </div>

                  <div className="flex h-[200px] w-[600px] border  overflow-hidden shadow-md">
                    <div className="scroller w-[300px] h-[200px] flex items-end justify-between pb-4  px-4">
                      <p className="scroller-1 text-left text-lg">Test</p>
                      <p className="scroller-1 text-right text-8xl">5</p>
                    </div>
                    <div className="w-[300px] h-[200px]">
                      <img
                        src={img10}
                        alt="Card Image"
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>

                  <div className="flex h-[200px] w-[600px] border  overflow-hidden shadow-md">
                    <div className="w-[300px] h-[200px]">
                      <img
                        src={img11}
                        alt="Card Image"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="scroller w-[300px] h-[200px] flex items-end justify-between pb-4  px-4">
                      <p className="scroller-1 text-left text-lg">Test</p>
                      <p className="scroller-1 text-right text-8xl">6</p>
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
    </div>
  );
}

export default AboutPage;
