import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import "./PlayButton.css";

interface PlayButtonTestProps {
  videoId: string;
}

const PlayButtonTest: React.FC<PlayButtonTestProps> = ({ videoId }) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  // Refs
  const playButtonRef = useRef<HTMLDivElement>(null);
  const playCircle1Ref = useRef<SVGCircleElement>(null);
  const playCircle2Ref = useRef<SVGCircleElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);
  const playPerspectiveRef = useRef<HTMLDivElement>(null);
  const playTriangleRef = useRef<HTMLDivElement>(null);
  const playVideoRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Initialize animations
  useEffect(() => {
    // Play button animations
    gsap.set(playCircle1Ref.current, {
      rotation: 90,
      transformOrigin: "center",
    });
    gsap.set(playCircle2Ref.current, {
      rotation: -90,
      transformOrigin: "center",
    });

    // Rotate animation
    const rotateTL = gsap
      .timeline({ paused: true })
      .to(
        playCircle1Ref.current,
        {
          duration: 0.7,
          rotation: "+=360",
          opacity: 0.1,
          strokeDasharray: "456 456",
          ease: "power1.inOut",
        },
        0
      )
      .to(
        playCircle2Ref.current,
        {
          duration: 0.7,
          rotation: "-=360",
          opacity: 0.1,
          strokeDasharray: "411 411",
          ease: "power1.inOut",
        },
        0
      );

    playButtonRef.current?.addEventListener("mouseover", () => rotateTL.play());
    playButtonRef.current?.addEventListener("mouseleave", () =>
      rotateTL.reverse()
    );

    // Cleanup
    return () => {
      rotateTL.kill();
    };
  }, []);

  // Open animation
  useEffect(() => {
    if (isPlaying) {
      // Wait for the DOM to update
      setTimeout(() => {
        // Video modal animations
        gsap.set(playPerspectiveRef.current, {
          xPercent: 6.5,
          scale: 0.175,
          transformOrigin: "center",
          perspective: 1,
        });
        gsap.set(playVideoRef.current, {
          visibility: "hidden",
          opacity: 0,
        });
        gsap.set(playTriangleRef.current, {
          transformOrigin: "left center",
          transformStyle: "preserve-3d",
          rotationY: 10,
          scaleX: 2,
        });

        const openTL = gsap
          .timeline()
          .to(
            backdropRef.current,
            {
              duration: 1,
              opacity: 0.95,
              visibility: "visible",
              ease: "power2.inOut",
            },
            0
          )
          .to(
            closeButtonRef.current,
            {
              duration: 1,
              opacity: 1,
              ease: "power2.inOut",
            },
            0
          )
          .to(
            playPerspectiveRef.current,
            {
              duration: 1,
              xPercent: 0,
              scale: 1,
              ease: "power2.inOut",
            },
            0
          )
          .to(
            playTriangleRef.current,
            {
              duration: 1,
              scaleX: 1,
              rotationY: 0,
              ease: "power2.inOut",
            },
            0
          )
          .to(
            playVideoRef.current,
            {
              duration: 1,
              visibility: "visible",
              opacity: 1,
              ease: "power2.inOut",
            },
            0.5
          );

        openTL.play();
      }, 0);
    }
  }, [isPlaying]);

  const handlePlayClick = () => {
    setIsPlaying(true);
    document.body.style.overflow = "hidden";
  };

  const handleClose = () => {
    setIsPlaying(false);
    document.body.style.overflow = "";
  };

  return (
    <>
      {/* Play Button */}
      <div
        className="play-button"
        ref={playButtonRef}
        onClick={handlePlayClick}
      >
        <svg className="play-circles" viewBox="0 0 152 152">
          <circle
            className="play-circle-01"
            ref={playCircle1Ref}
            fill="none"
            stroke="#fff"
            strokeWidth="3"
            strokeDasharray="343 343"
            cx="76"
            cy="76"
            r="72.7"
          />
          <circle
            className="play-circle-02"
            ref={playCircle2Ref}
            fill="none"
            stroke="#fff"
            strokeWidth="3"
            strokeDasharray="309 309"
            cx="76"
            cy="76"
            r="65.5"
          />
        </svg>
      </div>

      {/* Video Modal */}
      {isPlaying && (
        <>
          <div
            className="play-backdrop"
            ref={backdropRef}
            onClick={handleClose}
          ></div>
          <div className="play-perspective" ref={playPerspectiveRef}>
            <button
              className="play-close"
              ref={closeButtonRef}
              onClick={handleClose}
            ></button>
            <div className="play-triangle" ref={playTriangleRef}>
              <div className="play-video" ref={playVideoRef}>
                <iframe
                  src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  title="Video Player"
                ></iframe>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default PlayButtonTest;
