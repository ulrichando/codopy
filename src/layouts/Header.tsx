import { useState } from "react";
import {
  Menu,
  X,
  Instagram,
  Github,
  Linkedin,
  X as TwitterX,
  Youtube,
} from "lucide-react";

interface HeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const navigation = [
  { name: "Work", href: "/work" },
  { name: "About", href: "/about" },
  { name: "Hello", href: "/" },
  { name: "Get In Touch", href: "/contact" },
];

export default function Header({
  currentPage,
  onNavigate,
  ...headerProps
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <div
      className={`bg-white ${mobileMenuOpen ? "overflow-hidden" : ""}`}
      {...headerProps}
    >
      <header className="fixed inset-x-0 top-0 z-50">
        <nav
          className="flex items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a href="/" className="-m-1.5 p-1.5">
              <img className="h-8 w-auto" src="#" alt="" />
            </a>
          </div>
          <div className="flex lg">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-black"
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
              <a href="/" className="-m-1.5 p-1.5"></a>
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
                    <a
                      key={item.name}
                      href={item.href}
                      className={`-mx-0 block rounded-lg px-3 py-8 text-6xl font-semibold leading-11 tracking-wide ${
                        currentPage === item.name
                          ? "text-gray-400"
                          : "text-white"
                      }`}
                      onClick={() => {
                        closeMobileMenu();
                        onNavigate(item.name);
                      }}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>

                {/* Social media links only visible on mobile */}
                <div className="py-6">
                  <div className="text-white flex justify-center items-center gap-4 font-medium md:hidden">
                    <a
                      href="https://www.instagram.com/co.dopy/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-gray-300 transition-colors"
                    >
                      <Instagram className="w-6 h-6" />
                    </a>
                    <a
                      href="https://github.com/ulrichando/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-gray-300 transition-colors"
                    >
                      <Github className="w-6 h-6" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/ulrichando/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-gray-300 transition-colors"
                    >
                      <Linkedin className="w-6 h-6" />
                    </a>
                    <a
                      href="https://x.com/ando_ulrich"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-gray-300 transition-colors"
                    >
                      <TwitterX className="w-6 h-6" />
                    </a>
                    <a
                      href="https://www.youtube.com/@codopy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-gray-300 transition-colors"
                    >
                      <Youtube className="w-6 h-6" />
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
}
