// src/pages/SweepNavigation.tsx
import React, { useState, useEffect } from "react";
import DarkModeButton from "../components/ui/DarkmodeButton";
import useDarkMode from "../hooks/useDarkMode";
import AboutPage from "./AboutPage";
import Homepage from "./Homepage";
import WorkPage from "./WorkPage";
import Header from "../layouts/Header";
import ContactPage from "./ContactPage";

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

interface MenuItem {
  label: string;
  active: boolean;
  section: number;
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
  { content: <ContactPage /> },
];

// Extended menu items organized by sides
const allMenuItems: Record<string, MenuItem[]> = {
  left: [
    { label: "Frontend", active: false, section: 0 },
    { label: "Backend", active: false, section: 0 },
    { label: "Database", active: false, section: 0 },
    { label: "DevOps", active: false, section: 0 },
    { label: "Mobile", active: false, section: 0 },
    { label: "Testing", active: false, section: 0 },
  ],
  right: [
    { label: "Web App", active: false, section: 1 },
    { label: "VS Theme", active: false, section: 1 },
    { label: "Analytics", active: false, section: 1 },
    { label: "Cloud App", active: false, section: 1 },
    { label: "Security", active: false, section: 1 },
    { label: "AI Tools", active: false, section: 1 },
  ],
};

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

  // Get menu items based on direction
  const menuItems = allMenuItems[direction];

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

// Continuation of SweepNavigation.tsx

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
      <Header
        currentPage={currentPage}
        onNavigate={(index) => {
          if (!isAnimating) {
            setIsAnimating(true);
            setCurrentPage(index);
            onPageChange?.(index);
            setTimeout(() => setIsAnimating(false), 800);
          }
        }}
      />
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
            textPosition="left"
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
            textPosition="right"
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
