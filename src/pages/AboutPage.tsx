// import { motion } from "framer-motion";
// import { useEffect, useRef, useState } from "react";
// import "../components/draggablescroll.css";
// import { NavLink } from "react-router-dom";
// import { Circle } from "../components/ui/CircleComponent";

// import img6 from "../assets/images/img6.jpg";
// import img7 from "../assets/images/img7.jpg";
// import img8 from "../assets/images/img8.jpg";
// import img9 from "../assets/images/img9.jpg";
// import img10 from "../assets/images/img10.jpg";
// import img11 from "../assets/images/img11.jpg";

// function AboutPage() {
//   // Draggable scroll
//   const [isDown, setIsDown] = useState(false); // Set isDown to false
//   const [startY, setStartY] = useState(0); // Set startY to 0
//   const [scrollTopState, setScrollTopState] = useState<number | null>(0); // Set scrollTopState to 0
//   const [mouseMoved, setStateMouseMoved] = useState(0); // Set mouseMoved to false
//   const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

//   const itemsContainer = useRef<HTMLDivElement | null>(null); // Select the ItemsContainer

//   function handleMouseDown(e: React.MouseEvent | React.TouchEvent) {
//     setIsDown(true);
//     if (itemsContainer.current) {
//       if ("touches" in e) {
//         setStartY(e.touches[0].pageY - itemsContainer.current.offsetTop);
//       } else {
//         setStartY(e.pageY - itemsContainer.current.offsetTop);
//       }
//       setScrollTopState(itemsContainer.current.scrollTop);
//       setStateMouseMoved(0);
//     }
//   }

//   function handleMouseMove(e: React.MouseEvent | React.TouchEvent) {
//     if (!isDown || !itemsContainer.current) {
//       return;
//     }

//     const currentMousePositionInsideContainer =
//       "touches" in e
//         ? e.touches[0].pageY - itemsContainer.current.offsetTop
//         : e.pageY - itemsContainer.current.offsetTop;

//     setStateMouseMoved(currentMousePositionInsideContainer - startY);
//   }

//   useEffect(() => {
//     if (itemsContainer.current && scrollTopState !== null) {
//       itemsContainer.current.scrollTop = scrollTopState - mouseMoved;
//     }
//   }, [mouseMoved, scrollTopState]);

//   const menu = [
//     { name: "Frontend", href: "#frontend" },
//     { name: "Backend", href: "#backend" },
//     { name: "Database", href: "#database" },
//     { name: "Tools", href: "#tools" },
//     { name: "Test", href: "#tools" },
//     { name: "Test", href: "#tools" },
//   ];

//   const navHome = [{ name: "Hello", to: "/" }];

//   return (
//     // <div
//     //   className="page-wrapper"
//     //   style={{
//     //     height: "100vh",
//     //     width: "100vw",
//     //     display: "flex",
//     //     justifyContent: "center",
//     //     alignItems: "center",
//     //     overflow: "hidden",
//     //   }}
//     // >
//     <div className="relative h-screen w-screen overflow-hidden">
//       <motion.div
//         className="home"
//         initial={{ x: -window.innerWidth, width: "100vw" }} // Initial state with position set to off-screen left
//         animate={{ x: 0, width: "100vw" }} // Final state with position set to on-screen
//         exit={{ x: -window.innerWidth, transition: { duration: 1 } }}
//         transition={{ duration: 1 }} // Transition time set to 1 second
//       >
//         {/* Container */}
//         <div className="relative w-screen h-screen">
//           <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
//             {/* Circle */}
//             {navHome.map((item) => (
//               <NavLink key={item.to} to={item.to}>
//                 <Circle
//                   radius={350}
//                   className="circle-outer transition-all duration-300"
//                 >
//                   <Circle radius={200} className="circle-middle">
//                     <Circle radius={180} className="circle-inner">
//                       <Circle radius={100} className="circle-inner-1"></Circle>
//                     </Circle>
//                   </Circle>
//                 </Circle>
//               </NavLink>
//             ))}

//             {/* End Circle */}
//             {/* Circle menu */}
//             <div className="absolute flex flex-col space-y-2 top-1/3 right-full translate-x-0">
//               {menu.map((item) => (
//                 <div key={item.href} className="flex flex-col">
//                   <a
//                     href={`#${item.name}`}
//                     className="text-1xl font-medium px-4 py-2"
//                   >
//                     {item.name}
//                   </a>
//                 </div>
//               ))}
//             </div>
//             {/* End of Circle menu */}
//           </div>

//           {/* Text Hello */}
//           <div className="absolute right-1/3 top-1/4 transform -translate-y-full translate-x-1/2">
//             <div className="top-20 left-10">
//               <h1 className="text-8xl font-bold">About.</h1>
//               <div className="flex">
//                 <div className="line h-2 w-10 m-6"></div>
//                 <p className="mt-4 text-1xl font-medium">
//                   All about me <br />
//                   and geek stuff <br />
//                   explore and discover
//                 </p>
//               </div>
//             </div>
//           </div>
//           {/* End of Text Hello */}

//           {/* Project menu */}
//           <div
//             className={`MainContainer absolute ${
//               isMobile ? "bottom-4 left-1/2 -translate-x-1/2" : "right-[25%]"
//             }`}
//             onMouseDown={handleMouseDown}
//             onMouseMove={handleMouseMove}
//             onMouseUp={() => setIsDown(false)}
//             onMouseLeave={() => setIsDown(false)}
//             onTouchStart={handleMouseDown}
//             onTouchMove={handleMouseMove}
//             onTouchEnd={() => setIsDown(false)}
//           >
//             <div
//               ref={itemsContainer}
//               className={`ItemsContainer ${
//                 isMobile
//                   ? "relative max-h-[40vh] overflow-y-auto"
//                   : "fixed left-[25%] top-1/2 transform -translate-x-1/2 -translate-y-1/2"
//               }`}
//             >
//               <div className="table">
//                 <div className="item">
//                   {[
//                     { img: img6, title: "Frontend", num: "1" },
//                     { img: img7, title: "Backend", num: "2" },
//                     { img: img8, title: "Database", num: "3" },
//                     { img: img9, title: "Tools", num: "4" },
//                     { img: img10, title: "Test", num: "5" },
//                     { img: img11, title: "Test", num: "6" },
//                   ].map((item, index) => (
//                     <div
//                       key={index}
//                       className="flex h-[150px] md:h-[200px] w-[300px] md:w-[600px] border overflow-hidden shadow-md"
//                     >
//                       {index % 2 === 0 ? (
//                         <>
//                           <div className="scroller w-[150px] md:w-[300px] h-full flex items-end pb-4 px-4">
//                             <div className="flex justify-between items-baseline w-full">
//                               <p className="scroller-1 text-left text-sm md:text-lg">
//                                 {item.title}
//                               </p>
//                               <p className="scroller-1 text-right text-4xl md:text-8xl ml-2">
//                                 {item.num}
//                               </p>
//                             </div>
//                           </div>
//                           <div className="w-[150px] md:w-[300px] h-full">
//                             <img
//                               src={item.img}
//                               alt="Card Image"
//                               className="h-full w-full object-cover"
//                             />
//                           </div>
//                         </>
//                       ) : (
//                         <>
//                           <div className="w-[150px] md:w-[300px] h-full">
//                             <img
//                               src={item.img}
//                               alt="Card Image"
//                               className="h-full w-full object-cover"
//                             />
//                           </div>
//                           <div className="scroller w-[150px] md:w-[300px] h-full flex items-end pb-4 px-4">
//                             <div className="flex justify-between items-baseline w-full">
//                               <p className="scroller-1 text-left text-sm md:text-lg">
//                                 {item.title}
//                               </p>
//                               <p className="scroller-1 text-right text-4xl md:text-8xl ml-2">
//                                 {item.num}
//                               </p>
//                             </div>
//                           </div>
//                         </>
//                       )}
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </motion.div>
//     </div>
//   );
// }

// export default AboutPage;

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
  const [isDown, setIsDown] = useState(false);
  const [startY, setStartY] = useState(0);
  const [scrollTopState, setScrollTopState] = useState<number | null>(0);
  const [mouseMoved, setMouseMoved] = useState(0);

  // Track if the device is mobile based on window width
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const itemsContainer = useRef<HTMLDivElement | null>(null);

  // Resize event to update isMobile state
  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 768);
    }

    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function handleMouseDown(e: React.MouseEvent | React.TouchEvent) {
    setIsDown(true);
    if (itemsContainer.current) {
      const pageY = "touches" in e ? e.touches[0].pageY : e.pageY;
      setStartY(pageY - itemsContainer.current.offsetTop);
      setScrollTopState(itemsContainer.current.scrollTop);
      setMouseMoved(0);
    }
  }

  function handleMouseMove(e: React.MouseEvent | React.TouchEvent) {
    if (!isDown || !itemsContainer.current) return;

    const currentY = "touches" in e ? e.touches[0].pageY : e.pageY;
    const currentMousePositionInsideContainer =
      currentY - itemsContainer.current.offsetTop;

    setMouseMoved(currentMousePositionInsideContainer - startY);
  }

  function handleMouseUp() {
    setIsDown(false);
  }

  useEffect(() => {
    if (itemsContainer.current && scrollTopState !== null) {
      itemsContainer.current.scrollTop = scrollTopState - mouseMoved;
    }
  }, [mouseMoved, scrollTopState]);

  const menu = [
    { name: "Frontend", href: "#frontend" },
    { name: "Backend", href: "#backend" },
    { name: "Database", href: "#database" },
    { name: "Tools", href: "#tools" },
    { name: "Test", href: "#tools" },
    { name: "Test", href: "#tools" },
  ];

  const navHome = [{ name: "Hello", to: "/" }];

  return (
    <div
      className="relative h-screen w-screen overflow-hidden"
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchEnd={handleMouseUp}
    >
      <motion.div
        className="home"
        initial={{ x: -window.innerWidth, width: "100vw" }}
        animate={{ x: 0, width: "100vw" }}
        exit={{ x: -window.innerWidth, transition: { duration: 1 } }}
        transition={{ duration: 1 }}
      >
        <div className="relative w-screen h-screen">
          <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
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

            <div className="absolute flex flex-col space-y-2 top-1/3 right-full translate-x-0">
              {menu.map((item) => (
                <div key={item.href} className="flex flex-col">
                  <a
                    href={item.href}
                    className="text-1xl font-medium px-4 py-2"
                  >
                    {item.name}
                  </a>
                </div>
              ))}
            </div>
          </div>

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

          <div
            className={`MainContainer absolute ${
              isMobile ? "bottom-4 left-1/2 -translate-x-1/2" : "right-[25%]"
            }`}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onTouchStart={handleMouseDown}
            onTouchMove={handleMouseMove}
          >
            <div
              ref={itemsContainer}
              className={`ItemsContainer ${
                isMobile
                  ? "relative max-h-[40vh] overflow-y-auto"
                  : "fixed left-[25%] top-1/2 transform -translate-x-1/2 -translate-y-1/2"
              }`}
            >
              <div className="table">
                <div className="item">
                  {[
                    { img: img6, title: "Frontend", num: "1" },
                    { img: img7, title: "Backend", num: "2" },
                    { img: img8, title: "Database", num: "3" },
                    { img: img9, title: "Tools", num: "4" },
                    { img: img10, title: "Test", num: "5" },
                    { img: img11, title: "Test", num: "6" },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex h-[150px] md:h-[200px] w-[300px] md:w-[600px] border overflow-hidden shadow-md"
                    >
                      {index % 2 === 0 ? (
                        <>
                          <div className="scroller w-[150px] md:w-[300px] h-full flex items-end pb-4 px-4">
                            <div className="flex justify-between items-baseline w-full">
                              <p className="scroller-1 text-left text-sm md:text-lg">
                                {item.title}
                              </p>
                              <p className="scroller-1 text-right text-4xl md:text-8xl ml-2">
                                {item.num}
                              </p>
                            </div>
                          </div>
                          <div className="w-[150px] md:w-[300px] h-full">
                            <img
                              src={item.img}
                              alt="Card Image"
                              className="h-full w-full object-cover"
                            />
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="w-[150px] md:w-[300px] h-full">
                            <img
                              src={item.img}
                              alt="Card Image"
                              className="h-full w-full object-cover"
                            />
                          </div>
                          <div className="scroller w-[150px] md:w-[300px] h-full flex items-end pb-4 px-4">
                            <div className="flex justify-between items-baseline w-full">
                              <p className="scroller-1 text-left text-sm md:text-lg">
                                {item.title}
                              </p>
                              <p className="scroller-1 text-right text-4xl md:text-8xl ml-2">
                                {item.num}
                              </p>
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default AboutPage;
