// src/pages/SweepNavigation.tsx
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Homepage from "./Homepage";
import AboutPage from "./AboutPage";
import WorkPage from "./WorkPage";
import { PageProps } from "../types/types";

const Page: React.FC<PageProps> = ({ content }) => (
  <div className="w-full h-full">{content}</div>
);

const SweepNavigation: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1); // Default to second page (Homepage)

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
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const navigateRight = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* Navigation Buttons */}
      {currentPage > 0 && (
        <button
          onClick={navigateLeft}
          className="fixed left-4 top-1/2 -translate-y-1/2 z-[100] w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-all duration-300 ease-in-out hover:scale-110"
          aria-label="Previous page"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      )}
      {currentPage < pages.length - 1 && (
        <button
          onClick={navigateRight}
          className="fixed right-4 top-1/2 -translate-y-1/2 z-[100] w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-all duration-300 ease-in-out hover:scale-110"
          aria-label="Next page"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      )}

      {/* Pages Container */}
      <div
        className="absolute w-full h-full flex transition-transform duration-[800ms] ease-in-out"
        style={{
          transform: `translateX(-${currentPage * 100}%)`,
          transitionTimingFunction: "cubic-bezier(0.65, 0, 0.35, 1)",
        }}
      >
        {pages.map((page, index) => (
          <div
            key={index}
            className="min-w-full h-full transform transition-opacity duration-[800ms] ease-in-out"
            style={{
              opacity: currentPage === index ? 1 : 0.7,
              transition: "opacity 800ms cubic-bezier(0.65, 0, 0.35, 1)",
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
