import React from "react";
import useDarkMode from "../hooks/useDarkMode";
import "../App.scss";

interface LogoProps {
  onNavigate: () => void;
}

const Logo: React.FC<LogoProps> = ({ onNavigate }) => {
  const [darkMode] = useDarkMode();

  const handleLogoClick = () => {
    onNavigate();
  };

  // Use white in dark mode (Vercel style), black in light mode
  const logoColor = darkMode ? "#FAFAFA" : "#000000";

  return (
    <div className="logo-container">
      <button onClick={handleLogoClick} className="logo-button">
        <svg
          id="Layer_1"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 171 198"
          className="logo-image"
        >
          <path
            fill={logoColor}
            d="M153.5,50c0,2.64-.58,5.15-1.62,7.41-2.8,6.1-8.97,10.34-16.13,10.34-9.8,0-17.75-7.95-17.75-17.75,0-7.16,4.24-13.33,10.34-16.13,2.26-1.04,4.77-1.62,7.41-1.62,9.8,0,17.75,7.95,17.75,17.75Z"
          />
          <path
            fill={logoColor}
            d="M141.24,145.99c-12.97,12.83-30.81,20.76-50.49,20.76-39.63,0-71.75-32.12-71.75-71.75l-.5-71.75h45v45s.5,19.49.5,26.75c0,14.77,11.98,26.75,26.75,26.75,7.26,0,13.84-2.9,18.65-7.6l8.1,8.1,23.74,23.74Z"
          />
        </svg>
      </button>
    </div>
  );
};

export default Logo;
