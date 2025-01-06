import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Instagram, Github, Linkedin, X } from "lucide-react";
import "../App.scss";

interface HeaderProps {
  currentPage: number;
  onNavigate: (pageIndex: number) => void;
}

const navigation = [
  { name: "About", index: 0 },
  { name: "Hello", index: 1 },
  { name: "Work", index: 2 },
  { name: "Get In Touch", index: 3 },
];

const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const handleNavigation = (pageIndex: number) => {
    closeMobileMenu();
    // If it's the contact page (index 3), handle navigation
    if (pageIndex === 3) {
      onNavigate(3); // Navigate to contact page
    } else {
      onNavigate(pageIndex);
    }
  };

  return (
    <div
      className={`bg-transparent ${mobileMenuOpen ? "overflow-hidden" : ""}`}
    >
      <header className="fixed inset-x-0 top-0 z-50">
        <nav
          className="flex items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <button
              onClick={() => handleNavigation(1)}
              className="-m-1.5 p-1.5"
            >
              <img className="h-8 w-auto" src="#" alt="" />
            </button>
          </div>
          <div className="flex lg">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-black dark:text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              <Menu className="menu h-9 w-9" aria-hidden="true" />
            </button>
          </div>
        </nav>

        {/* Mobile Menu Panel */}
        {mobileMenuOpen && (
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-[#000000e2] px-6 py-6 sm:max-w-2xl sm:ring-1 sm:ring-gray-900/10 backdrop-blur-md backdrop-filter">
            <div className="flex items-center justify-between">
              <button
                onClick={() => handleNavigation(1)}
                className="-m-1.5 p-1.5"
              ></button>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-white"
                onClick={closeMobileMenu}
              >
                <span className="sr-only">Close menu</span>
                <X className="h-8 w-8" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-2">
                  {navigation.map((item) => (
                    <button
                      key={item.name}
                      onClick={() => handleNavigation(item.index)}
                      className={`-mx-0 block w-full text-left rounded-lg px-3 py-8 text-6xl font-semibold leading-11 text-white tracking-wide hover:text-gray-300 transition-colors ${
                        currentPage === item.index ? "text-blue-400" : ""
                      }`}
                    >
                      {item.name}
                    </button>
                  ))}
                </div>

                <div className="py-6">
                  <div className="flex justify-center items-center gap-4 font-medium md:hidden">
                    <a
                      href="https://www.instagram.com/co.dopy/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-gray-300 transition-colors"
                    >
                      <Instagram className="inline-block mx-1 w-6 h-6" />
                    </a>
                    <a
                      href="https://github.com/ulrichando/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-gray-300 transition-colors"
                    >
                      <Github className="inline-block mx-1 w-6 h-6" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/ulrichando/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-gray-300 transition-colors"
                    >
                      <Linkedin className="inline-block mx-1 w-6 h-6" />
                    </a>
                    <a
                      href="https://x.com/ando_ulrich"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-gray-300 transition-colors"
                    >
                      <X className="inline-block mx-1 w-6 h-6" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </div>
  );
};

export default Header;
