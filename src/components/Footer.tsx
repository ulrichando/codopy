import React from "react";
import { Instagram, Github, Linkedin, X, Youtube } from "lucide-react";
import SweepNavigation from "../pages/SweepNavigation";
import Homepage from "../pages/HomePage";
import WorkPage from "../pages/WorkPage";
import AboutPage from "../pages/AboutPage";
import "../App.scss";
import ContactPage from "../pages/ContactPage";

interface PageProps {
  content: React.ReactNode;
}

const Footer: React.FC = () => {
  const [currentPage, setCurrentPage] = React.useState(1); // Default to Homepage (middle)

  const navFooter = [
    { name: "About", index: 0 },
    { name: "Hello", index: 1 },
    { name: "Work", index: 2 },
  ];

  const pages: Array<PageProps> = [
    { content: <AboutPage /> },
    { content: <Homepage /> },
    { content: <WorkPage /> },
    { content: <ContactPage /> },
  ];

  // Function to handle page navigation
  const handleNavigation = (index: number) => {
    setCurrentPage(index);
  };

  return (
    <section>
      <footer className="fixed flex justify-between items-center bottom-0 w-full py-6 md:py-10 z-50">
        <div className="flex justify-center items-center">
          <div className="absolute flex justify-center items-center gap-4 transform -translate-x-1/2 left-1/2">
            {navFooter.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavigation(item.index)}
                className={`px-4 py-2  font-medium text-sm -mx-2 md:text-xl menuUnderline hover-underline ${
                  currentPage === item.index ? "active-underline" : ""
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
            <a
              href="https://www.youtube.com/@YourChannelName"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70 transition-opacity"
            >
              <Youtube className="inline-block mx-1" />
            </a>
          </div>
          <div className="absolute flex left-0 gap-4 py-2 px-10">
            <span className="font-medium text-xl hidden md:block">
              Ulrich Ando
            </span>
          </div>
        </div>
      </footer>
      <SweepNavigation
        pages={pages}
        currentPageIndex={currentPage}
        onPageChange={setCurrentPage}
      />
    </section>
  );
};

export default Footer;
