import React, { useState, useEffect, useRef } from "react";
import useDarkMode from "../hooks/useDarkMode";
import AboutPage from "./SkillPage";
import Homepage from "./HomePage";
import WorkPage from "./WorkPage";
import Header from "../layouts/Header";
import ContactPage from "./ContactPage";
import "../App.scss";
import Logo from "../layouts/logo";

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
  menuItems?: MenuItem[];
  onMenuItemClick?: (index: number) => void;
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

// Skills menu items (for Skills page - left side)
const skillsMenuItems: MenuItem[] = [
  { label: "Frontend", active: false, section: 0 },
  { label: "Backend", active: false, section: 0 },
  { label: "Database", active: false, section: 0 },
  { label: "Tools", active: false, section: 0 },
  { label: "Testing", active: false, section: 0 },
  { label: "Security", active: false, section: 0 },
];

// Project menu items (for Work page - right side) - all 13 projects with shortened names
const projectMenuItems: MenuItem[] = [
  { label: "Codopy", active: false, section: 2 },
  { label: "CodingKiddos", active: false, section: 2 },
  { label: "Realestate", active: false, section: 2 },
  { label: "RealState", active: false, section: 2 },
  { label: "Matrix Dark", active: false, section: 2 },
  { label: "Excel Tracker", active: false, section: 2 },
  { label: "VideoConf", active: false, section: 2 },
  { label: "Web2", active: false, section: 2 },
  { label: "Mywebsite", active: false, section: 2 },
  { label: "Exploit", active: false, section: 2 },
  { label: "Log Fixer", active: false, section: 2 },
  { label: "Clark Master", active: false, section: 2 },
  { label: "Profile README", active: false, section: 2 },
];

const Page: React.FC<PageProps> = ({ content }) => (
  <div className="w-full h-full">{content}</div>
);

const VISIBLE_ITEMS = 6; // Number of items visible at once

const NavigationCircle: React.FC<NavigationCircleProps> = ({
  onNavigate,
  direction,
  className = "",
  size = 600,
  inactiveColor = "rgb(156, 163, 175)",
  showMenu = false,
  textPosition = "right",
  darkMode = false,
  menuItems = [],
  onMenuItemClick,
}) => {
  const [isMinimized, setIsMinimized] = useState(true);
  const [menuRotation, setMenuRotation] = useState(-180);
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollOffset, setScrollOffset] = useState(0);
  const circleRef = useRef<HTMLDivElement>(null);

  // Get visible items based on scroll offset (proper slicing, no wrap-around)
  const getVisibleItems = () => {
    const totalItems = menuItems.length;
    if (totalItems <= VISIBLE_ITEMS) {
      return menuItems.map((item, i) => ({ ...item, originalIndex: i }));
    }

    // Slice the array from scrollOffset, taking VISIBLE_ITEMS
    const endIndex = Math.min(scrollOffset + VISIBLE_ITEMS, totalItems);
    const slicedItems = menuItems.slice(scrollOffset, endIndex);
    return slicedItems.map((item, i) => ({ ...item, originalIndex: scrollOffset + i }));
  };

  const visibleItems = getVisibleItems();
  const hasMoreAbove = menuItems.length > VISIBLE_ITEMS && scrollOffset > 0;
  const hasMoreBelow = menuItems.length > VISIBLE_ITEMS && scrollOffset < menuItems.length - VISIBLE_ITEMS;

  // Calculate position for each menu item - symmetrical around 90° (vertical center)
  const getPosition = (index: number) => {
    // Symmetric arc: 30° to 150° (centered around 90°)
    const startAngle = 30;
    const endAngle = 150;
    const angleStep = (endAngle - startAngle) / (VISIBLE_ITEMS - 1);
    const angle = startAngle + index * angleStep;
    const radian = (angle * Math.PI) / 180;

    const radius = 190;

    return {
      x:
        textPosition === "left"
          ? 250 - Math.sin(radian) * radius
          : 250 + Math.sin(radian) * radius,
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

  const handleMenuItemClick = (originalIndex: number, visibleIndex: number) => {
    setActiveIndex(originalIndex);

    // Auto-scroll logic: if clicking near edges, scroll to reveal more items
    const totalItems = menuItems.length;
    const maxOffset = totalItems - VISIBLE_ITEMS;

    if (totalItems > VISIBLE_ITEMS) {
      // If clicking on last 2 visible items and there are more below, scroll down
      if (visibleIndex >= VISIBLE_ITEMS - 2 && scrollOffset < maxOffset) {
        const scrollAmount = Math.min(2, maxOffset - scrollOffset);
        setScrollOffset(prev => prev + scrollAmount);
      }
      // If clicking on first 2 visible items and there are more above, scroll up
      else if (visibleIndex <= 1 && scrollOffset > 0) {
        const scrollAmount = Math.min(2, scrollOffset);
        setScrollOffset(prev => prev - scrollAmount);
      }
    }

    if (onMenuItemClick) {
      onMenuItemClick(originalIndex);
    }
  };

  // Scroll wheel handler using native event listener for proper preventDefault
  useEffect(() => {
    const element = circleRef.current;
    if (!element || !showMenu || menuItems.length <= VISIBLE_ITEMS) return;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      const delta = e.deltaY > 0 ? 1 : -1;
      setScrollOffset(prev => {
        const newOffset = prev + delta;
        const maxOffset = menuItems.length - VISIBLE_ITEMS;
        return Math.max(0, Math.min(maxOffset, newOffset));
      });
    };

    element.addEventListener("wheel", handleWheel, { passive: false });
    return () => element.removeEventListener("wheel", handleWheel);
  }, [showMenu, menuItems.length]);

  useEffect(() => {
    if (showMenu) {
      setIsMinimized(false);
      setMenuRotation(0);
    } else {
      setIsMinimized(true);
      setMenuRotation(-180);
      setScrollOffset(0);
    }
  }, [showMenu]);

  const positionClass =
    direction === "left"
      ? "fixed left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2"
      : "fixed right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2";

  // Get indicator position for scroll arrows - evenly spaced with menu items
  const getIndicatorPosition = (isTop: boolean) => {
    // Menu items are 24° apart (30° to 150° for 6 items)
    // Place indicators at same 24° spacing: 6° above first item, 174° below last item
    const angle = isTop ? 6 : 174;
    const radian = (angle * Math.PI) / 180;
    const radius = 190;

    return {
      x:
        textPosition === "left"
          ? 250 - Math.sin(radian) * radius
          : 250 + Math.sin(radian) * radius,
      y: 250 - Math.cos(radian) * radius,
    };
  };

  return (
    <div className="hidden md:block">
      <div className={`${positionClass} ${className} z-40`}>
        <div
          ref={circleRef}
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
              {/* Outer glow circle */}
              <circle
                cx="250"
                cy="250"
                r="320"
                fill={darkMode ? "#111111" : "#FFFFFF"}
                opacity="0.3"
              />

              {/* Main ring - white in dark mode for Vercel style */}
              <circle
                cx="250"
                cy="250"
                r="170"
                fill={darkMode ? "#FAFAFA" : "#000000"}
              />

              {/* Middle band - pure black */}
              <circle
                cx="250"
                cy="250"
                r="147"
                fill={darkMode ? "#000000" : "#FFFFFF"}
              />

              {/* Inner clickable circle - white accent */}
              <circle
                cx="250"
                cy="250"
                r="95"
                fill={darkMode ? "#FAFAFA" : "#000000"}
                onClick={handleInnerCircleClick}
                style={{ cursor: "pointer" }}
              />

              {/* Stroke rings */}
              <circle
                cx="250"
                cy="250"
                r="300"
                fill="none"
                stroke={darkMode ? "#333333" : "#000000"}
                strokeOpacity={darkMode ? 0.5 : 0.2}
                strokeWidth="2"
              />

              <circle
                cx="250"
                cy="250"
                r="170"
                fill="none"
                stroke={darkMode ? "#444444" : "#6B7280"}
                strokeOpacity={darkMode ? 0.6 : 0.4}
                strokeWidth="2"
              />

              <circle
                cx="250"
                cy="250"
                r="147"
                fill="none"
                stroke={darkMode ? "#333333" : "#6B7280"}
                strokeOpacity={darkMode ? 0.5 : 0.5}
                strokeWidth="2"
              />

              <circle
                cx="250"
                cy="250"
                r="95"
                fill="none"
                stroke={darkMode ? "#444444" : "#6B7280"}
                strokeOpacity={darkMode ? 0.6 : 0.6}
                strokeWidth="2"
              />
            </g>

            <g
              className={`transition-opacity duration-500 ${
                isMinimized ? "opacity-0" : "opacity-100"
              }`}
            >
              {/* Indicator for more items above */}
              {hasMoreAbove && !isMinimized && (
                <g>
                  <text
                    x={getIndicatorPosition(true).x}
                    y={getIndicatorPosition(true).y}
                    fill={darkMode ? "#FFFFFF" : "#000000"}
                    fontSize="12"
                    fontWeight="500"
                    textAnchor={textPosition === "left" ? "end" : "start"}
                    alignmentBaseline="middle"
                  >
                    ▲ +{scrollOffset} more
                  </text>
                </g>
              )}

              {/* Visible menu items */}
              {visibleItems.map((item, index) => {
                const pos = getPosition(index);
                return (
                  <g
                    key={`${item.label}-${item.originalIndex}`}
                    onClick={() => handleMenuItemClick(item.originalIndex, index)}
                    className="cursor-pointer"
                    style={{ opacity: isMinimized ? 0 : 1 }}
                  >
                    <text
                      x={pos.x}
                      y={pos.y}
                      fill={item.originalIndex === activeIndex
                        ? (darkMode ? "#FFFFFF" : "#000000")
                        : inactiveColor}
                      fontSize="16"
                      fontWeight={item.originalIndex === activeIndex ? "700" : "400"}
                      textAnchor={textPosition === "left" ? "end" : "start"}
                      alignmentBaseline="middle"
                      style={{
                        cursor: "pointer",
                        transition: "all 0.3s ease"
                      }}
                    >
                      {item.label}
                    </text>
                  </g>
                );
              })}

              {/* Indicator for more items below */}
              {hasMoreBelow && !isMinimized && (
                <g>
                  <text
                    x={getIndicatorPosition(false).x}
                    y={getIndicatorPosition(false).y}
                    fill={darkMode ? "#FFFFFF" : "#000000"}
                    fontSize="12"
                    fontWeight="500"
                    textAnchor={textPosition === "left" ? "end" : "start"}
                    alignmentBaseline="middle"
                  >
                    ▼ +{menuItems.length - scrollOffset - VISIBLE_ITEMS} more
                  </text>
                </g>
              )}
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
};

const SweepNavigation: React.FC<SweepNavigationProps> = ({
  pages = [],
  currentPageIndex = 1,
  onPageChange,
}) => {
  const [currentPage, setCurrentPage] = useState<number>(currentPageIndex);
  const [isAnimating, setIsAnimating] = useState(false);
  const [darkMode, toggleDarkMode] = useDarkMode();

  // Default pages if none provided
  const defaultPages = [
    { content: <AboutPage /> },
    { content: <Homepage /> },
    { content: <WorkPage /> },
    { content: <ContactPage /> },
  ];

  const actualPages = pages.length > 0 ? pages : defaultPages;

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
    if (currentPage < actualPages.length - 1 && !isAnimating) {
      setIsAnimating(true);
      const newPage = currentPage + 1;
      setCurrentPage(newPage);
      onPageChange?.(newPage);
      setTimeout(() => setIsAnimating(false), 800);
    }
  };

  const navigateToPage = (pageIndex: number) => {
    if (!isAnimating && pageIndex !== currentPage) {
      setIsAnimating(true);
      setCurrentPage(pageIndex);
      onPageChange?.(pageIndex);
      setTimeout(() => setIsAnimating(false), 800);
    }
  };

  // Handle project click - dispatch custom event to scroll in WorkPage
  const handleProjectClick = (index: number) => {
    const event = new CustomEvent("scrollToProject", { detail: { index } });
    window.dispatchEvent(event);
  };

  // Handle skill click - dispatch custom event to scroll in SkillPage
  const handleSkillClick = (index: number) => {
    const event = new CustomEvent("scrollToSkill", { detail: { index } });
    window.dispatchEvent(event);
  };

  if (!actualPages || actualPages.length === 0) {
    return null;
  }

  return (
    <div
      className={`relative w-screen h-screen overflow-hidden transition-colors duration-300 ${!darkMode ? "bg-white text-black" : ""}`}
      style={darkMode ? { backgroundColor: "#000000", color: "#FAFAFA" } : undefined}
    >
      <Header currentPage={currentPage} onNavigate={navigateToPage} />
      <Logo onNavigate={() => navigateToPage(1)} />

      {/* Dark Mode Toggle - Top Left */}
      <button
        onClick={toggleDarkMode}
        className={`fixed top-6 left-6 z-50 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg ${!darkMode ? "bg-gray-900 border-2 border-gray-200" : ""}`}
        style={darkMode ? { backgroundColor: "#111111", border: "2px solid #333333" } : undefined}
        aria-label="Toggle dark mode"
      >
        {darkMode ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#FFD93D"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="5" />
            <line x1="12" y1="1" x2="12" y2="3" />
            <line x1="12" y1="21" x2="12" y2="23" />
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
            <line x1="1" y1="12" x2="3" y2="12" />
            <line x1="21" y1="12" x2="23" y2="12" />
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#E4E4E7"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
        )}
      </button>

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
            menuItems={skillsMenuItems}
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
            menuItems={projectMenuItems}
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
          menuItems={skillsMenuItems}
          onMenuItemClick={handleSkillClick}
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
          menuItems={projectMenuItems}
          onMenuItemClick={handleProjectClick}
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
        {actualPages.map((page, index) => (
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
