import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Homepage from "./Homepage";
import AboutPage from "./AboutPage";
import WorkPage from "./WorkPage";
import { PageProps } from "../types/types";

const Page: React.FC<PageProps> = ({ content }) => (
  <div className="w-full h-full p-8">{content}</div>
);

const SweepNavigation: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1); // Default to second page

  const pages = [
    {
      title: "Page 1",
      content: <AboutPage />,
    },
    {
      title: "Page 2",
      content: <Homepage />,
    },
    {
      title: "Page 3",
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
          className="fixed left-4 top-1/2 -translate-y-1/2 z-50 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors"
          aria-label="Previous page"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      )}
      {currentPage < pages.length - 1 && (
        <button
          onClick={navigateRight}
          className="fixed right-4 top-1/2 -translate-y-1/2 z-50 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors"
          aria-label="Next page"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      )}

      {/* Pages Container */}
      <div
        className="absolute w-full h-full flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentPage * 100}%)` }}
      >
        {pages.map((page, index) => (
          <div key={index} className="min-w-full h-full bg-gray-50">
            <Page title={page.title} content={page.content} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SweepNavigation;
