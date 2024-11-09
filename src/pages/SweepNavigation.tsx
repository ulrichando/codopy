// // // import React, { useState, useEffect } from "react";
// // // import AboutPage from "./AboutPage";
// // // import Homepage from "./Homepage";
// // // import WorkPage from "./WorkPage";

// // // interface NavigationCircleProps {
// // //   onNavigate?: () => void;
// // //   direction: "left" | "right";
// // //   className?: string;
// // //   size?: number;
// // //   activeColor?: string;
// // //   inactiveColor?: string;
// // //   showMenu?: boolean;
// // //   textPosition?: "left" | "right";
// // // }

// // // interface PageProps {
// // //   content: React.ReactNode;
// // // }

// // // interface SweepNavigationProps {
// // //   pages?: Array<PageProps>;
// // // }

// // // interface SweepNavigationProps {
// // //   pages?: Array<{ content: React.ReactNode }>;
// // // }

// // // const defaultPages = [
// // //   { content: <AboutPage /> },
// // //   { content: <Homepage /> },
// // //   { content: <WorkPage /> },
// // // ];

// // // const Page: React.FC<PageProps> = ({ content }) => (
// // //   <div className="w-full h-full">{content}</div>
// // // );

// // // const NavigationCircle: React.FC<NavigationCircleProps> = ({
// // //   onNavigate,
// // //   direction,
// // //   className = "",
// // //   size = 400,
// // //   activeColor = "rgb(96, 165, 250)",
// // //   inactiveColor = "rgb(156, 163, 175)",
// // //   showMenu = false,
// // //   textPosition = "right",
// // // }) => {
// // //   const [isMinimized, setIsMinimized] = useState(true);
// // //   const [menuRotation, setMenuRotation] = useState(-180);
// // //   const [activeIndex, setActiveIndex] = useState(0);

// // //   useEffect(() => {
// // //     setIsMinimized(true);
// // //     setMenuRotation(-180);
// // //   }, []);

// // //   const menuItems =
// // //     textPosition === "left"
// // //       ? [
// // //           { label: "Frontend", active: true },
// // //           { label: "Backend", active: false },
// // //           { label: "Database", active: false },
// // //           { label: "Tools", active: false },
// // //           { label: "Test", active: false },
// // //           { label: "Test", active: false },
// // //         ]
// // //       : [
// // //           { label: "Codopy", active: true },
// // //           { label: "VS-Theme", active: false },
// // //           { label: "Tracker", active: false },
// // //           { label: "Cloud", active: false },
// // //           { label: "Server", active: false },
// // //           { label: "Security", active: false },
// // //         ];

// // //   const getPosition = (index: number, total: number) => {
// // //     const angleStep = 180 / (total + 1);
// // //     const angle = (index + 1) * angleStep;
// // //     const radian = (angle * Math.PI) / 180;
// // //     const radius = 190;
// // //     const x =
// // //       textPosition === "left"
// // //         ? 250 - Math.sin(radian) * radius
// // //         : 250 + Math.sin(radian) * radius;
// // //     const y = 250 - Math.cos(radian) * radius;
// // //     return { x, y };
// // //   };

// // //   const handleInnerCircleClick = (e: React.MouseEvent) => {
// // //     e.stopPropagation();
// // //     if (onNavigate) {
// // //       setIsMinimized(true);
// // //       setMenuRotation(-180);
// // //       setTimeout(onNavigate, 100);
// // //     }
// // //   };

// // //   useEffect(() => {
// // //     if (showMenu) {
// // //       setIsMinimized(false);
// // //       setMenuRotation(0);
// // //     } else {
// // //       setIsMinimized(true);
// // //       setMenuRotation(-180);
// // //     }
// // //   }, [showMenu]);

// // //   const positionClass =
// // //     direction === "left"
// // //       ? "fixed left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2"
// // //       : "fixed right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2";

// // //   return (
// // //     <div className={`${positionClass} ${className} z-40 hidden md:block`}>
// // //       <div
// // //         className={`relative transition-all duration-700 ease-in-out
// // //           ${isMinimized ? "scale-50" : "scale-100"}`}
// // //         style={{ width: size, height: size }}
// // //       >
// // //         <svg
// // //           className="w-full h-full transition-transform duration-1000 ease-in-out"
// // //           viewBox="0 0 500 500"
// // //           style={{ transform: `rotate(${menuRotation}deg)` }}
// // //         >
// // //           <g className="transition-transform duration-700 ease-in-out">
// // //             <circle
// // //               cx="250"
// // //               cy="250"
// // //               r="240"
// // //               fill="white"
// // //               className="opacity-5"
// // //             />

// // //             <circle cx="250" cy="250" r="140" fill="black" />

// // //             <circle cx="250" cy="250" r="125" fill="white" />

// // //             <circle
// // //               cx="250"
// // //               cy="250"
// // //               r="90"
// // //               fill="black"
// // //               className=""
// // //               onClick={handleInnerCircleClick}
// // //             />

// // //             <circle
// // //               cx="250"
// // //               cy="250"
// // //               r="240"
// // //               fill="none"
// // //               stroke="rgba(0, 0, 0, 0.2)"
// // //               strokeWidth="2"
// // //             />

// // //             <circle
// // //               cx="250"
// // //               cy="250"
// // //               r="140"
// // //               fill="none"
// // //               stroke="rgba(75, 85, 99, 0.4)"
// // //               strokeWidth="2"
// // //             />

// // //             <circle
// // //               cx="250"
// // //               cy="250"
// // //               r="125"
// // //               fill="none"
// // //               stroke="rgba(75, 85, 99, 0.5)"
// // //               strokeWidth="2"
// // //             />

// // //             <circle
// // //               cx="250"
// // //               cy="250"
// // //               r="90"
// // //               fill="none"
// // //               stroke="rgba(75, 85, 99, 0.6)"
// // //               strokeWidth="2"
// // //             />

// // //             <path
// // //               d={`M 250 10 A 240 240 0 0 1 250 490`}
// // //               fill="none"
// // //               stroke={activeColor}
// // //               strokeWidth="3"
// // //               className="transition-all duration-300 opacity-30"
// // //               strokeDasharray={`${(activeIndex + 1) * (752 / 4)}, 752`}
// // //             />
// // //           </g>

// // //           <g
// // //             className={`transition-opacity duration-500 ${
// // //               isMinimized ? "opacity-0" : "opacity-100"
// // //             }`}
// // //           >
// // //             {menuItems.map((item, index) => {
// // //               const pos = getPosition(index, menuItems.length);
// // //               return (
// // //                 <g
// // //                   key={item.label}
// // //                   onClick={() => setActiveIndex(index)}
// // //                   className=""
// // //                 >
// // //                   <text
// // //                     x={pos.x}
// // //                     y={pos.y}
// // //                     fill={index === activeIndex ? activeColor : inactiveColor}
// // //                     fontSize="14"
// // //                     textAnchor="middle"
// // //                     alignmentBaseline="middle"
// // //                     className="transition-opacity duration-300 hover:fill-gray-300"
// // //                   >
// // //                     {item.label}
// // //                   </text>
// // //                 </g>
// // //               );
// // //             })}
// // //           </g>
// // //         </svg>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // const SweepNavigation: React.FC<SweepNavigationProps> = ({
// // //   pages = defaultPages,
// // // }) => {
// // //   const [currentPage, setCurrentPage] = useState<number>(1);
// // //   const [isAnimating, setIsAnimating] = useState(false);

// // //   const navigateLeft = () => {
// // //     if (currentPage > 0 && !isAnimating) {
// // //       setIsAnimating(true);
// // //       setCurrentPage(currentPage - 1);
// // //       setTimeout(() => setIsAnimating(false), 1000);
// // //     }
// // //   };

// // //   const navigateRight = () => {
// // //     if (currentPage < pages.length - 1 && !isAnimating) {
// // //       setIsAnimating(true);
// // //       setCurrentPage(currentPage + 1);
// // //       setTimeout(() => setIsAnimating(false), 1000);
// // //     }
// // //   };

// // //   if (!pages || pages.length === 0) {
// // //     return null;
// // //   }

// // //   return (
// // //     <div className="relative w-screen h-screen overflow-hidden">
// // //       {currentPage === 1 && (
// // //         <>
// // //           <NavigationCircle
// // //             direction="left"
// // //             onNavigate={navigateLeft}
// // //             size={400}
// // //             activeColor="#3B82F6"
// // //             inactiveColor="#9CA3AF"
// // //             showMenu={false}
// // //             key="left-circle-page2"
// // //           />
// // //           <NavigationCircle
// // //             direction="right"
// // //             onNavigate={navigateRight}
// // //             size={400}
// // //             activeColor="#3B82F6"
// // //             inactiveColor="#9CA3AF"
// // //             showMenu={false}
// // //             key="right-circle-page2"
// // //           />
// // //         </>
// // //       )}

// // //       {currentPage === 0 && (
// // //         <NavigationCircle
// // //           direction="right"
// // //           onNavigate={navigateRight}
// // //           size={400}
// // //           activeColor="#3B82F6"
// // //           inactiveColor="#9CA3AF"
// // //           showMenu={true}
// // //           textPosition="left"
// // //           key="right-circle-page1"
// // //         />
// // //       )}

// // //       {currentPage === 2 && (
// // //         <NavigationCircle
// // //           direction="left"
// // //           onNavigate={navigateLeft}
// // //           size={400}
// // //           activeColor="#3B82F6"
// // //           inactiveColor="#9CA3AF"
// // //           showMenu={true}
// // //           textPosition="right"
// // //           key="left-circle-page3"
// // //         />
// // //       )}

// // //       <div
// // //         className="absolute w-full h-full flex smooth-transform"
// // //         style={{
// // //           transform: `translateX(-${currentPage * 100}%)`,
// // //           transition: "all 800ms cubic-bezier(0.65, 0, 0.35, 1)",
// // //         }}
// // //       >
// // //         {pages.map((page, index) => (
// // //           <div
// // //             key={index}
// // //             className="min-w-full h-full flex-shrink-0 smooth-transform"
// // //             style={{
// // //               opacity: currentPage === index ? 1 : 0.8,
// // //               transition: "all 800ms cubic-bezier(0.65, 0, 0.35, 1)",
// // //             }}
// // //           >
// // //             <Page content={page.content} />
// // //           </div>
// // //         ))}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export { NavigationCircle };
// // // export default SweepNavigation;
// // import React, { useState, useEffect } from "react";
// // import DarkModeButton from "../components/ui/DarkmodeButton";
// // import useDarkMode from "../hooks/useDarkMode"; // Adjust the import path as needed

// // interface NavigationCircleProps {
// //   onNavigate?: () => void;
// //   direction: "left" | "right";
// //   className?: string;
// //   size?: number;
// //   activeColor?: string;
// //   inactiveColor?: string;
// //   showMenu?: boolean;
// //   textPosition?: "left" | "right";
// //   darkMode?: boolean;
// // }

// // const NavigationCircle: React.FC<NavigationCircleProps> = ({
// //   onNavigate,
// //   direction,
// //   className = "",
// //   size = 600,
// //   activeColor = "rgb(96, 165, 250)",
// //   inactiveColor = "rgb(156, 163, 175)",
// //   showMenu = false,
// //   textPosition = "right",
// //   darkMode = false,
// // }) => {
// //   const [isMinimized, setIsMinimized] = useState(true);
// //   const [menuRotation, setMenuRotation] = useState(-180);
// //   const [activeIndex, setActiveIndex] = useState(0);

// //   const menuItems =
// //     textPosition === "left"
// //       ? [
// //           { label: "Work", active: true },
// //           { label: "Projects", active: false },
// //           { label: "Contact", active: false },
// //         ]
// //       : [
// //           { label: "About", active: true },
// //           { label: "Profile", active: false },
// //           { label: "Skills", active: false },
// //         ];

// //   const getPosition = (index: number, total: number) => {
// //     const angleStep = 180 / (total + 1);
// //     const angle = (index + 1) * angleStep;
// //     const radian = (angle * Math.PI) / 180;
// //     const radius = 285;
// //     const x =
// //       textPosition === "left"
// //         ? 250 - Math.sin(radian) * radius
// //         : 250 + Math.sin(radian) * radius;
// //     const y = 250 - Math.cos(radian) * radius;
// //     return { x, y };
// //   };

// //   const handleInnerCircleClick = (e: React.MouseEvent) => {
// //     e.stopPropagation();
// //     if (onNavigate) {
// //       setIsMinimized(true);
// //       setMenuRotation(-180);
// //       setTimeout(onNavigate, 100);
// //     }
// //   };

// //   useEffect(() => {
// //     if (showMenu) {
// //       setIsMinimized(false);
// //       setMenuRotation(0);
// //     } else {
// //       setIsMinimized(true);
// //       setMenuRotation(-180);
// //     }
// //   }, [showMenu]);

// //   const positionClass =
// //     direction === "left"
// //       ? "fixed left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2"
// //       : "fixed right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2";

// //   return (
// //     <div className={`${positionClass} ${className} z-40`}>
// //       <div
// //         className={`relative transition-all duration-700 ease-in-out
// //           ${isMinimized ? "scale-50" : "scale-100"}`}
// //         style={{ width: size, height: size }}
// //       >
// //         <svg
// //           className="w-full h-full transition-transform duration-700 ease-in-out"
// //           viewBox="0 0 500 500"
// //           style={{ transform: `rotate(${menuRotation}deg)` }}
// //         >
// //           <g className="transition-transform duration-700 ease-in-out">
// //             <circle
// //               cx="250"
// //               cy="250"
// //               r="360"
// //               className={`${
// //                 darkMode ? "fill-gray-900" : "fill-white"
// //               } opacity-5`}
// //             />

// //             <circle
// //               cx="250"
// //               cy="250"
// //               r="210"
// //               className={darkMode ? "fill-white" : "fill-black"}
// //             />

// //             <circle
// //               cx="250"
// //               cy="250"
// //               r="187"
// //               className={darkMode ? "fill-gray-900" : "fill-white"}
// //             />

// //             <circle
// //               cx="250"
// //               cy="250"
// //               r="135"
// //               className={`${
// //                 darkMode ? "fill-white" : "fill-black"
// //               } cursor-pointer`}
// //               onClick={handleInnerCircleClick}
// //             />

// //             <circle
// //               cx="250"
// //               cy="250"
// //               r="360"
// //               fill="none"
// //               className={darkMode ? "stroke-white/20" : "stroke-black/20"}
// //               strokeWidth="2"
// //             />

// //             <circle
// //               cx="250"
// //               cy="250"
// //               r="210"
// //               fill="none"
// //               className={darkMode ? "stroke-white/40" : "stroke-gray-500/40"}
// //               strokeWidth="2"
// //             />

// //             <circle
// //               cx="250"
// //               cy="250"
// //               r="187"
// //               fill="none"
// //               className={darkMode ? "stroke-white/50" : "stroke-gray-500/50"}
// //               strokeWidth="2"
// //             />

// //             <circle
// //               cx="250"
// //               cy="250"
// //               r="135"
// //               fill="none"
// //               className={darkMode ? "stroke-white/60" : "stroke-gray-500/60"}
// //               strokeWidth="2"
// //             />

// //             <path
// //               d={`M 250 10 A 360 360 0 0 1 250 490`}
// //               fill="none"
// //               stroke={activeColor}
// //               strokeWidth="3"
// //               className="transition-all duration-300 opacity-30"
// //               strokeDasharray={`${(activeIndex + 1) * (1130 / 4)}, 1130`}
// //             />
// //           </g>

// //           <g
// //             className={`transition-opacity duration-500 ${
// //               isMinimized ? "opacity-0" : "opacity-100"
// //             }`}
// //           >
// //             {menuItems.map((item, index) => {
// //               const pos = getPosition(index, menuItems.length);
// //               return (
// //                 <g
// //                   key={item.label}
// //                   onClick={() => setActiveIndex(index)}
// //                   className="cursor-pointer"
// //                 >
// //                   <text
// //                     x={pos.x}
// //                     y={pos.y}
// //                     fill={index === activeIndex ? activeColor : inactiveColor}
// //                     fontSize="16"
// //                     textAnchor="middle"
// //                     alignmentBaseline="middle"
// //                     className={`transition-opacity duration-300 hover:${
// //                       darkMode ? "fill-gray-300" : "fill-gray-600"
// //                     }`}
// //                   >
// //                     {item.label}
// //                   </text>
// //                 </g>
// //               );
// //             })}
// //           </g>
// //         </svg>
// //       </div>
// //     </div>
// //   );
// // };

// // interface PageProps {
// //   content: React.ReactNode;
// // }

// // const Page: React.FC<PageProps> = ({ content }) => (
// //   <div className="w-full h-full">{content}</div>
// // );

// // interface SweepNavigationProps {
// //   pages?: Array<{ content: React.ReactNode }>;
// // }

// // const defaultPages = [
// //   { content: <div>Page 1</div> },
// //   { content: <div>Page 2</div> },
// //   { content: <div>Page 3</div> },
// // ];

// // const SweepNavigation: React.FC<SweepNavigationProps> = ({
// //   pages = defaultPages,
// // }) => {
// //   const [currentPage, setCurrentPage] = useState<number>(1);
// //   const [isAnimating, setIsAnimating] = useState(false);
// //   const [darkMode] = useDarkMode();

// //   const navigateLeft = () => {
// //     if (currentPage > 0 && !isAnimating) {
// //       setIsAnimating(true);
// //       setCurrentPage(currentPage - 1);
// //       setTimeout(() => setIsAnimating(false), 800);
// //     }
// //   };

// //   const navigateRight = () => {
// //     if (currentPage < pages.length - 1 && !isAnimating) {
// //       setIsAnimating(true);
// //       setCurrentPage(currentPage + 1);
// //       setTimeout(() => setIsAnimating(false), 800);
// //     }
// //   };

// //   if (!pages || pages.length === 0) {
// //     return null;
// //   }

// //   return (
// //     <div
// //       className={`relative w-screen h-screen overflow-hidden transition-colors duration-300 ${
// //         darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
// //       }`}
// //     >
// //       {/* Using your custom DarkModeButton component */}
// //       <DarkModeButton />

// //       {currentPage === 1 && (
// //         <>
// //           <NavigationCircle
// //             direction="left"
// //             onNavigate={navigateLeft}
// //             size={600}
// //             activeColor={darkMode ? "#60A5FA" : "#3B82F6"}
// //             inactiveColor={darkMode ? "#9CA3AF" : "#6B7280"}
// //             showMenu={false}
// //             darkMode={darkMode}
// //             key="left-circle-page2"
// //           />
// //           <NavigationCircle
// //             direction="right"
// //             onNavigate={navigateRight}
// //             size={600}
// //             activeColor={darkMode ? "#60A5FA" : "#3B82F6"}
// //             inactiveColor={darkMode ? "#9CA3AF" : "#6B7280"}
// //             showMenu={false}
// //             darkMode={darkMode}
// //             key="right-circle-page2"
// //           />
// //         </>
// //       )}

// //       {currentPage === 0 && (
// //         <NavigationCircle
// //           direction="right"
// //           onNavigate={navigateRight}
// //           size={600}
// //           activeColor={darkMode ? "#60A5FA" : "#3B82F6"}
// //           inactiveColor={darkMode ? "#9CA3AF" : "#6B7280"}
// //           showMenu={true}
// //           textPosition="left"
// //           darkMode={darkMode}
// //           key="right-circle-page1"
// //         />
// //       )}

// //       {currentPage === 2 && (
// //         <NavigationCircle
// //           direction="left"
// //           onNavigate={navigateLeft}
// //           size={600}
// //           activeColor={darkMode ? "#60A5FA" : "#3B82F6"}
// //           inactiveColor={darkMode ? "#9CA3AF" : "#6B7280"}
// //           showMenu={true}
// //           textPosition="right"
// //           darkMode={darkMode}
// //           key="left-circle-page3"
// //         />
// //       )}

// //       <div
// //         className="absolute w-full h-full flex smooth-transform"
// //         style={{
// //           transform: `translateX(-${currentPage * 100}%)`,
// //           transition: "all 800ms cubic-bezier(0.65, 0, 0.35, 1)",
// //         }}
// //       >
// //         {pages.map((page, index) => (
// //           <div
// //             key={index}
// //             className="min-w-full h-full flex-shrink-0 smooth-transform"
// //             style={{
// //               opacity: currentPage === index ? 1 : 0.8,
// //               transition: "all 800ms cubic-bezier(0.65, 0, 0.35, 1)",
// //             }}
// //           >
// //             <Page content={page.content} />
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default SweepNavigation;

// // SweepNavigation.tsx
// import React, { useState, useEffect } from "react";
// import DarkModeButton from "../components/ui/DarkmodeButton";
// import useDarkMode from "../hooks/useDarkMode";
// import AboutPage from "./AboutPage";
// import Homepage from "./Homepage";
// import WorkPage from "./WorkPage";

// interface NavigationCircleProps {
//   onNavigate?: () => void;
//   direction: "left" | "right";
//   className?: string;
//   size?: number;
//   activeColor?: string;
//   inactiveColor?: string;
//   showMenu?: boolean;
//   textPosition?: "left" | "right";
//   darkMode?: boolean;
// }

// interface PageProps {
//   content: React.ReactNode;
// }

// interface SweepNavigationProps {
//   pages?: Array<{ content: React.ReactNode }>;
// }

// const defaultPages = [
//   { content: <AboutPage /> },
//   { content: <Homepage /> },
//   { content: <WorkPage /> },
// ];

// const Page: React.FC<PageProps> = ({ content }) => (
//   <div className="w-full h-full">{content}</div>
// );

// const NavigationCircle: React.FC<NavigationCircleProps> = ({
//   onNavigate,
//   direction,
//   className = "",
//   size = 600,
//   activeColor = "rgb(96, 165, 250)",
//   inactiveColor = "rgb(156, 163, 175)",
//   showMenu = false,
//   textPosition = "right",
//   darkMode = false,
// }) => {
//   const [isMinimized, setIsMinimized] = useState(true);
//   const [menuRotation, setMenuRotation] = useState(-180);
//   const [activeIndex, setActiveIndex] = useState(0);

//   // Calculate the radius and circumference for the progress arc
//   const outerRadius = 360;
//   const arcCircumference = 2 * Math.PI * outerRadius;
//   const halfCircumference = arcCircumference / 2;

//   const menuItems =
//     textPosition === "left"
//       ? [
//           { label: "Frontend", active: true },
//           { label: "Backend", active: false },
//           { label: "Database", active: false },
//           { label: "DevOps", active: false },
//           { label: "Mobile", active: false },
//           { label: "Testing", active: false },
//         ]
//       : [
//           { label: "Web App", active: true },
//           { label: "VS Theme", active: false },
//           { label: "Analytics", active: false },
//           { label: "Cloud App", active: false },
//           { label: "Security", active: false },
//           { label: "AI Tools", active: false },
//         ];

//   const getPosition = (index: number, total: number) => {
//     const angleStep = 180 / (total + 1);
//     const angle = (index + 1) * angleStep;
//     const radian = (angle * Math.PI) / 180;
//     const radius = 285;
//     const x =
//       textPosition === "left"
//         ? 250 - Math.sin(radian) * radius
//         : 250 + Math.sin(radian) * radius;
//     const y = 250 - Math.cos(radian) * radius;
//     return { x, y };
//   };

//   const handleInnerCircleClick = (e: React.MouseEvent) => {
//     e.stopPropagation();
//     if (onNavigate) {
//       setIsMinimized(true);
//       setMenuRotation(-180);
//       setTimeout(onNavigate, 100);
//     }
//   };

//   useEffect(() => {
//     if (showMenu) {
//       setIsMinimized(false);
//       setMenuRotation(0);
//     } else {
//       setIsMinimized(true);
//       setMenuRotation(-180);
//     }
//   }, [showMenu]);

//   const positionClass =
//     direction === "left"
//       ? "fixed left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2"
//       : "fixed right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2";

//   const createArcPath = () => {
//     const startX = 250;
//     const startY = 250 - outerRadius;
//     const endX = 250;
//     const endY = 250 + outerRadius;
//     return `M ${startX} ${startY} A ${outerRadius} ${outerRadius} 0 0 1 ${endX} ${endY}`;
//   };

//   return (
//     <div className={`${positionClass} ${className} z-40 hidden md:block`}>
//       <div
//         className={`relative transition-all duration-700 ease-in-out
//           ${isMinimized ? "scale-50" : "scale-100"}`}
//         style={{ width: size, height: size }}
//       >
//         <svg
//           className="w-full h-full transition-transform duration-700 ease-in-out"
//           viewBox="0 0 500 500"
//           style={{ transform: `rotate(${menuRotation}deg)` }}
//         >
//           <g className="transition-transform duration-700 ease-in-out">
//             <circle
//               cx="250"
//               cy="250"
//               r="360"
//               className={`${
//                 darkMode ? "fill-gray-900" : "fill-white"
//               } opacity-5`}
//             />

//             <circle
//               cx="250"
//               cy="250"
//               r="210"
//               className={darkMode ? "fill-white" : "fill-black"}
//             />

//             <circle
//               cx="250"
//               cy="250"
//               r="187"
//               className={darkMode ? "fill-gray-900" : "fill-white"}
//             />

//             <circle
//               cx="250"
//               cy="250"
//               r="135"
//               className={darkMode ? "fill-white" : "fill-black"}
//               onClick={handleInnerCircleClick}
//             />

//             <circle
//               cx="250"
//               cy="250"
//               r="360"
//               fill="none"
//               className={darkMode ? "stroke-white/20" : "stroke-black/20"}
//               strokeWidth="2"
//             />

//             <circle
//               cx="250"
//               cy="250"
//               r="210"
//               fill="none"
//               className={darkMode ? "stroke-white/40" : "stroke-gray-500/40"}
//               strokeWidth="2"
//             />

//             <circle
//               cx="250"
//               cy="250"
//               r="187"
//               fill="none"
//               className={darkMode ? "stroke-white/50" : "stroke-gray-500/50"}
//               strokeWidth="2"
//             />

//             <circle
//               cx="250"
//               cy="250"
//               r="135"
//               fill="none"
//               className={darkMode ? "stroke-white/60" : "stroke-gray-500/60"}
//               strokeWidth="2"
//             />

//             <path
//               d={createArcPath()}
//               fill="none"
//               stroke={activeColor}
//               strokeWidth="3"
//               className="transition-all duration-300 opacity-30"
//               strokeDasharray={`${
//                 ((activeIndex + 1) * halfCircumference) / 6
//               }, ${halfCircumference}`}
//             />
//           </g>

//           <g
//             className={`transition-opacity duration-500 ${
//               isMinimized ? "opacity-0" : "opacity-100"
//             }`}
//           >
//             {menuItems.map((item, index) => {
//               const pos = getPosition(index, menuItems.length);
//               return (
//                 <g
//                   key={item.label}
//                   onClick={() => setActiveIndex(index)}
//                   className="cursor-pointer"
//                 >
//                   <text
//                     x={pos.x}
//                     y={pos.y}
//                     fill={index === activeIndex ? activeColor : inactiveColor}
//                     fontSize="14"
//                     textAnchor="middle"
//                     alignmentBaseline="middle"
//                     className={`transition-opacity duration-300 hover:${
//                       darkMode ? "fill-gray-300" : "fill-gray-600"
//                     }`}
//                   >
//                     {item.label}
//                   </text>
//                 </g>
//               );
//             })}
//           </g>
//         </svg>
//       </div>
//     </div>
//   );
// };

// const SweepNavigation: React.FC<SweepNavigationProps> = ({
//   pages = defaultPages,
// }) => {
//   const [currentPage, setCurrentPage] = useState<number>(1);
//   const [isAnimating, setIsAnimating] = useState(false);
//   const [darkMode, toggleDarkMode] = useDarkMode();

//   const navigateLeft = () => {
//     if (currentPage > 0 && !isAnimating) {
//       setIsAnimating(true);
//       setCurrentPage(currentPage - 1);
//       setTimeout(() => setIsAnimating(false), 800);
//     }
//   };

//   const navigateRight = () => {
//     if (currentPage < pages.length - 1 && !isAnimating) {
//       setIsAnimating(true);
//       setCurrentPage(currentPage + 1);
//       setTimeout(() => setIsAnimating(false), 800);
//     }
//   };

//   if (!pages || pages.length === 0) {
//     return null;
//   }

//   return (
//     <div
//       className={`relative w-screen h-screen overflow-hidden transition-colors duration-300 ${
//         darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
//       }`}
//     >
//       <DarkModeButton />

//       {currentPage === 1 && (
//         <>
//           <NavigationCircle
//             direction="left"
//             onNavigate={navigateLeft}
//             size={600}
//             activeColor={darkMode ? "#60A5FA" : "#3B82F6"}
//             inactiveColor={darkMode ? "#9CA3AF" : "#6B7280"}
//             showMenu={false}
//             darkMode={darkMode}
//             key="left-circle-page2"
//           />
//           <NavigationCircle
//             direction="right"
//             onNavigate={navigateRight}
//             size={600}
//             activeColor={darkMode ? "#60A5FA" : "#3B82F6"}
//             inactiveColor={darkMode ? "#9CA3AF" : "#6B7280"}
//             showMenu={false}
//             darkMode={darkMode}
//             key="right-circle-page2"
//           />
//         </>
//       )}

//       {currentPage === 0 && (
//         <NavigationCircle
//           direction="right"
//           onNavigate={navigateRight}
//           size={600}
//           activeColor={darkMode ? "#60A5FA" : "#3B82F6"}
//           inactiveColor={darkMode ? "#9CA3AF" : "#6B7280"}
//           showMenu={true}
//           textPosition="left"
//           darkMode={darkMode}
//           key="right-circle-page1"
//         />
//       )}

//       {currentPage === 2 && (
//         <NavigationCircle
//           direction="left"
//           onNavigate={navigateLeft}
//           size={600}
//           activeColor={darkMode ? "#60A5FA" : "#3B82F6"}
//           inactiveColor={darkMode ? "#9CA3AF" : "#6B7280"}
//           showMenu={true}
//           textPosition="right"
//           darkMode={darkMode}
//           key="left-circle-page3"
//         />
//       )}

//       <div
//         className="absolute w-full h-full flex smooth-transform"
//         style={{
//           transform: `translateX(-${currentPage * 100}%)`,
//           transition: "all 800ms cubic-bezier(0.65, 0, 0.35, 1)",
//         }}
//       >
//         {pages.map((page, index) => (
//           <div
//             key={index}
//             className="min-w-full h-full flex-shrink-0 smooth-transform"
//             style={{
//               opacity: currentPage === index ? 1 : 0.8,
//               transition: "all 800ms cubic-bezier(0.65, 0, 0.35, 1)",
//             }}
//           >
//             <Page content={page.content} />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SweepNavigation;
// SweepNavigation.tsx

//other code generated commented.

// import React, { useState, useEffect } from "react";
// import DarkModeButton from "../components/ui/DarkmodeButton";
// import useDarkMode from "../hooks/useDarkMode";
// import AboutPage from "./AboutPage";
// import Homepage from "./Homepage";
// import WorkPage from "./WorkPage";

// interface NavigationCircleProps {
//   onNavigate?: () => void;
//   direction: "left" | "right";
//   className?: string;
//   size?: number;
//   activeColor?: string;
//   inactiveColor?: string;
//   showMenu?: boolean;
//   textPosition?: "left" | "right";
//   darkMode?: boolean;
// }

// interface PageProps {
//   content: React.ReactNode;
// }

// interface SweepNavigationProps {
//   pages?: Array<{ content: React.ReactNode }>;
// }

// const defaultPages = [
//   { content: <AboutPage /> },
//   { content: <Homepage /> },
//   { content: <WorkPage /> },
// ];

// const Page: React.FC<PageProps> = ({ content }) => (
//   <div className="w-full h-full">{content}</div>
// );

// const NavigationCircle: React.FC<NavigationCircleProps> = ({
//   onNavigate,
//   direction,
//   className = "",
//   size = 600,
//   activeColor = "rgb(96, 165, 250)",
//   inactiveColor = "rgb(156, 163, 175)",
//   showMenu = false,
//   textPosition = "right",
//   darkMode = false,
// }) => {
//   const [isMinimized, setIsMinimized] = useState(true);
//   const [menuRotation, setMenuRotation] = useState(-180);
//   const [activeIndex, setActiveIndex] = useState(0);

//   // Calculate the radius and circumference for the progress arc
//   const outerRadius = 360;
//   const arcCircumference = 2 * Math.PI * outerRadius;
//   const halfCircumference = arcCircumference / 2;

//   const menuItems =
//     textPosition === "left"
//       ? [
//           { label: "Frontend", active: true },
//           { label: "Backend", active: false },
//           { label: "Database", active: false },
//           { label: "DevOps", active: false },
//           { label: "Mobile", active: false },
//           { label: "Testing", active: false },
//         ]
//       : [
//           { label: "Web App", active: true },
//           { label: "VS Theme", active: false },
//           { label: "Analytics", active: false },
//           { label: "Cloud App", active: false },
//           { label: "Security", active: false },
//           { label: "AI Tools", active: false },
//         ];

//   const getPosition = (index: number, total: number) => {
//     const angleStep = 180 / (total + 1);
//     const angle = (index + 1) * angleStep;
//     const radian = (angle * Math.PI) / 180;
//     const radius = 285;
//     const x =
//       textPosition === "left"
//         ? 250 - Math.sin(radian) * radius
//         : 250 + Math.sin(radian) * radius;
//     const y = 250 - Math.cos(radian) * radius;
//     return { x, y };
//   };

//   const handleInnerCircleClick = (e: React.MouseEvent) => {
//     e.stopPropagation();
//     if (onNavigate) {
//       setIsMinimized(true);
//       setMenuRotation(-180);
//       setTimeout(onNavigate, 100);
//     }
//   };

//   useEffect(() => {
//     if (showMenu) {
//       setIsMinimized(false);
//       setMenuRotation(0);
//     } else {
//       setIsMinimized(true);
//       setMenuRotation(-180);
//     }
//   }, [showMenu]);

//   const positionClass =
//     direction === "left"
//       ? "fixed left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2"
//       : "fixed right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2";

//   const createArcPath = () => {
//     const startX = 250;
//     const startY = 250 - outerRadius;
//     const endX = 250;
//     const endY = 250 + outerRadius;
//     return `M ${startX} ${startY} A ${outerRadius} ${outerRadius} 0 0 1 ${endX} ${endY}`;
//   };

//   return (
//     <div className="hidden md:block">
//       <div className={`${positionClass} ${className} z-40`}>
//         <div
//           className={`relative transition-all duration-700 ease-in-out
//             ${isMinimized ? "scale-50" : "scale-100"}`}
//           style={{ width: size, height: size }}
//         >
//           <svg
//             className="w-full h-full transition-transform duration-700 ease-in-out"
//             viewBox="0 0 500 500"
//             style={{ transform: `rotate(${menuRotation}deg)` }}
//           >
//             <defs>
//               <clipPath id="menuClip">
//                 <circle cx="250" cy="250" r="360" />
//               </clipPath>
//             </defs>

//             <g className="transition-transform duration-700 ease-in-out">
//               <circle
//                 cx="250"
//                 cy="250"
//                 r="360"
//                 className={`${
//                   darkMode ? "fill-gray-900" : "fill-white"
//                 } opacity-5`}
//               />

//               <circle
//                 cx="250"
//                 cy="250"
//                 r="210"
//                 className={darkMode ? "fill-white" : "fill-black"}
//               />

//               <circle
//                 cx="250"
//                 cy="250"
//                 r="187"
//                 className={darkMode ? "fill-gray-900" : "fill-white"}
//               />

//               <circle
//                 cx="250"
//                 cy="250"
//                 r="135"
//                 className={darkMode ? "fill-white" : "fill-black"}
//                 onClick={handleInnerCircleClick}
//               />

//               <circle
//                 cx="250"
//                 cy="250"
//                 r="360"
//                 fill="none"
//                 className={darkMode ? "stroke-white/20" : "stroke-black/20"}
//                 strokeWidth="2"
//               />

//               <circle
//                 cx="250"
//                 cy="250"
//                 r="210"
//                 fill="none"
//                 className={darkMode ? "stroke-white/40" : "stroke-gray-500/40"}
//                 strokeWidth="2"
//               />

//               <circle
//                 cx="250"
//                 cy="250"
//                 r="187"
//                 fill="none"
//                 className={darkMode ? "stroke-white/50" : "stroke-gray-500/50"}
//                 strokeWidth="2"
//               />

//               <circle
//                 cx="250"
//                 cy="250"
//                 r="135"
//                 fill="none"
//                 className={darkMode ? "stroke-white/60" : "stroke-gray-500/60"}
//                 strokeWidth="2"
//               />

//               <path
//                 d={createArcPath()}
//                 fill="none"
//                 stroke={activeColor}
//                 strokeWidth="3"
//                 className="transition-all duration-300 opacity-30"
//                 strokeDasharray={`${
//                   ((activeIndex + 1) * halfCircumference) / 6
//                 }, ${halfCircumference}`}
//               />
//             </g>

//             <g
//               className={`transition-opacity duration-500 ${
//                 isMinimized ? "opacity-0" : "opacity-100"
//               }`}
//               clipPath="url(#menuClip)"
//             >
//               {menuItems.map((item, index) => {
//                 const pos = getPosition(index, menuItems.length);
//                 return (
//                   <g
//                     key={item.label}
//                     onClick={() => setActiveIndex(index)}
//                     className="cursor-pointer"
//                   >
//                     <text
//                       x={pos.x}
//                       y={pos.y}
//                       fill={index === activeIndex ? activeColor : inactiveColor}
//                       fontSize="14"
//                       textAnchor="middle"
//                       alignmentBaseline="middle"
//                       className={`transition-opacity duration-300 hover:${
//                         darkMode ? "fill-gray-300" : "fill-gray-600"
//                       }`}
//                     >
//                       {item.label}
//                     </text>
//                   </g>
//                 );
//               })}
//             </g>
//           </svg>
//         </div>
//       </div>
//     </div>
//   );
// };
// const SweepNavigation: React.FC<SweepNavigationProps> = ({
//   pages = defaultPages,
// }) => {
//   const [currentPage, setCurrentPage] = useState<number>(1);
//   const [isAnimating, setIsAnimating] = useState(false);
//   const [darkMode, toggleDarkMode] = useDarkMode();

//   const navigateLeft = () => {
//     if (currentPage > 0 && !isAnimating) {
//       setIsAnimating(true);
//       setCurrentPage(currentPage - 1);
//       setTimeout(() => setIsAnimating(false), 800);
//     }
//   };

//   const navigateRight = () => {
//     if (currentPage < pages.length - 1 && !isAnimating) {
//       setIsAnimating(true);
//       setCurrentPage(currentPage + 1);
//       setTimeout(() => setIsAnimating(false), 800);
//     }
//   };

//   if (!pages || pages.length === 0) {
//     return null;
//   }

//   return (
//     <div
//       className={`relative w-screen h-screen overflow-hidden transition-colors duration-300 ${
//         darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
//       }`}
//     >
//       <DarkModeButton />

//       {currentPage === 1 && (
//         <>
//           <NavigationCircle
//             direction="left"
//             onNavigate={navigateLeft}
//             size={600}
//             activeColor={darkMode ? "#60A5FA" : "#3B82F6"}
//             inactiveColor={darkMode ? "#9CA3AF" : "#6B7280"}
//             showMenu={false}
//             darkMode={darkMode}
//             key="left-circle-page2"
//           />
//           <NavigationCircle
//             direction="right"
//             onNavigate={navigateRight}
//             size={600}
//             activeColor={darkMode ? "#60A5FA" : "#3B82F6"}
//             inactiveColor={darkMode ? "#9CA3AF" : "#6B7280"}
//             showMenu={false}
//             darkMode={darkMode}
//             key="right-circle-page2"
//           />
//         </>
//       )}

//       {currentPage === 0 && (
//         <NavigationCircle
//           direction="right"
//           onNavigate={navigateRight}
//           size={600}
//           activeColor={darkMode ? "#60A5FA" : "#3B82F6"}
//           inactiveColor={darkMode ? "#9CA3AF" : "#6B7280"}
//           showMenu={true}
//           textPosition="left"
//           darkMode={darkMode}
//           key="right-circle-page1"
//         />
//       )}

//       {currentPage === 2 && (
//         <NavigationCircle
//           direction="left"
//           onNavigate={navigateLeft}
//           size={600}
//           activeColor={darkMode ? "#60A5FA" : "#3B82F6"}
//           inactiveColor={darkMode ? "#9CA3AF" : "#6B7280"}
//           showMenu={true}
//           textPosition="right"
//           darkMode={darkMode}
//           key="left-circle-page3"
//         />
//       )}

//       <div
//         className="absolute w-full h-full flex smooth-transform"
//         style={{
//           transform: `translateX(-${currentPage * 100}%)`,
//           transition: "all 800ms cubic-bezier(0.65, 0, 0.35, 1)",
//         }}
//       >
//         {pages.map((page, index) => (
//           <div
//             key={index}
//             className="min-w-full h-full flex-shrink-0 smooth-transform"
//             style={{
//               opacity: currentPage === index ? 1 : 0.8,
//               transition: "all 800ms cubic-bezier(0.65, 0, 0.35, 1)",
//             }}
//           >
//             <Page content={page.content} />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SweepNavigation;

// SweepNavigation.tsx
// import React, { useState, useEffect } from "react";
// import DarkModeButton from "../components/ui/DarkmodeButton";
// import useDarkMode from "../hooks/useDarkMode";
// import AboutPage from "./AboutPage";
// import Homepage from "./Homepage";
// import WorkPage from "./WorkPage";

// interface NavigationCircleProps {
//   onNavigate?: () => void;
//   direction: "left" | "right";
//   className?: string;
//   size?: number;
//   activeColor?: string;
//   inactiveColor?: string;
//   showMenu?: boolean;
//   textPosition?: "left" | "right";
//   darkMode?: boolean;
// }

// interface PageProps {
//   content: React.ReactNode;
// }

// interface SweepNavigationProps {
//   pages?: Array<{ content: React.ReactNode }>;
// }

// const defaultPages = [
//   { content: <AboutPage /> },
//   { content: <Homepage /> },
//   { content: <WorkPage /> },
// ];

// const Page: React.FC<PageProps> = ({ content }) => (
//   <div className="w-full h-full">{content}</div>
// );

// const NavigationCircle: React.FC<NavigationCircleProps> = ({
//   onNavigate,
//   direction,
//   className = "",
//   size = 600,
//   activeColor = "rgb(96, 165, 250)",
//   inactiveColor = "rgb(156, 163, 175)",
//   showMenu = false,
//   textPosition = "right",
//   darkMode = false,
// }) => {
//   const [isMinimized, setIsMinimized] = useState(true);
//   const [menuRotation, setMenuRotation] = useState(-180);
//   const [activeIndex, setActiveIndex] = useState(0);

//   const outerRadius = 360;
//   const arcCircumference = 2 * Math.PI * outerRadius;
//   const halfCircumference = arcCircumference / 2;

//   const menuItems =
//     textPosition === "left"
//       ? [
//           { label: "Frontend", active: true },
//           { label: "Backend", active: false },
//           { label: "Database", active: false },
//           { label: "DevOps", active: false },
//           { label: "Mobile", active: false },
//           { label: "Testing", active: false },
//         ]
//       : [
//           { label: "Web App", active: true },
//           { label: "VS Theme", active: false },
//           { label: "Analytics", active: false },
//           { label: "Cloud App", active: false },
//           { label: "Security", active: false },
//           { label: "AI Tools", active: false },
//         ];

//   const getPosition = (index: number, total: number) => {
//     // Adjusted angle range for better visibility
//     const startAngle = 20;
//     const endAngle = 160;
//     const angleStep = (endAngle - startAngle) / (total - 1);
//     const angle = startAngle + index * angleStep;
//     const radian = (angle * Math.PI) / 180;

//     // Increased radius and added offset for better text placement
//     const radius = 230;
//     const xOffset = textPosition === "left" ? -20 : 20;

//     return {
//       x:
//         textPosition === "left"
//           ? 250 - Math.sin(radian) * radius + xOffset
//           : 250 + Math.sin(radian) * radius + xOffset,
//       y: 250 - Math.cos(radian) * radius,
//     };
//   };

//   const handleInnerCircleClick = (e: React.MouseEvent) => {
//     e.stopPropagation();
//     if (onNavigate) {
//       setIsMinimized(true);
//       setMenuRotation(-180);
//       setTimeout(onNavigate, 100);
//     }
//   };

//   useEffect(() => {
//     if (showMenu) {
//       setIsMinimized(false);
//       setMenuRotation(0);
//     } else {
//       setIsMinimized(true);
//       setMenuRotation(-180);
//     }
//   }, [showMenu]);

//   const positionClass =
//     direction === "left"
//       ? "fixed left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2"
//       : "fixed right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2";

//   const createArcPath = () => {
//     const startX = 250;
//     const startY = 250 - outerRadius;
//     const endX = 250;
//     const endY = 250 + outerRadius;
//     return `M ${startX} ${startY} A ${outerRadius} ${outerRadius} 0 0 1 ${endX} ${endY}`;
//   };

//   return (
//     <div className="hidden md:block">
//       <div className={`${positionClass} ${className} z-40`}>
//         <div
//           className={`relative transition-all duration-700 ease-in-out
//             ${isMinimized ? "scale-50" : "scale-100"}`}
//           style={{ width: size, height: size }}
//         >
//           <svg
//             className="w-full h-full transition-transform duration-700 ease-in-out overflow-visible"
//             viewBox="0 0 500 500"
//             style={{ transform: `rotate(${menuRotation}deg)` }}
//           >
//             <g className="transition-transform duration-700 ease-in-out">
//               <circle
//                 cx="250"
//                 cy="250"
//                 r="360"
//                 className={`${
//                   darkMode ? "fill-gray-900" : "fill-white"
//                 } opacity-5`}
//               />

//               <circle
//                 cx="250"
//                 cy="250"
//                 r="210"
//                 className={darkMode ? "fill-white" : "fill-black"}
//               />

//               <circle
//                 cx="250"
//                 cy="250"
//                 r="187"
//                 className={darkMode ? "fill-gray-900" : "fill-white"}
//               />

//               <circle
//                 cx="250"
//                 cy="250"
//                 r="135"
//                 className={darkMode ? "fill-white" : "fill-black"}
//                 onClick={handleInnerCircleClick}
//               />

//               <circle
//                 cx="250"
//                 cy="250"
//                 r="360"
//                 fill="none"
//                 className={darkMode ? "stroke-white/20" : "stroke-black/20"}
//                 strokeWidth="2"
//               />

//               <circle
//                 cx="250"
//                 cy="250"
//                 r="210"
//                 fill="none"
//                 className={darkMode ? "stroke-white/40" : "stroke-gray-500/40"}
//                 strokeWidth="2"
//               />

//               <circle
//                 cx="250"
//                 cy="250"
//                 r="187"
//                 fill="none"
//                 className={darkMode ? "stroke-white/50" : "stroke-gray-500/50"}
//                 strokeWidth="2"
//               />

//               <circle
//                 cx="250"
//                 cy="250"
//                 r="135"
//                 fill="none"
//                 className={darkMode ? "stroke-white/60" : "stroke-gray-500/60"}
//                 strokeWidth="2"
//               />

//               <path
//                 d={createArcPath()}
//                 fill="none"
//                 stroke={activeColor}
//                 strokeWidth="3"
//                 className="transition-all duration-300 opacity-30"
//                 strokeDasharray={`${
//                   ((activeIndex + 1) * halfCircumference) / 6
//                 }, ${halfCircumference}`}
//               />
//             </g>

//             <g
//               className={`transition-opacity duration-500 ${
//                 isMinimized ? "opacity-0" : "opacity-100"
//               }`}
//             >
//               {menuItems.map((item, index) => {
//                 const pos = getPosition(index, menuItems.length);
//                 return (
//                   <g
//                     key={item.label}
//                     onClick={() => setActiveIndex(index)}
//                     className="cursor-pointer transition-all duration-300"
//                     style={{ opacity: isMinimized ? 0 : 1 }}
//                   >
//                     <text
//                       x={pos.x}
//                       y={pos.y}
//                       fill={index === activeIndex ? activeColor : inactiveColor}
//                       fontSize="16"
//                       textAnchor={textPosition === "left" ? "end" : "start"}
//                       alignmentBaseline="middle"
//                       className={`transition-all duration-300 hover:${
//                         darkMode ? "fill-gray-300" : "fill-gray-600"
//                       }`}
//                     >
//                       {item.label}
//                     </text>
//                   </g>
//                 );
//               })}
//             </g>
//           </svg>
//         </div>
//       </div>
//     </div>
//   );
// };

// const SweepNavigation: React.FC<SweepNavigationProps> = ({
//   pages = defaultPages,
// }) => {
//   const [currentPage, setCurrentPage] = useState<number>(1);
//   const [isAnimating, setIsAnimating] = useState(false);
//   const [darkMode] = useDarkMode();

//   const navigateLeft = () => {
//     if (currentPage > 0 && !isAnimating) {
//       setIsAnimating(true);
//       setCurrentPage(currentPage - 1);
//       setTimeout(() => setIsAnimating(false), 800);
//     }
//   };

//   const navigateRight = () => {
//     if (currentPage < pages.length - 1 && !isAnimating) {
//       setIsAnimating(true);
//       setCurrentPage(currentPage + 1);
//       setTimeout(() => setIsAnimating(false), 800);
//     }
//   };

//   if (!pages || pages.length === 0) {
//     return null;
//   }

//   return (
//     <div
//       className={`relative w-screen h-screen overflow-hidden transition-colors duration-300 ${
//         darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
//       }`}
//     >
//       <DarkModeButton />

//       {currentPage === 1 && (
//         <>
//           <NavigationCircle
//             direction="left"
//             onNavigate={navigateLeft}
//             size={600}
//             activeColor={darkMode ? "#60A5FA" : "#3B82F6"}
//             inactiveColor={darkMode ? "#9CA3AF" : "#6B7280"}
//             showMenu={false}
//             darkMode={darkMode}
//             key="left-circle-page2"
//           />
//           <NavigationCircle
//             direction="right"
//             onNavigate={navigateRight}
//             size={600}
//             activeColor={darkMode ? "#60A5FA" : "#3B82F6"}
//             inactiveColor={darkMode ? "#9CA3AF" : "#6B7280"}
//             showMenu={false}
//             darkMode={darkMode}
//             key="right-circle-page2"
//           />
//         </>
//       )}

//       {currentPage === 0 && (
//         <NavigationCircle
//           direction="right"
//           onNavigate={navigateRight}
//           size={600}
//           activeColor={darkMode ? "#60A5FA" : "#3B82F6"}
//           inactiveColor={darkMode ? "#9CA3AF" : "#6B7280"}
//           showMenu={true}
//           textPosition="left"
//           darkMode={darkMode}
//           key="right-circle-page1"
//         />
//       )}

//       {currentPage === 2 && (
//         <NavigationCircle
//           direction="left"
//           onNavigate={navigateLeft}
//           size={600}
//           activeColor={darkMode ? "#60A5FA" : "#3B82F6"}
//           inactiveColor={darkMode ? "#9CA3AF" : "#6B7280"}
//           showMenu={true}
//           textPosition="right"
//           darkMode={darkMode}
//           key="left-circle-page3"
//         />
//       )}

//       <div
//         className="absolute w-full h-full flex smooth-transform"
//         style={{
//           transform: `translateX(-${currentPage * 100}%)`,
//           transition: "all 800ms cubic-bezier(0.65, 0, 0.35, 1)",
//         }}
//       >
//         {pages.map((page, index) => (
//           <div
//             key={index}
//             className="min-w-full h-full flex-shrink-0 smooth-transform"
//             style={{
//               opacity: currentPage === index ? 1 : 0.8,
//               transition: "all 800ms cubic-bezier(0.65, 0, 0.35, 1)",
//             }}
//           >
//             <Page content={page.content} />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SweepNavigation;

import React, { useState, useEffect } from "react";
import DarkModeButton from "../components/ui/DarkmodeButton";
import useDarkMode from "../hooks/useDarkMode";
import AboutPage from "./AboutPage";
import Homepage from "./Homepage";
import WorkPage from "./WorkPage";

interface NavigationCircleProps {
  onNavigate?: () => void;
  direction: "left" | "right";
  className?: string;
  size?: number;
  activeColor?: string;
  inactiveColor?: string;
  showMenu?: boolean;
  textPosition?: "left" | "right";
  darkMode?: boolean;
}

interface PageProps {
  content: React.ReactNode;
}

interface SweepNavigationProps {
  pages?: Array<{ content: React.ReactNode }>;
  currentPageIndex?: number;
  onPageChange?: (index: number) => void;
}

const defaultPages = [
  { content: <AboutPage /> },
  { content: <Homepage /> },
  { content: <WorkPage /> },
];

const Page: React.FC<PageProps> = ({ content }) => (
  <div className="w-full h-full">{content}</div>
);

const NavigationCircle: React.FC<NavigationCircleProps> = ({
  onNavigate,
  direction,
  className = "",
  size = 600,
  activeColor = "rgb(96, 165, 250)",
  inactiveColor = "rgb(156, 163, 175)",
  showMenu = false,
  textPosition = "right",
  darkMode = false,
}) => {
  const [isMinimized, setIsMinimized] = useState(true);
  const [menuRotation, setMenuRotation] = useState(-180);
  const [activeIndex, setActiveIndex] = useState(0);

  const outerRadius = 360;
  const arcCircumference = 2 * Math.PI * outerRadius;
  const halfCircumference = arcCircumference / 2;

  const menuItems =
    textPosition === "left"
      ? [
          { label: "Frontend", active: true },
          { label: "Backend", active: false },
          { label: "Database", active: false },
          { label: "DevOps", active: false },
          { label: "Mobile", active: false },
          { label: "Testing", active: false },
        ]
      : [
          { label: "Web App", active: true },
          { label: "VS Theme", active: false },
          { label: "Analytics", active: false },
          { label: "Cloud App", active: false },
          { label: "Security", active: false },
          { label: "AI Tools", active: false },
        ];

  const getPosition = (index: number, total: number) => {
    const startAngle = 20;
    const endAngle = 160;
    const angleStep = (endAngle - startAngle) / (total - 1);
    const angle = startAngle + index * angleStep;
    const radian = (angle * Math.PI) / 180;

    const radius = 230;
    const xOffset = textPosition === "left" ? -20 : 20;

    return {
      x:
        textPosition === "left"
          ? 250 - Math.sin(radian) * radius + xOffset
          : 250 + Math.sin(radian) * radius + xOffset,
      y: 250 - Math.cos(radian) * radius,
    };
  };

  const handleInnerCircleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onNavigate) {
      setIsMinimized(true);
      setMenuRotation(-180);
      setTimeout(onNavigate, 100);
    }
  };

  useEffect(() => {
    if (showMenu) {
      setIsMinimized(false);
      setMenuRotation(0);
    } else {
      setIsMinimized(true);
      setMenuRotation(-180);
    }
  }, [showMenu]);

  const positionClass =
    direction === "left"
      ? "fixed left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2"
      : "fixed right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2";

  const createArcPath = () => {
    const startX = 250;
    const startY = 250 - outerRadius;
    const endX = 250;
    const endY = 250 + outerRadius;
    return `M ${startX} ${startY} A ${outerRadius} ${outerRadius} 0 0 1 ${endX} ${endY}`;
  };

  return (
    <div className="hidden md:block">
      <div className={`${positionClass} ${className} z-40`}>
        <div
          className={`relative transition-all duration-700 ease-in-out
            ${isMinimized ? "scale-50" : "scale-100"}`}
          style={{ width: size, height: size }}
        >
          <svg
            className="w-full h-full transition-transform duration-700 ease-in-out overflow-visible"
            viewBox="0 0 500 500"
            style={{ transform: `rotate(${menuRotation}deg)` }}
          >
            <g className="transition-transform duration-700 ease-in-out">
              <circle
                cx="250"
                cy="250"
                r="360"
                className={`${
                  darkMode ? "fill-gray-900" : "fill-white"
                } opacity-5`}
              />

              <circle
                cx="250"
                cy="250"
                r="210"
                className={darkMode ? "fill-white" : "fill-black"}
              />

              <circle
                cx="250"
                cy="250"
                r="187"
                className={darkMode ? "fill-gray-900" : "fill-white"}
              />

              <circle
                cx="250"
                cy="250"
                r="135"
                className={darkMode ? "fill-white" : "fill-black"}
                onClick={handleInnerCircleClick}
              />

              <circle
                cx="250"
                cy="250"
                r="360"
                fill="none"
                className={darkMode ? "stroke-white/20" : "stroke-black/20"}
                strokeWidth="2"
              />

              <circle
                cx="250"
                cy="250"
                r="210"
                fill="none"
                className={darkMode ? "stroke-white/40" : "stroke-gray-500/40"}
                strokeWidth="2"
              />

              <circle
                cx="250"
                cy="250"
                r="187"
                fill="none"
                className={darkMode ? "stroke-white/50" : "stroke-gray-500/50"}
                strokeWidth="2"
              />

              <circle
                cx="250"
                cy="250"
                r="135"
                fill="none"
                className={darkMode ? "stroke-white/60" : "stroke-gray-500/60"}
                strokeWidth="2"
              />

              <path
                d={createArcPath()}
                fill="none"
                stroke={activeColor}
                strokeWidth="3"
                className="transition-all duration-300 opacity-30"
                strokeDasharray={`${
                  ((activeIndex + 1) * halfCircumference) / 6
                }, ${halfCircumference}`}
              />
            </g>

            <g
              className={`transition-opacity duration-500 ${
                isMinimized ? "opacity-0" : "opacity-100"
              }`}
            >
              {menuItems.map((item, index) => {
                const pos = getPosition(index, menuItems.length);
                return (
                  <g
                    key={item.label}
                    onClick={() => setActiveIndex(index)}
                    className="cursor-pointer transition-all duration-300"
                    style={{ opacity: isMinimized ? 0 : 1 }}
                  >
                    <text
                      x={pos.x}
                      y={pos.y}
                      fill={index === activeIndex ? activeColor : inactiveColor}
                      fontSize="16"
                      textAnchor={textPosition === "left" ? "end" : "start"}
                      alignmentBaseline="middle"
                      className={`transition-all duration-300 hover:${
                        darkMode ? "fill-gray-300" : "fill-gray-600"
                      }`}
                    >
                      {item.label}
                    </text>
                  </g>
                );
              })}
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
};

const SweepNavigation: React.FC<SweepNavigationProps> = ({
  pages = defaultPages,
  currentPageIndex = 1,
  onPageChange,
}) => {
  const [currentPage, setCurrentPage] = useState<number>(currentPageIndex);
  const [isAnimating, setIsAnimating] = useState(false);
  const [darkMode] = useDarkMode();

  useEffect(() => {
    setCurrentPage(currentPageIndex);
  }, [currentPageIndex]);

  const navigateLeft = () => {
    if (currentPage > 0 && !isAnimating) {
      setIsAnimating(true);
      const newPage = currentPage - 1;
      setCurrentPage(newPage);
      onPageChange?.(newPage);
      setTimeout(() => setIsAnimating(false), 800);
    }
  };

  const navigateRight = () => {
    if (currentPage < pages.length - 1 && !isAnimating) {
      setIsAnimating(true);
      const newPage = currentPage + 1;
      setCurrentPage(newPage);
      onPageChange?.(newPage);
      setTimeout(() => setIsAnimating(false), 800);
    }
  };

  if (!pages || pages.length === 0) {
    return null;
  }

  return (
    <div
      className={`relative w-screen h-screen overflow-hidden transition-colors duration-300 ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      <DarkModeButton />

      {currentPage === 1 && (
        <>
          <NavigationCircle
            direction="left"
            onNavigate={navigateLeft}
            size={600}
            activeColor={darkMode ? "#60A5FA" : "#3B82F6"}
            inactiveColor={darkMode ? "#9CA3AF" : "#6B7280"}
            showMenu={false}
            darkMode={darkMode}
            key="left-circle-page2"
          />
          <NavigationCircle
            direction="right"
            onNavigate={navigateRight}
            size={600}
            activeColor={darkMode ? "#60A5FA" : "#3B82F6"}
            inactiveColor={darkMode ? "#9CA3AF" : "#6B7280"}
            showMenu={false}
            darkMode={darkMode}
            key="right-circle-page2"
          />
        </>
      )}

      {currentPage === 0 && (
        <NavigationCircle
          direction="right"
          onNavigate={navigateRight}
          size={600}
          activeColor={darkMode ? "#60A5FA" : "#3B82F6"}
          inactiveColor={darkMode ? "#9CA3AF" : "#6B7280"}
          showMenu={true}
          textPosition="left"
          darkMode={darkMode}
          key="right-circle-page1"
        />
      )}

      {currentPage === 2 && (
        <NavigationCircle
          direction="left"
          onNavigate={navigateLeft}
          size={600}
          activeColor={darkMode ? "#60A5FA" : "#3B82F6"}
          inactiveColor={darkMode ? "#9CA3AF" : "#6B7280"}
          showMenu={true}
          textPosition="right"
          darkMode={darkMode}
          key="left-circle-page3"
        />
      )}

      <div
        className="absolute w-full h-full flex smooth-transform"
        style={{
          transform: `translateX(-${currentPage * 100}%)`,
          transition: "all 800ms cubic-bezier(0.65, 0, 0.35, 1)",
        }}
      >
        {pages.map((page, index) => (
          <div
            key={index}
            className="min-w-full h-full flex-shrink-0 smooth-transform"
            style={{
              opacity: currentPage === index ? 1 : 0.8,
              transition: "all 800ms cubic-bezier(0.65, 0, 0.35, 1)",
            }}
          >
            <Page content={page.content} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SweepNavigation;
