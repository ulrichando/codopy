// src/components/Footer.tsx
import { Instagram, Github, Linkedin, X } from "lucide-react";
import "../App.scss";
import { FooterProps } from "../types/types";

const Footer: React.FC<FooterProps> = ({ currentPage, onNavigate }) => {
  const navFooter = [
    { name: "About", index: 0 },
    { name: "Hello", index: 1 },
    { name: "Work", index: 2 },
  ];

  return (
    <section>
      <footer className="fixed flex justify-between items-center bottom-0 w-full py-10 z-50">
        <div className="flex justify-center items-center">
          <div className="absolute flex justify-center items-center gap-4 transform -translate-x-1/2 left-1/2">
            {navFooter.map((item) => (
              <button
                key={item.name}
                onClick={() => onNavigate(item.index)}
                className={`px-4 py-2 font-medium text-sm -mx-2 md:text-xl ${
                  currentPage === item.index
                    ? "menuUnderline active-underline"
                    : "menuUnderline hover-underline"
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>
          <div className="absolute gap-2 right-0 py-2 px-10 font-medium hidden md:block">
            <a
              href="https://www.instagram.com/co.dopy/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70 transition-opacity"
            >
              <Instagram className="inline-block mx-1" />
            </a>
            <a
              href="https://github.com/ulrichando/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70 transition-opacity"
            >
              <Github className="inline-block mx-1" />
            </a>
            <a
              href="https://www.linkedin.com/in/ulrichando/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70 transition-opacity"
            >
              <Linkedin className="inline-block mx-1" />
            </a>
            <a
              href="https://x.com/ando_ulrich"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70 transition-opacity"
            >
              <X className="inline-block mx-1" />
            </a>
          </div>
          <div className="absolute flex left-0 gap-4 py-2 px-10">
            <span className="font-medium text-xl hidden md:block">
              Ulrich Ando
            </span>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;