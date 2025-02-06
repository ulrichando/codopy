// src/components/PullToRefresh.tsx
import React, { useState, useEffect, ReactNode } from "react";

interface PullToRefreshProps {
  onRefresh: () => Promise<void>;
  children: ReactNode;
}

const PullToRefresh: React.FC<PullToRefreshProps> = ({
  onRefresh,
  children,
}) => {
  const [startY, setStartY] = useState<number>(0);
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const [pullDistance, setPullDistance] = useState<number>(0);
  const threshold = 150;

  useEffect(() => {
    if (!refreshing) {
      setPullDistance(0);
    }
  }, [refreshing]);

  const handleTouchStart = (e: React.TouchEvent): void => {
    if (window.scrollY === 0) {
      setStartY(e.touches[0].clientY);
    }
  };

  const handleTouchMove = (e: React.TouchEvent): void => {
    if (startY === 0 || refreshing || window.scrollY > 0) return;

    const currentY = e.touches[0].clientY;
    const distance = currentY - startY;

    if (distance > 0) {
      const dampedDistance = Math.min(distance * 0.4, threshold * 1.5);
      setPullDistance(dampedDistance);
      e.preventDefault();
    }
  };

  const handleTouchEnd = async (): Promise<void> => {
    if (pullDistance >= threshold && !refreshing) {
      setRefreshing(true);
      try {
        await onRefresh();
      } finally {
        setRefreshing(false);
      }
    }
    setStartY(0);
    setPullDistance(0);
  };

  return (
    <div
      className="relative w-full min-h-screen"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div
        className="absolute left-0 right-0 flex justify-center transition-transform duration-200 ease-out -top-16"
        style={{
          transform: `translateY(${pullDistance}px)`,
        }}
      >
        <div
          className={`h-16 flex items-center justify-center text-gray-500 ${
            refreshing ? "animate-spin" : ""
          }`}
        >
          {refreshing ? (
            <svg className="w-6 h-6" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M12 4V2A10 10 0 0 0 2 12h2a8 8 0 0 1 8-8Z"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6 transition-transform duration-200"
              style={{
                transform: `rotate(${(pullDistance / threshold) * 180}deg)`,
              }}
              viewBox="0 0 24 24"
            >
              <path fill="currentColor" d="M12 4V2M12 22v-2M4 12H2m20 0h-2" />
            </svg>
          )}
        </div>
      </div>

      <div
        style={{
          transform: `translateY(${pullDistance}px)`,
          transition: refreshing ? "none" : "transform 0.2s ease-out",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default PullToRefresh;
