import { NavLink } from "react-router-dom";
import { Instagram, Github, Linkedin, X } from "lucide-react";
import "../App.scss";

const navFooter = [
  { name: "About", to: "/about" },
  { name: "Hello", to: "/" },
  { name: "Work", to: "/work" },
];

function Footer() {
  return (
    <section>
      <footer className=" fixed flex justify-between items-center bottom-0 w-full py-10 z-50">
        <div className="flex justify-center items-center">
          <div className="absolute flex justify-center items-center gap-4 transform -translate-x-1/2 left-1/2">
            {navFooter.map((item) => (
              <NavLink
                key={item.name}
                to={item.to}
                className={({ isActive }) =>
                  `px-4 py-2 font-medium text-xl -mx-2 ${
                    isActive
                      ? "menuUnderline active-underline"
                      : "menuUnderline hover-underline"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>
          <div className="absolute flex gap-2 right-0 py-2 px-10 font-medium">
            <Instagram className="inline-block mx-1" />
            <Github className="inline-block mx-1" />
            <Linkedin className="inline-block mx-1" />
            <X className="inline-block mx-1" />
          </div>
          <div className="absolute flex left-0 gap-4 py-2 px-10">
            <a>
              <p className="font-medium text-xl">Ulrich Ando</p>
            </a>
          </div>
        </div>
      </footer>
    </section>
  );
}

export default Footer;
