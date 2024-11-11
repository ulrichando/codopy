import { NavLink } from "react-router-dom";
import { Instagram, Github, Linkedin, X, Youtube } from "lucide-react";

const navFooter = [
  { name: "About", to: "/about" },
  { name: "Hello", to: "/" },
  { name: "Work", to: "/work" },
];

const Footer = () => {
  return (
    <footer className="fixed bottom-0 w-full py-10 z-50">
      <div className="relative flex items-center justify-between">
        {/* Navigation Links */}
        <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center gap-4">
          {navFooter.map((item) => (
            <NavLink
              key={item.name}
              to={item.to}
              className={({ isActive }) =>
                `px-4 py-2 font-medium text-sm md:text-xl relative
                 after:content-[''] after:absolute after:bottom-0 
                 after:left-[50%] after:-translate-x-1/2
                 after:w-1/2 after:h-0.5 after:bg-current 
                 after:transform after:scale-x-0 after:origin-bottom-right
                 after:transition-transform after:duration-300
                 hover:after:scale-x-100 hover:after:origin-bottom-left
                 ${isActive ? "after:scale-x-100" : ""}`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        {/* Social Media Links */}
        <div className="absolute right-0 hidden md:flex items-center gap-2 px-10 py-2">
          <a
            href="https://www.instagram.com/co.dopy/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-600 transition-colors"
          >
            <Instagram className="w-6 h-6" />
          </a>
          <a
            href="https://github.com/ulrichando/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-600 transition-colors"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/ulrichando/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-600 transition-colors"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="https://x.com/ando_ulrich"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-600 transition-colors"
          >
            <X className="w-6 h-6" />
          </a>
          <a
            href="https://www.youtube.com/@codopy"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-600 transition-colors"
          >
            <Youtube className="w-6 h-6" />
          </a>
        </div>

        {/* Name */}
        <div className="absolute left-0 px-10 py-2">
          <p className="hidden md:block font-medium text-xl">Ulrich Ando</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
