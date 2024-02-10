// Footer.tsx
import React from "react";
import myIcon1 from "../../assets/images/1.svg";
import myIcon2 from "../../assets/images/2.svg";
import myIcon3 from "../../assets/images/3.svg";
import myIcon4 from "../../assets/images/4.svg";

interface FooterProps {
  sectionNames: string[];
  scrollToRef: (refName: string) => void;
}

const Footer: React.FC<FooterProps> = ({ sectionNames, scrollToRef }) => {
  const handleClick = (refName: string) => {
    scrollToRef(refName);
  };

  return (
    <footer className="fixed flex justify-between items-center bottom-0 w-full py-10 z-50">
      <div className="flex justify-center items-center">
        <div className="absolute flex left-0 gap-4 py-2 px-10">
          <p className="font-semibold text-gray-900">Ulrich Ando</p>
        </div>
        <div className="absolute flex gap-2 right-0 py-2 px-10">
          <a href="https://github.com/yourusername" rel="noopener noreferrer">
            <img src={myIcon1} alt="GitHub" />
          </a>
          <a href="https://twitter.com/yourusername" rel="noopener noreferrer">
            <img src={myIcon2} alt="Twitter" />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            rel="noopener noreferrer"
          >
            <img src={myIcon3} alt="LinkedIn" />
          </a>
          <a
            href="https://instagram.com/yourusername"
            rel="noopener noreferrer"
          >
            <img src={myIcon4} alt="Instagram" />
          </a>
        </div>
      </div>
      <div className="absolute flex justify-center items-center gap-4 transform -translate-x-1/2 left-1/2">
        {sectionNames.map((name, index) => (
          <button
            key={index}
            onClick={() => handleClick(name)}
            className="px-4 py-2 font-semibold text-gray-900 -mx-2"
          >
            {name}
          </button>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
