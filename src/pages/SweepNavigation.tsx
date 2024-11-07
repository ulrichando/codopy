import React, { useState, useEffect } from "react";

interface NavigationCircleProps {
  onNavigate?: () => void;
  direction: "left" | "right";
  className?: string;
  size?: number;
  activeColor?: string;
  inactiveColor?: string;
  showMenu?: boolean;
  textPosition?: "left" | "right";
}

interface PageProps {
  content: React.ReactNode;
}

interface SweepNavigationProps {
  pages?: Array<{ content: React.ReactNode }>;
}

const defaultPages = [
  { content: <div>Page 1</div> },
  { content: <div>Page 2</div> },
  { content: <div>Page 3</div> },
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
}) => {
  const [isMinimized, setIsMinimized] = useState(true);
  const [menuRotation, setMenuRotation] = useState(-180);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setIsMinimized(true);
    setMenuRotation(-180);
  }, []);

  const menuItems =
    textPosition === "left"
      ? [
          { label: "Work", active: true },
          { label: "Projects", active: false },
          { label: "Contact", active: false },
        ]
      : [
          { label: "About", active: true },
          { label: "Profile", active: false },
          { label: "Skills", active: false },
        ];

  const getPosition = (index: number, total: number) => {
    const angleStep = 180 / (total + 1);
    const angle = (index + 1) * angleStep;
    const radian = (angle * Math.PI) / 180;
    const radius = 285;
    const x =
      textPosition === "left"
        ? 250 - Math.sin(radian) * radius
        : 250 + Math.sin(radian) * radius;
    const y = 250 - Math.cos(radian) * radius;
    return { x, y };
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

  return (
    <div className={`${positionClass} ${className} z-40`}>
      <div
        className={`relative transition-all duration-700 ease-in-out
          ${isMinimized ? "scale-50" : "scale-100"}`}
        style={{ width: size, height: size }}
      >
        <svg
          className="w-full h-full transition-transform duration-700 ease-in-out"
          viewBox="0 0 500 500"
          style={{ transform: `rotate(${menuRotation}deg)` }}
        >
          <g className="transition-transform duration-700 ease-in-out">
            <circle
              cx="250"
              cy="250"
              r="360"
              fill="white"
              className="opacity-5"
            />

            <circle cx="250" cy="250" r="210" fill="black" />

            <circle cx="250" cy="250" r="187" fill="white" />

            <circle
              cx="250"
              cy="250"
              r="135"
              fill="black"
              className=""
              onClick={handleInnerCircleClick}
            />

            <circle
              cx="250"
              cy="250"
              r="360"
              fill="none"
              stroke="rgba(0, 0, 0, 0.2)"
              strokeWidth="2"
            />

            <circle
              cx="250"
              cy="250"
              r="210"
              fill="none"
              stroke="rgba(75, 85, 99, 0.4)"
              strokeWidth="2"
            />

            <circle
              cx="250"
              cy="250"
              r="187"
              fill="none"
              stroke="rgba(75, 85, 99, 0.5)"
              strokeWidth="2"
            />

            <circle
              cx="250"
              cy="250"
              r="135"
              fill="none"
              stroke="rgba(75, 85, 99, 0.6)"
              strokeWidth="2"
            />

            <path
              d={`M 250 10 A 360 360 0 0 1 250 490`}
              fill="none"
              stroke={activeColor}
              strokeWidth="3"
              className="transition-all duration-300 opacity-30"
              strokeDasharray={`${(activeIndex + 1) * (1130 / 4)}, 1130`}
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
                  className=""
                >
                  <text
                    x={pos.x}
                    y={pos.y}
                    fill={index === activeIndex ? activeColor : inactiveColor}
                    fontSize="16"
                    textAnchor="middle"
                    alignmentBaseline="middle"
                    className="transition-opacity duration-300 hover:fill-gray-300"
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
  );
};

const SweepNavigation: React.FC<SweepNavigationProps> = ({
  pages = defaultPages,
}) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isAnimating, setIsAnimating] = useState(false);

  const navigateLeft = () => {
    if (currentPage > 0 && !isAnimating) {
      setIsAnimating(true);
      setCurrentPage(currentPage - 1);
      setTimeout(() => setIsAnimating(false), 800);
    }
  };

  const navigateRight = () => {
    if (currentPage < pages.length - 1 && !isAnimating) {
      setIsAnimating(true);
      setCurrentPage(currentPage + 1);
      setTimeout(() => setIsAnimating(false), 800);
    }
  };

  if (!pages || pages.length === 0) {
    return null;
  }

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {currentPage === 1 && (
        <>
          <NavigationCircle
            direction="left"
            onNavigate={navigateLeft}
            size={600}
            activeColor="#3B82F6"
            inactiveColor="#9CA3AF"
            showMenu={false}
            key="left-circle-page2"
          />
          <NavigationCircle
            direction="right"
            onNavigate={navigateRight}
            size={600}
            activeColor="#3B82F6"
            inactiveColor="#9CA3AF"
            showMenu={false}
            key="right-circle-page2"
          />
        </>
      )}

      {currentPage === 0 && (
        <NavigationCircle
          direction="right"
          onNavigate={navigateRight}
          size={600}
          activeColor="#3B82F6"
          inactiveColor="#9CA3AF"
          showMenu={true}
          textPosition="left"
          key="right-circle-page1"
        />
      )}

      {currentPage === 2 && (
        <NavigationCircle
          direction="left"
          onNavigate={navigateLeft}
          size={600}
          activeColor="#3B82F6"
          inactiveColor="#9CA3AF"
          showMenu={true}
          textPosition="right"
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

      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {pages.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              currentPage === index ? "bg-black/70 w-4" : "bg-black/30"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default SweepNavigation;
