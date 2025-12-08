import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Play, X } from "lucide-react";
import useDarkMode from "../../hooks/useDarkMode";

interface PlayButtonProps {
  videoId: string;
}

const PlayButton: React.FC<PlayButtonProps> = ({ videoId }) => {
  const [darkMode] = useDarkMode();
  const [isOpen, setIsOpen] = useState(false);

  const handlePlayClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  // Disable transforms on body when modal is open (fixes black screen issue)
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <button
        onClick={handlePlayClick}
        aria-label="Play video"
        className="relative w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 cursor-pointer"
        style={{
          backgroundColor: darkMode ? "#FAFAFA" : "#000000",
          boxShadow: darkMode
            ? "0 0 0 3px #FAFAFA, 0 4px 15px rgba(255,255,255,0.3)"
            : "0 0 0 3px #000000, 0 4px 15px rgba(0,0,0,0.3)",
        }}
      >
        <Play
          className="w-6 h-6 md:w-8 md:h-8 ml-1"
          fill={darkMode ? "#000000" : "#FFFFFF"}
          color={darkMode ? "#000000" : "#FFFFFF"}
        />
      </button>

      {isOpen &&
        createPortal(
          <div
            onClick={handleClose}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              backgroundColor: "rgba(0, 0, 0, 0.9)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 999999,
              /* Critical: Remove all transforms that could cause black screen */
              transform: "none",
              WebkitTransform: "none",
              MozTransform: "none",
            }}
          >
            {/* Close button */}
            <button
              onClick={handleClose}
              style={{
                position: "absolute",
                top: "20px",
                right: "20px",
                backgroundColor: "rgba(255, 255, 255, 0.2)",
                border: "none",
                borderRadius: "50%",
                width: "44px",
                height: "44px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                zIndex: 1000000,
              }}
            >
              <X color="#FFFFFF" size={24} />
            </button>

            {/* Video container - NO border-radius, NO transforms */}
            <div
              onClick={(e) => e.stopPropagation()}
              style={{
                width: "90vw",
                maxWidth: "800px",
                height: "auto",
                backgroundColor: "#000",
                /* Remove border-radius - can cause black screen in some browsers */
                borderRadius: "0",
                overflow: "visible",
                transform: "none",
                WebkitTransform: "none",
                MozTransform: "none",
              }}
            >
              {/* iframe with explicit dimensions */}
              <iframe
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&html5=1&playsinline=1`}
                title="YouTube video"
                width="100%"
                height="450"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                style={{
                  display: "block",
                  width: "100%",
                  height: "450px",
                  border: "none",
                  borderRadius: "0",
                  /* Critical: No transforms on iframe */
                  transform: "none",
                  WebkitTransform: "none",
                  MozTransform: "none",
                }}
              />
            </div>
          </div>,
          document.body
        )}
    </>
  );
};

export default PlayButton;
