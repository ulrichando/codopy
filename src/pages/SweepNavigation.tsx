// src/pages/SweepNavigation.tsx
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Homepage from "./Homepage";
import AboutPage from "./AboutPage";
import WorkPage from "./WorkPage";
import { PageProps } from "../types/types";
import "../App.scss";

const Page: React.FC<PageProps> = ({ content }) => (
  <div className="w-full h-full">{content}</div>
);

const SweepNavigation: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isAnimating, setIsAnimating] = useState(false);

  const pages = [
    {
      content: <AboutPage />,
    },
    {
      content: <Homepage />,
    },
    {
      content: <WorkPage />,
    },
  ];

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

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* Navigation Buttons */}
      {currentPage > 0 && (
        <button
          onClick={navigateLeft}
          disabled={isAnimating}
          className="fixed left-4 top-1/2 -translate-y-1/2 z-[100] w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-all duration-300 ease-in-out hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Previous page"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      )}
      {currentPage < pages.length - 1 && (
        <button
          onClick={navigateRight}
          disabled={isAnimating}
          className="fixed right-4 top-1/2 -translate-y-1/2 z-[100] w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-all duration-300 ease-in-out hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Next page"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      )}

      {/* Pages Container */}
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

      {/* Page Indicators */}
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-[100]">
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
