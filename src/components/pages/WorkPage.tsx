// import { motion } from "framer-motion";
// import { useEffect, useRef, useState } from "react";
// import "../../styles/draggablescroll.css";

// function WorkPage() {
//   // Draggable scroll
//   const [isDown, setIsDown] = useState(false); // Set isDown to false
//   const [startY, setStartY] = useState(0); // Set startY to 0
//   const [scrollTopState, setScrollTopState] = useState<number | null>(0); // Set scrollTopState to 0
//   const [mouseMoved, setStateMouseMoved] = useState(0); // Set mouseMoved to false

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

//   return (
//     <div
//       className="page-wrapper"
//       style={{
//         background: "#ffffff",
//         height: "100vh",
//         width: "100vw",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         overflow: "hidden",
//       }}
//     >
//       <motion.div
//         className="home"
//         initial={{ x: window.innerWidth, width: "100vw" }} // Initial state with position set to off-screen right
//         animate={{ x: 0, width: "100vw" }} // Final state with position set to on-screen
//         exit={{ x: window.innerWidth, transition: { duration: 1 } }} // Exit state with position set to off-screen left
//         transition={{ duration: 1 }} // Transition time set to 1 second
//       >
//         {/* Container */}
//         <div className="relative w-screen h-screen p-0 m-0 ">
//           <div className="absolute top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2 p-2">
//             {/* Circle */}
//             <div className="Circle w-128 h-128 rounded-full border-4 bg-gray-800 flex justify-center items-center">
//               <div className="Mini flex justify-center w-60 h-60 rounded-full bg-gray-500"></div>
//             </div>
//             {/* End Circle */}

//             {/* Circle menu */}
//             <div className="absolute flex flex-col space-y-2 top-1/3 left-full transform translate-x-0 font-med">
//               <a
//                 href="https://example.com/page1"
//                 className="text-#000000 px-4 py-2"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 APP
//               </a>
//               <a
//                 href="https://example.com/page2"
//                 className="text-#000000 px-4 py-2"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 WEB
//               </a>
//               <a
//                 href="https://example.com/page3"
//                 className="text-#000000 px-4 py-2"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 MISC
//               </a>
//             </div>
//             {/* End of Circle menu */}
//           </div>
//           {/* Text Hello */}
//           <div className="fixed left-1/3 top-1/4 transform -translate-y-full -translate-x-1/2">
//             <div className="top-20 left-10">
//               <h1 className="text-7xl font-bold">Work.</h1>
//               <p className="mt-4 text-xl font-medium">
//                 Welcome to <br />
//                 my portfolio, <br />
//                 explore and discover
//               </p>
//             </div>
//           </div>
//           {/* End of Text Hello */}
//           {/* /* Project menu */}

//           <div
//             className="MainContainer absolute right-[25%]"
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
//               className="ItemsContainer fixed right-[25%] top-1/2 transform translate-x-1/2 -translate-y-1/2  "
//             >
//               {/* beginning of container  */}
//               <div className="table border-collapse ">
//                 <div className="item">
//                   {/* Increased row height */}
//                   <div className="item2"></div>
//                   <div className="number one">01</div>
//                   <div className="text1">Project Name</div>
//                   <div className="card">
//                     <a
//                       href="https://vercel.com/ulrich-andos-projects"
//                       target="_blank"
//                     >
//                       <img src="images/img1.jpg" alt="" className="img" />
//                     </a>
//                   </div>
//                 </div>
//                 <div className="item">
//                   {/* Increased row height */}
//                   <div className="card">
//                     <a
//                       href="https://vercel.com/ulrich-andos-projects "
//                       target="_blank"
//                     >
//                       <img src="images/img2.jpg" alt="" className="img" />
//                     </a>
//                     <div className="number two ">02</div>
//                     <div className="text2">Project Name</div>
//                   </div>
//                   <div className="item2"></div>
//                 </div>
//                 <div className="item">
//                   {/* Increased row height */}
//                   <div className="item2"></div>
//                   <div className="card">
//                     <a
//                       href="https://vercel.com/ulrich-andos-projects"
//                       target="_blank"
//                     >
//                       <img src="images/img3.jpg" alt="" className="img" />
//                     </a>
//                     <div className="number three">03</div>
//                     <div className="text3">Project Name</div>
//                   </div>
//                 </div>
//                 <div className="item">
//                   {/* Increased row height */}
//                   <div className="card">
//                     <a
//                       href="https://vercel.com/ulrich-andos-projects"
//                       target="_blank"
//                     >
//                       <img src="images/img4.jpg" alt="" className="img" />
//                     </a>
//                     <div className="number four">04</div>
//                     <div className="text4">Project Name</div>
//                   </div>
//                   <div className="item2"></div>
//                 </div>
//                 <div className="item">
//                   {/* Increased row height */}
//                   <div className="item2"></div>
//                   <div className="card">
//                     <a
//                       href="https://vercel.com/ulrich-andos-projects"
//                       target="_blank"
//                     >
//                       <img src="images/img5.jpg" alt="" className="img" />
//                     </a>
//                     <div className="number five">05</div>
//                     <div className="text5">Project Name</div>
//                   </div>
//                 </div>
//                 <div className="item">
//                   {/* Increased row height */}
//                   <div className="card">
//                     <a
//                       href="https://vercel.com/ulrich-andos-projects"
//                       target="_blank"
//                     >
//                       <img src="images/img6.jpg" alt="" className="img" />
//                     </a>
//                     <div className="number six">06</div>
//                     <div className="text6">Project Name</div>
//                   </div>
//                   <div className="item2"></div>
//                 </div>
//                 <div className="item">
//                   {/* Increased row height */}
//                   <div className="item2"></div>
//                   <div className="card">
//                     <a
//                       href="https://vercel.com/ulrich-andos-projects"
//                       target="_blank"
//                     >
//                       <img src="images/img7.jpg" alt="" className="img" />
//                     </a>
//                     <div className="number seven">07</div>
//                     <div className="text7">Project Name</div>
//                   </div>
//                 </div>
//                 <div className="item">
//                   {/* Increased row height */}
//                   <div className="card">
//                     <a
//                       href="https://vercel.com/ulrich-andos-projects"
//                       target="_blank"
//                     >
//                       <img src="images/PreImage.jpg" alt="" className="img" />
//                     </a>
//                     <div className="number eight">08</div>
//                     <div className="text8">Project Name</div>
//                   </div>
//                   <div className="item2"></div>
//                 </div>
//                 <div className="item">
//                   {/* Increased row height */}
//                   <div className="item2"></div>
//                   <div className="card">
//                     <a
//                       href="https://vercel.com/ulrich-andos-projects"
//                       target="_blank"
//                     >
//                       <img src="images/img8.jpg" alt="" className="img" />
//                     </a>
//                     <div className="number nine">09</div>
//                     <div className="text9">Project Name</div>
//                   </div>
//                 </div>
//               </div>
//               {/* End of container */}
//             </div>
//           </div>
//           {/* Project menu End */}
//         </div>
//       </motion.div>
//     </div>
//   );
// }

// export default WorkPage;

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import "../../styles/draggablescroll.css";

function WorkPage() {
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
        <div className="relative w-screen h-screen p-0 m-0 ">
          <div className="absolute top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2 p-2">
            {/* Circle */}
            <div className="Circle w-160 h-160 rounded-full border-4 bg-gray-800 flex justify-center items-center">
              <div className="Mini flex justify-center w-60 h-60 rounded-full bg-gray-500"></div>
            </div>
            {/* End Circle */}

            {/* Circle menu */}
            <div className="absolute flex flex-col space-y-2 top-1/3 left-full transform translate-x-0 ">
              <a
                href="https://example.com/page1"
                className="text-1xl font-medium px-4 py-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                APP
              </a>
              <a
                href="https://example.com/page2"
                className="text-1xl font-medium px-4 py-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                WEB
              </a>
              <a
                href="https://example.com/page3"
                className="text-1xl font-medium px-4 py-2"
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
              <h1 className="text-8xl font-bold">Work.</h1>
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
              className="ItemsContainer fixed right-[25%] top-1/2 transform translate-x-1/2 -translate-y-1/2  "
            >
              {/* beginning of container  */}
              <div className="table border-collapse ">
                <div className="item">
                  {/* Increased row height */}
                  <div className="item2"></div>
                  <div className="number one">01</div>
                  <div className="text1">Project Name</div>
                  <div className="card image-container">
                    <a
                      href="https://vercel.com/ulrich-andos-projects"
                      target="_blank"
                    >
                      <img src="images/img1.jpg" alt="" className="img" />
                      <div className="overlay"></div>
                    </a>
                  </div>
                </div>
                <div className="item">
                  {/* Increased row height */}
                  <div className="card">
                    <a
                      href="https://vercel.com/ulrich-andos-projects "
                      target="_blank"
                    >
                      <img src="images/img2.jpg" alt="" className="img" />
                    </a>
                    <div className="number two ">02</div>
                    <div className="text2">Project Name</div>
                  </div>
                  <div className="item2"></div>
                </div>
                <div className="item">
                  {/* Increased row height */}
                  <div className="item2"></div>
                  <div className="card">
                    <a
                      href="https://vercel.com/ulrich-andos-projects"
                      target="_blank"
                    >
                      <img src="images/img3.jpg" alt="" className="img" />
                    </a>
                    <div className="number three">03</div>
                    <div className="text3">Project Name</div>
                  </div>
                </div>
                <div className="item">
                  {/* Increased row height */}
                  <div className="card">
                    <a
                      href="https://vercel.com/ulrich-andos-projects"
                      target="_blank"
                    >
                      <img src="images/img4.jpg" alt="" className="img" />
                    </a>
                    <div className="number four">04</div>
                    <div className="text4">Project Name</div>
                  </div>
                  <div className="item2"></div>
                </div>
                <div className="item">
                  {/* Increased row height */}
                  <div className="item2"></div>
                  <div className="card">
                    <a
                      href="https://vercel.com/ulrich-andos-projects"
                      target="_blank"
                    >
                      <img src="images/img5.jpg" alt="" className="img" />
                    </a>
                    <div className="number five">05</div>
                    <div className="text5">Project Name</div>
                  </div>
                </div>
                <div className="item">
                  {/* Increased row height */}
                  <div className="card">
                    <a
                      href="https://vercel.com/ulrich-andos-projects"
                      target="_blank"
                    >
                      <img src="images/img6.jpg" alt="" className="img" />
                    </a>
                    <div className="number six">06</div>
                    <div className="text6">Project Name</div>
                  </div>
                  <div className="item2"></div>
                </div>
                <div className="item">
                  {/* Increased row height */}
                  <div className="item2"></div>
                  <div className="card">
                    <a
                      href="https://vercel.com/ulrich-andos-projects"
                      target="_blank"
                    >
                      <img src="images/img7.jpg" alt="" className="img" />
                    </a>
                    <div className="number seven">07</div>
                    <div className="text7">Project Name</div>
                  </div>
                </div>
                <div className="item">
                  {/* Increased row height */}
                  <div className="card">
                    <a
                      href="https://vercel.com/ulrich-andos-projects"
                      target="_blank"
                    >
                      <img src="images/PreImage.jpg" alt="" className="img" />
                    </a>
                    <div className="number eight">08</div>
                    <div className="text8">Project Name</div>
                  </div>
                  <div className="item2"></div>
                </div>
                <div className="item">
                  {/* Increased row height */}
                  <div className="item2"></div>
                  <div className="card">
                    <a
                      href="https://vercel.com/ulrich-andos-projects"
                      target="_blank"
                    >
                      <img src="images/img8.jpg" alt="" className="img" />
                    </a>
                    <div className="number nine">09</div>
                    <div className="text9">Project Name</div>
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

export default WorkPage;
