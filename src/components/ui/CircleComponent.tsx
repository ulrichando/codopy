import React from "react";

interface CircleComponentProps {
  numberOfCircles: number;
}

const CircleComponent: React.FC<CircleComponentProps> = ({
  numberOfCircles,
}) => {
  return (
    <div className="flex justify-center items-center flex-wrap">
      {Array.from({ length: numberOfCircles }).map((_, index) => (
        <div
          key={index}
          className="m-4 bg-blue-500 rounded-full h-24 w-24 flex justify-center items-center animate-spin"
        >
          {/* Add content inside the circle if needed */}
        </div>
      ))}
    </div>
  );
};

export default CircleComponent;
