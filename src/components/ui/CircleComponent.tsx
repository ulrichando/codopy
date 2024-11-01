// CircleComponent.tsx
import { ReactNode } from "react";

interface CircleProps {
  radius?: number;
  color?: string;
  to?: string;
  borderWidth?: number;
  children?: ReactNode;
  className?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
}

export const Circle: React.FC<CircleProps> = ({
  radius = 50,
  // color = "lightblue",
  borderWidth = 2,
  children,
  className = "",
  onClick,
  style = {},
}) => {
  const diameter = radius * 2;
  const circleStyle: React.CSSProperties = {
    width: `${diameter}px`,
    height: `${diameter}px`,
    borderRadius: "50%",
    borderWidth: `${borderWidth}px`,
    borderStyle: "none",
    borderColor: "black",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    ...style,
  };

  return (
    <div style={circleStyle} className={className} onClick={onClick}>
      {children}
    </div>
  );
};

export default Circle;
